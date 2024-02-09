"use client";
import React, { useState } from "react";

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Post",
    text: "",
    tag: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      type: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/posts/new", {
        method: "POST",
        body: JSON.stringify({
          type: formData.type,
          title: formData.title,
          text: formData.text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Post created successfully:", data);
      } else {
        const contentType = response.headers.get("Content-Type") || "";
        if (contentType.includes("application/json")) {
          const errorData = await response.text();
          console.error("Failed to create post. Server error:", errorData);
        } else {
          const errorText = await response.text();
          console.error("Failed to create post. Server response:", errorText);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md rounded px-12 pt-6 pb-4 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="type"
        >
          Type
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleSelectChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Post">Post</option>
          <option value="Article">Article</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Text
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form_textarea"
          id="text"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Text"
        />
      </div>
      <button type="submit" className="outline_btn">
        Create
      </button>
    </form>
  );
};

export default YourFormComponent;
