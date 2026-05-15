export type CalendarEventTone = "blue" | "red" | "orange" | "purple";

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  tone: CalendarEventTone;
};

export const calendarEvents: CalendarEvent[] = [
  { id: "tmuh-fire", title: "北醫火舞", date: "2026-05-14", tone: "blue" },
  { id: "nkust-fire-art", title: "虎科炎藝", date: "2026-05-22", tone: "red" },
  { id: "nycu-fire", title: "交大火舞", date: "2026-05-23", tone: "blue" },
  { id: "nthu-flow", title: "清大光舞", date: "2026-05-24", tone: "blue" },
  { id: "ncue-bai-sha", title: "彰師白沙", date: "2026-05-25", tone: "red" },
  { id: "cgu-light-fire", title: "長庚光火", date: "2026-05-26", tone: "blue" },
  { id: "ncu-fire", title: "中央火舞", date: "2026-05-26", tone: "blue" },
  { id: "ccu-fire-art", title: "中正火藝", date: "2026-05-26", tone: "orange" },
  { id: "nhu-fire", title: "南華火舞", date: "2026-05-27", tone: "orange" },
  { id: "fju-fire", title: "輔大光火", date: "2026-05-27", tone: "blue" },
  { id: "yuntech-fire", title: "雲科熾舞", date: "2026-05-28", tone: "red" },
  { id: "ndhu-fire", title: "東華火舞", date: "2026-05-28", tone: "purple" },
  { id: "cycu-fire", title: "中原火舞", date: "2026-05-30", tone: "blue" },
  { id: "nchu-flow", title: "中興光舞", date: "2026-06-01", tone: "red" },
  { id: "nccu-fire", title: "政大火舞", date: "2026-06-02", tone: "blue" },
  { id: "nkust-fire", title: "高科火藝", date: "2026-06-03", tone: "orange" },
  { id: "stust-fire", title: "南臺火舞", date: "2026-06-03", tone: "orange" },
  { id: "thu-fire", title: "東海火舞", date: "2026-06-03", tone: "red" },
  { id: "ncku-fire", title: "成大火舞", date: "2026-06-04", tone: "orange" },
  { id: "ntut-fire", title: "北科火舞", date: "2026-06-04", tone: "blue" },
  { id: "stu-fire-flow", title: "樹德火流", date: "2026-06-17", tone: "orange" },
  { id: "ntu-ntust-ntnu", title: "臺大臺科臺師大三校火舞", date: "2026-06-27", tone: "blue" },
];
