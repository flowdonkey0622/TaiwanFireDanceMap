import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import topoData from "../data/taiwan-counties.topo.json";
import type { CountyFeature } from "../types";

type TaiwanMapProps = {
  activeCounty: string | null;
  selectedCounty: string | null;
  eventCounts: Record<string, number>;
  onHoverCounty: (countyName: string | null) => void;
  onSelectCounty: (countyName: string) => void;
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

function getCountyName(featureItem: CountyFeature): string {
  const sourceName =
    featureItem.properties?.COUNTYNAME ??
    featureItem.properties?.name ??
    "未知縣市";

  return countyDisplayNames[sourceName] ?? sourceName;
}

export function TaiwanMap({
  activeCounty,
  selectedCounty,
  eventCounts,
  onHoverCounty,
  onSelectCounty,
}: TaiwanMapProps) {
  const { mainCounties, islandGroups } = useMemo(() => {
    const topology = topoData as unknown as CountyTopology;
    const collection = feature(
      topology,
      topology.objects.layer1,
    ) as GeoJSON.FeatureCollection<GeoJSON.Geometry, CountyFeature["properties"]>;
    const counties = collection.features as CountyFeature[];
    const mainCounties = counties.filter(
      (county) => !ISLAND_COUNTIES.has(getCountyName(county)),
    );

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

  const renderCounty = (
    county: CountyFeature,
    countyName: string,
    path: ReturnType<typeof geoPath>,
    keyPrefix = "",
  ) => {
    const isActive = activeCounty === countyName;
    const isSelected = selectedCounty === countyName;
    const count = eventCounts[countyName] ?? 0;

    return (
      <path
        key={`${keyPrefix}${countyName}`}
        className={[
          "county",
          isActive ? "is-active" : "",
          isSelected ? "is-selected" : "",
          count > 0 ? "has-events" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        d={path(county) ?? ""}
        tabIndex={0}
        role="button"
        aria-label={`${countyName}，${count} 筆火舞活動`}
        onMouseEnter={() => onHoverCounty(countyName)}
        onMouseLeave={() => onHoverCounty(null)}
        onFocus={() => onHoverCounty(countyName)}
        onBlur={() => onHoverCounty(null)}
        onClick={() => onSelectCounty(countyName)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelectCounty(countyName);
          }
        }}
      >
        <title>{`${countyName}：${count} 筆活動`}</title>
      </path>
    );
  };

  return (
    <figure className="map-shell" aria-label="台灣火舞活動互動地圖">
      <svg
        className="taiwan-map"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">台灣縣市火舞活動地圖</title>
        <desc id="map-desc">
          滑鼠移動到縣市會高亮，點擊縣市會顯示火舞活動資訊。
        </desc>
        <defs>
          <filter id="county-lift" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="4"
              floodColor="#101820"
              floodOpacity="0.18"
            />
          </filter>
          <linearGradient id="county-fill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff6df" />
            <stop offset="100%" stopColor="#f3b05f" />
          </linearGradient>
          <linearGradient id="county-active-fill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff2b8" />
            <stop offset="100%" stopColor="#ff7a45" />
          </linearGradient>
        </defs>

        <g className="map-depth main-depth" aria-hidden="true">
          {mainCounties.map(({ county, countyName, path }) => (
            <path key={`${countyName}-depth`} d={path(county) ?? ""} />
          ))}
        </g>

        <g className="map-counties main-counties">
          {mainCounties.map(({ county, countyName, path }) =>
            renderCounty(county, countyName, path),
          )}
        </g>

        <g className="island-insets" aria-label="離島放大圖">
          {islandGroups.map(({ box, county, countyName, path }) => (
            <g className="island-inset" key={`${countyName}-inset`}>
              <rect
                className="island-inset__frame"
                x={box.x}
                y={box.y}
                width={box.width}
                height={box.height}
                rx="8"
              />
              <text
                className="island-inset__label"
                x={box.x + box.width / 2}
                y={box.y + box.height - 10}
                textAnchor="middle"
              >
                {countyName.replace("縣", "")}
              </text>
              <g className="map-depth island-depth" aria-hidden="true">
                <path d={path(county) ?? ""} />
              </g>
              {renderCounty(county, countyName, path, "island-")}
            </g>
          ))}
        </g>
      </svg>
    </figure>
  );
}
