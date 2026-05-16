export type OnlineActivity = {
  id: string;
  title: string;
  description: string;
  period?: string;
  primaryLink: {
    label: string;
    url: string;
  };
  secondaryLink?: {
    label: string;
    url: string;
  };
  accent: "ember" | "sky" | "sun";
};

// 網路活動採靜態資料維護，避免 Instagram 或表單平台限制嵌入時影響主畫面。
export const onlineActivities: OnlineActivity[] = [
  {
    id: "taiwan-poi-challenge",
    title: "Poi 挑戰",
    description: "台灣 poi 練習者的線上挑戰與作品分享活動。",
    primaryLink: {
      label: "前往 Instagram",
      url: "https://www.instagram.com/taiwan.poi.challenge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    accent: "ember",
  },
  {
    id: "double-long-staff-2026",
    title: "2026 雙長手大集合 影片招募",
    description:
      "募集雙長手相關影片，透過線上投稿一起整理與分享台灣 Flow Arts 社群作品。",
    period: "影片招募期間：5/10 ～ 7/10",
    primaryLink: {
      label: "查看活動貼文",
      url: "https://www.instagram.com/p/DYJhkoDEYg6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    },
    secondaryLink: {
      label: "填寫表單",
      url: "https://forms.gle/hvizqCPVYDY5DT587",
    },
    accent: "sun",
  },
];
