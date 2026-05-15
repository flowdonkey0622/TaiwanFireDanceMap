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
  const { counties, path } = useMemo(() => {
    const topology = topoData as unknown as CountyTopology;
    const collection = feature(
      topology,
      topology.objects.layer1,
    ) as GeoJSON.FeatureCollection<GeoJSON.Geometry, CountyFeature["properties"]>;

    const projection = geoMercator().fitSize([WIDTH, HEIGHT], collection);
    return {
      counties: collection.features as CountyFeature[],
      path: geoPath(projection),
    };
  }, []);

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

        <g className="map-depth" aria-hidden="true">
          {counties.map((county) => {
            const countyName = getCountyName(county);
            return <path key={`${countyName}-depth`} d={path(county) ?? ""} />;
          })}
        </g>

        <g className="map-counties">
          {counties.map((county) => {
            const countyName = getCountyName(county);
            const isActive = activeCounty === countyName;
            const isSelected = selectedCounty === countyName;
            const count = eventCounts[countyName] ?? 0;

            return (
              <path
                key={countyName}
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
          })}
        </g>
      </svg>
    </figure>
  );
}
