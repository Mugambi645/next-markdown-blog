import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
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
}

export default function NextTag({ posts }) {
  return (
  <>
    {posts.map(( slug, frontmatter ) => {
        if (slug === "next") {
          return <h2 key={index}>{frontmatter.tags}</h2>;
        }

        // 👇️ render nothing
        return null;
      })}
      </>
  );
}
