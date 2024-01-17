import FollowingBar from "../components/FollowingBar";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

// SSR로 렌더링된다. 사용자에게 요청이 올때마다 페이지를 만든다
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className="flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full basis-3/4 min-w-0">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/4 ml-8">
        <SideBar user={user} />
      </div>
    </section>
  );
}
