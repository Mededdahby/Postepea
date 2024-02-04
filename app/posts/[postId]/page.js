import Link from "next/link";
import Posts from "@constants/posts";
const page = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      cache: "no-cache",
    }
  );
  const post = await res.json();
  return (
    <div className="prompt_layout flex-center">
      <div key={post.title} className="prompt_card glassmorphism" ard>
        <div className="logo_text ">{post.title}</div>
        <div className="desc">{post.body}</div>
        <div className="text-lg my-2 text-blue-800">{post.tags}</div>
        <button type="button" className="copy_btn">
          Copy
        </button>
      </div>
    </div>
  );
};

export default page;
