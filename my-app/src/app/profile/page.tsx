import { getUserProfile } from "@/lib/profile";
import SNSProfile from "@/app/ui/Profile/SNSProfile";

export default async function MyProfilePage() {
  const MOCK_USER_ID = 1;
  const profile = await getUserProfile(MOCK_USER_ID, MOCK_USER_ID);

  if (!profile) {
    return <div>내 프로필 정보를 불러올 수 없습니다.</div>;
  }

  return <SNSProfile profile={profile} pid={MOCK_USER_ID} />;
}