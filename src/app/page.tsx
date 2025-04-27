import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div>
          <div>
            <h1>Top Categories</h1>
            {/*  */}
          </div>
          <div>
            <h1>Popular Posts</h1>
            {/*  */}
          </div>
        </div>
      </main>

    </Container>

  );
}
