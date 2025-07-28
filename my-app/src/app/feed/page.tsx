// app/feed/page.tsx
import Feed from "@/app/ui/feed/post"
import FollowList from "@/app/ui/feed/follow-lists"

export default async function Page() {
  const res = await fetch("/api/feed", { cache: "no-store" })
  if (!res.ok) {
    return <div className="p-4 text-red-500">데이터를 불러올 수 없습니다.</div>
  }

  const { posts, followings } = await res.json()

  return (
    <>
      <Feed posts={posts} />
      <FollowList followings={followings} />
    </>
  )
}
