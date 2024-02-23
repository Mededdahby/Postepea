// // pages/index.js
"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [expandedPosts, setExpandedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
        setExpandedPosts(Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const filteredPosts = posts.filter((post) => {
    const searchTerm = searchInput.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.type.toLowerCase().includes(searchTerm) ||
      post.text.toLowerCase().includes(searchTerm) ||
      (post.userID && post.userID.username.toLowerCase().includes(searchTerm))
    );
  });

  const toggleExpand = (index) => {
    const newExpandedPosts = [...expandedPosts];
    newExpandedPosts[index] = !newExpandedPosts[index];
    setExpandedPosts(newExpandedPosts);
  };

  const truncatedText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="">
      <input
        type="text"
        className="search_input mt-4 mb-8 p-4 text-xl"
        placeholder="Search for Posts and Articles"
        value={searchInput}
        onChange={handleSearchChange}
      />

      <div className="prompt_layout">
        {filteredPosts.map((post, index) => (
          <div key={post._id} className="prompt_card glassmorphism">
            <div className="logo_text">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </div>
            <div className="">{post.type}</div>
            <div className="desc">
            {expandedPosts[index] ? post.text : truncatedText(post.text, 150)}
              {!expandedPosts[index] && post.text.length > 150 && (
                <span className="text-blue-500 cursor-pointer" onClick={() => toggleExpand(index)}>
                  Read More
                </span>
              )}
            </div>
            <p className="my-6 text-blue-900 flex-end text-xl">
              {post.userID?.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
