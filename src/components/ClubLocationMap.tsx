import { KeyboardEvent, MouseEvent, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import topoData from "../data/taiwan-counties.topo.json";
import type { CountyFeature, FireDanceClub } from "../types";

type ClubLocationMapProps = {
  clubs: FireDanceClub[];
};

type CountyTopology = Topology<{
  layer1: GeometryCollection;
}>;

const WIDTH = 620;
const HEIGHT = 760;
const ISLAND_COUNTIES = new Set(["金門縣", "連江縣", "澎湖縣"]);

const countyDisplayNames: Record<string, string> = {
  台北市: "臺北市",
  台中市: "臺中市",
  台南市: "臺南市",
  台東縣: "臺東縣",
  桃園縣: "桃園市",
};

type ActiveCountyPopup = {
  countyName: string;
  x: number;
  y: number;
};

function getPopupPosition(
  containerBounds: DOMRect | undefined,
  clientX: number,
  clientY: number,
) {
  if (!containerBounds) {
    return { x: 0, y: 0 };
  }

  return {
    x: Math.min(
      Math.max(clientX - containerBounds.left, 8),
      Math.max(containerBounds.width - 240, 8),
    ),
    y: Math.min(
      Math.max(clientY - containerBounds.top, 8),
      Math.max(containerBounds.height - 280, 8),
    ),
  };
}

function getCountyName(featureItem: CountyFeature): string {
  const sourceName =
    featureItem.properties?.COUNTYNAME ??
    featureItem.properties?.name ??
    "未知縣市";

  return countyDisplayNames[sourceName] ?? sourceName;
}

function getRingArea(ring: GeoJSON.Position[]): number {
  return Math.abs(
    ring.reduce((area, point, index) => {
      const nextPoint = ring[(index + 1) % ring.length];
      return area + point[0] * nextPoint[1] - nextPoint[0] * point[1];
    }, 0) / 2,
  );
}

function getPolygonArea(polygon: GeoJSON.Position[][]): number {
  const [outerRing, ...holes] = polygon;
  return Math.max(
    0,
    getRingArea(outerRing) -
      holes.reduce((area, ring) => area + getRingArea(ring), 0),
  );
}

function removeSmallDetachedPolygons(county: CountyFeature): CountyFeature {
  if (county.geometry.type !== "MultiPolygon") {
    return county;
  }

  const polygons = county.geometry.coordinates;
  const polygonAreas = polygons.map(getPolygonArea);
  const largestArea = Math.max(...polygonAreas);
  const filteredPolygons = polygons.filter(
    (_, index) => polygonAreas[index] >= largestArea * 0.03,
  );

  if (filteredPolygons.length === polygons.length || filteredPolygons.length === 0) {
    return county;
  }

  return {
    ...county,
    geometry: {
      ...county.geometry,
      coordinates: filteredPolygons,
    },
  };
}

export function ClubLocationMap({ clubs }: ClubLocationMapProps) {
  const [activePopup, setActivePopup] = useState<ActiveCountyPopup | null>(null);
  const { mainCounties, islandGroups } = useMemo(() => {
    const topology = topoData as unknown as CountyTopology;
    const collection = feature(
      topology,
      topology.objects.layer1,
    ) as GeoJSON.FeatureCollection<GeoJSON.Geometry, CountyFeature["properties"]>;
    const counties = collection.features as CountyFeature[];
    const mainCounties = counties
      .filter((county) => !ISLAND_COUNTIES.has(getCountyName(county)))
      .map(removeSmallDetachedPolygons);

    const mainCollection: GeoJSON.FeatureCollection<
      GeoJSON.Geometry,
      CountyFeature["properties"]
    > = {
      type: "FeatureCollection",
      features: mainCounties,
    };
    const mainProjection = geoMercator().fitExtent(
      [
        [166, 34],
        [592, 724],
      ],
      mainCollection,
    );
    const mainPath = geoPath(mainProjection);

    const islandBoxes: Record<string, { x: number; y: number; width: number; height: number }> = {
      連江縣: { x: 26, y: 92, width: 112, height: 112 },
      金門縣: { x: 26, y: 226, width: 112, height: 112 },
      澎湖縣: { x: 26, y: 360, width: 112, height: 132 },
    };

    const islandGroups = Object.entries(islandBoxes).flatMap(([countyName, box]) => {
      const featureItem = counties.find((county) => getCountyName(county) === countyName);
      if (!featureItem) {
        return [];
      }

      const islandProjection = geoMercator().fitExtent(
        [
          [box.x + 18, box.y + 22],
          [box.x + box.width - 18, box.y + box.height - 18],
        ],
        featureItem,
      );

      return [
        {
          box,
          county: featureItem,
          countyName,
          path: geoPath(islandProjection),
        },
      ];
    });

    return {
      mainCounties: mainCounties.map((county) => ({
        county,
        countyName: getCountyName(county),
        path: mainPath,
      })),
      islandGroups,
    };
  }, []);

  const clubsByCounty = useMemo(
    () =>
      clubs.reduce<Record<string, FireDanceClub[]>>((groups, club) => {
        groups[club.county] = [...(groups[club.county] ?? []), club];
        return groups;
      }, {}),
    [clubs],
  );
  const clubCounts = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(clubsByCounty).map(([countyName, countyClubs]) => [
          countyName,
          countyClubs.length,
        ]),
      ),
    [clubsByCounty],
  );
  const clubCountyCount = Object.values(clubCounts).filter((count) => count > 0).length;
  const clubTotal = Object.values(clubCounts).reduce((total, count) => total + count, 0);
  const activeClubs = activePopup ? clubsByCounty[activePopup.countyName] ?? [] : [];

  function openCountyPopup(countyName: string, event: MouseEvent<SVGPathElement>) {
    event.stopPropagation();

    const countyClubs = clubsByCounty[countyName] ?? [];

    if (countyClubs.length === 0) {
      setActivePopup(null);
      return;
    }

    const mapBounds = event.currentTarget
      .closest(".club-location-map")
      ?.getBoundingClientRect();

    setActivePopup({
      countyName,
      ...getPopupPosition(mapBounds, event.clientX, event.clientY),
    });
  }

  function openCountyPopupWithKeyboard(
    countyName: string,
    event: KeyboardEvent<SVGPathElement>,
  ) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const countyClubs = clubsByCounty[countyName] ?? [];

    if (countyClubs.length === 0) {
      return;
    }

    event.preventDefault();

    const countyBounds = event.currentTarget.getBoundingClientRect();
    const mapBounds = event.currentTarget
      .closest(".club-location-map")
      ?.getBoundingClientRect();

    setActivePopup({
      countyName,
      ...getPopupPosition(
        mapBounds,
        countyBounds.left + countyBounds.width / 2,
        countyBounds.top + countyBounds.height / 2,
      ),
    });
  }

  const renderCounty = (
    county: CountyFeature,
    countyName: string,
    path: ReturnType<typeof geoPath>,
    keyPrefix = "",
  ) => {
    const count = clubCounts[countyName] ?? 0;

    return (
      <path
        key={`${keyPrefix}${countyName}`}
        className={count > 0 ? "club-location-county has-clubs" : "club-location-county"}
        d={path(county) ?? ""}
        role={count > 0 ? "button" : undefined}
        tabIndex={count > 0 ? 0 : undefined}
        aria-label={count > 0 ? `${countyName}，${count} 個社團` : undefined}
        onClick={(event) => openCountyPopup(countyName, event)}
        onKeyDown={(event) => openCountyPopupWithKeyboard(countyName, event)}
      >
        <title>{`${countyName}：${count} 個社團`}</title>
      </path>
    );
  };

  return (
    <div className="club-location-map" onClick={() => setActivePopup(null)}>
      <figure className="club-location-map__figure" aria-label="台灣火舞社團分布地圖">
        <svg
          className="club-location-map__svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-labelledby="club-location-map-title club-location-map-desc"
        >
          <title id="club-location-map-title">台灣火舞社團分布地圖</title>
          <desc id="club-location-map-desc">
            標示目前已發布社團所在縣市。
          </desc>
          <g className="club-location-depth" aria-hidden="true">
            {mainCounties.map(({ county, countyName, path }) => (
              <path key={`${countyName}-depth`} d={path(county) ?? ""} />
            ))}
          </g>
          <g>
            {mainCounties.map(({ county, countyName, path }) =>
              renderCounty(county, countyName, path),
            )}
          </g>
          <g className="club-location-islands" aria-label="離島">
            {islandGroups.map(({ box, county, countyName, path }) => (
              <g key={`${countyName}-inset`}>
                <rect
                  className="club-location-island-frame"
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  rx="8"
                />
                <text
                  className="club-location-island-label"
                  x={box.x + box.width / 2}
                  y={box.y + box.height - 10}
                  textAnchor="middle"
                >
                  {countyName.replace("縣", "")}
                </text>
                {renderCounty(county, countyName, path, "island-")}
              </g>
            ))}
          </g>
        </svg>
      </figure>
      <div className="club-location-map__summary">
        <strong>{clubTotal}</strong>
        <span>個社團</span>
        <small>{clubCountyCount} 個縣市</small>
      </div>
      {activePopup ? (
        <div
          className="club-location-popup"
          onClick={(event) => event.stopPropagation()}
          style={{
            left: `${activePopup.x}px`,
            top: `${activePopup.y}px`,
          }}
        >
          <div className="club-location-popup__header">
            <strong>{activePopup.countyName}</strong>
            <button
              type="button"
              aria-label="關閉社團列表"
              onClick={() => setActivePopup(null)}
            >
              ×
            </button>
          </div>
          <p>{activeClubs.length} 個社團</p>
          <ul>
            {activeClubs.map((club) => (
              <li key={club.id}>{club.clubName}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
