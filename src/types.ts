export type CountyName = string;

export type FireDanceEvent = {
  id: string;
  county: CountyName;
  title: string;
  date: string;
  venue: string;
  type: "workshop" | "jam" | "performance" | "festival";
  summary: string;
  link: string;
};

export type CountyFeatureProperties = {
  COUNTYSN?: string;
  COUNTYNAME?: string;
  name?: string;
};

export type CountyFeature = GeoJSON.Feature<
  GeoJSON.Geometry,
  CountyFeatureProperties
>;
