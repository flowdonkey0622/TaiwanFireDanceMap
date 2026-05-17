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
  clubId?: string | null;
  clubName?: string | null;
  calendarTone?: string | null;
};

export type FireDanceClub = {
  id: string;
  schoolName: string;
  clubName: string;
  county: CountyName;
  summary: string;
  instagramUrl: string | null;
  youtubeUrl: string | null;
  status?: "draft" | "published" | "archived";
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
