import prisma from "@/lib/prisma";

export async function getUserProfile(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      nickname: true,
      profile: true,
      createdAt: true,
      posts: {
        select: { id: true },
      },
      followers: {
        select: {
          followerId: true,
        },
      },
      following: {
        select: {
          followingId: true,
        },
      },
    },
  });

  if (!user) return null;

  return {
    name: user.name,
    bio: `가입일: ${user.createdAt.toLocaleDateString()}`,
    followerCount: user.followers.length,
    isFollowing: false, // 나중에 세션 기반으로 처리
  };
}
