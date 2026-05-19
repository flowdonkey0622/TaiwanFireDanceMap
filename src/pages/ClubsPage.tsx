import { ClubDirectory } from "../components/ClubDirectory";

export function ClubsPage() {
  // 社團資料只在這頁使用，因此載入狀態交給 ClubDirectory 管理。
  return <ClubDirectory />;
}
