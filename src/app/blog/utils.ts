import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get all the mdx files from the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// read data from those files
function readMDXFile(filaPath: fs.PathOrFileDescriptor): matter.GrayMatterFile<string> {
  let rawContent = fs.readFileSync(filaPath, 'utf-8');
  return matter(rawContent);
}
// present the mdx data and metadata
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    }
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'));
}

export function fromatData(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();
  
  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthAgo > 0) {
    formattedDate = `${monthAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate =  targetDate.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}