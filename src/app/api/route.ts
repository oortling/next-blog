import { db } from "@/db";

export async function GET() {
  try {
    const data = await db.blog.findMany({
      take: 10,
      select: { title: true, category: true, slug: true },
      orderBy: [{ view_count: "desc" }],
    });

    return Response.json(data);
  } catch (error) {
    console.error("Database Error...", error);
    throw new Error("Failed to fetch the popular posts");
  }
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
          title: title,
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