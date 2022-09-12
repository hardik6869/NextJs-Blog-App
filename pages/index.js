import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1>NextJs Blog Site</h1>
    </Layout>
  );
}

export const getStaticProps = () => {
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
  return {
    props: {
      posts,
    },
  };
};
