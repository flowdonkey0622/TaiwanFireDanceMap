type TaiwanRegion = {
  label: string;
  counties: string[];
};

// 這個順序是後台與公開社團列表共用的由北到南顯示順序。
export const taiwanRegions: TaiwanRegion[] = [
  {
    label: "北區",
    counties: ["臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"],
  },
  {
    label: "中區",
    counties: ["苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣"],
  },
  {
    label: "南區",
    counties: ["嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣"],
  },
  {
    label: "東區",
    counties: ["花蓮縣", "臺東縣"],
  },
  {
    label: "離島",
    counties: ["澎湖縣", "金門縣", "連江縣"],
  },
];

export const counties = taiwanRegions.flatMap((region) => region.counties);

export function getCountyOrder(county: string): number {
  const countyIndex = counties.indexOf(county);
  return countyIndex === -1 ? counties.length : countyIndex;
}
