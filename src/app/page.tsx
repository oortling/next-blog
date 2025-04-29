import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCategroies from "@/components/home/top-categories";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">Top Categories</h1>
            <TopCategroies></TopCategroies>
          </div>
          <div className="mt-10 sticky top-0">
            <PopularPosts />
          </div>
        </div>
      </main>

    </Container>

  );
}
