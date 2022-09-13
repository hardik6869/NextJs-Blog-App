import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import Post from "../../../components/Post";
import { sortByDate } from "../../../utils";
import { POSTS_PER_PAGE } from "../../../config";

export default function BlogPage({ posts, numPage, currentPage }) {
  return (
    <div>
      <h1 className="text-5xl border-b4 p-5 font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const numPage = Math.ceil(files.length / POSTS_PER_PAGE);
  let paths = [];
  for (let i = 1; i <= numPage; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = parseInt((params && params.page_index) || 1);
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  const numPage = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPost = posts
    .sort(sortByDate)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);
  return {
    props: {
      posts: orderedPost,
      numPage,
      currentPage: page,
    },
  };
};
