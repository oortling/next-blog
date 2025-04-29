import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import ProfileCard from "@/components/home/profile-card";
import TopCategroies from "@/components/home/top-categories";
import { MainNav } from "@/components/main-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div className="mb-4">
            <ProfileCard />
          </div>
          <div className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>文章分类</CardTitle>
              </CardHeader>
              <CardContent>
                <TopCategroies />
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 sticky top-0">
            <Card>
              <CardHeader>
                <CardTitle>热门发布</CardTitle>
              </CardHeader>
              <CardContent>
                <PopularPosts />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Container>
  );
}
