import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const post = await res.json();
  // console.log(post);
  return {
    title: `${post.title}  blogpost_${params.postId}`,
    keywords: ["blog", "post", "blogs"],
    description: post.body,
  };
}

export default async function BlogPostPage({ params: { postId } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const { title, body } = await response.json();

  if (response === 404) {
    notFound();
  }

  return (
    <div className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
    </div>
  );
}
