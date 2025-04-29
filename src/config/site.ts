type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Code Flows",
  description:
    "Code Flows is a blog about programming, technology, and software development.",
  url: "https://next-blog-sand-delta.vercel.app",
  ogImage: "https://next-blog-sand-delta.vercel.app/og",
  links: {
    twitter: "https://twitter.com/oldmeat5",
    github: "https://github.com/oortling",
  },
};
