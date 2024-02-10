"use client";
import { useState, useEffect } from "react";
const page = async ({ params }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posts/${params.id}`);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="prompt_layout flex-center">
      <div key={post.title} className="prompt_card glassmorphism" ard>
        <div className="logo_text ">{post.title}</div>
        <div className="desc">{post.text}</div>
        <div className="text-lg my-2 text-blue-800">{post.userID}</div>
        <button type="button" className="copy_btn">
          Copy
        </button>
      </div>
    </div>
  );
};

export default page;
