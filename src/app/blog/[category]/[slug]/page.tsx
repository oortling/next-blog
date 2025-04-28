import { notFound } from "next/navigation";
import { fromatDate, getBlogPosts } from "../../utils";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import CustomMDX from "@/components/mdx";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params
  const posts = getBlogPosts().find((post) => post.slug === slug);

  if (!posts) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={posts.metadata.category}
            slug={posts.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {posts.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {fromatDate(posts.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={posts.content} />
        </article>
      </Container>
    </>
  );
}
