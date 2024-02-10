// pages/index.js
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search_input"
        placeholder="Search for Posts and Articles"
      />
      <div className="prompt_layout">
        {posts.map((post) => (
          <div key={post._id} className="prompt_card glassmorphism">
            <div className="logo_text">{post.title}</div>
            <div className="">{post.type}</div>
            <div className="desc">{post.text}</div>
            <div className="text-lg my-2 text-blue-800">User ID: {post.userID}</div>
            <button type="button" className="copy_btn">
              <Link href={`/posts/${post._id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
