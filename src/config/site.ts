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
  url: "https://www.codeflows.cn",
  ogImage: "https://www.codeflows.cn/og",
  links: {
    twitter: "https://twitter.com/oldmeat5",
    github: "https://github.com/oortling",
  },
};
