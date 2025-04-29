import { db } from "@/db";

export async function GET() {
  return new Response("Hello World", { status: 200 });
}

export async function POST(request: Request) {
  const {slug, title, category} = await request.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: { slug },
    });

    if (existingPost) {
      await db.blog.update({
        where: { slug: slug },
        data: {
          view_count: {increment: 1},
        },
      });
    } else {
      await db.blog.create({
        data: {
          slug,
          title,
          category,
          view_count: 1,
        },
      });
    }
  } catch (error) {
    console.error("Error updating page view count:", error);
    return new Response("Failed to post to DB", { status: 500 });
  }
  
  return new Response("Succesfully post to DB", { status: 200 });
}