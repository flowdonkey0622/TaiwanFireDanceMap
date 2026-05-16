export type TutorialPlaylist = {
  id: string;
  title: string;
  description: string;
  playlistId: string;
  accent: "ember" | "sky" | "sun";
};

// 手動新增教學分類時，只要在這個陣列新增一筆 playlistId 即可。
// YouTube 會依 playlistId 自動帶入該播放清單目前的所有影片。
export const tutorialPlaylists: TutorialPlaylist[] = [
  {
    id: "poi",
    title: "Poi 教學",
    description: "從基礎手感、平面控制到常見招式組合的 Poi 練習播放清單。",
    playlistId: "PLtwryFmhqGCN4RSPoFJSB-lTwYDHzrXz3",
    accent: "ember",
  },
  {
    id: "meteor",
    title: "流星教學",
    description: "整理流星道具的入門操作、轉換與節奏練習內容。",
    playlistId: "PLtwryFmhqGCN7QI3Ks00c9C60AaRq4LJ_",
    accent: "sky",
  },
  {
    id: "staff",
    title: "短棍教學",
    description: "短棍控制、旋轉、拋接與火舞基礎動作的教學播放清單。",
    playlistId: "PLtwryFmhqGCOPna-boongv3NeVZsnTV4w",
    accent: "sun",
  },
];
