"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const YourFormComponent = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    title: "",
    type: "Post",
    text: "",
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
          userID: session?.user.id,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Failed to create post. Server error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-md rounded px-12 pt-6 pb-4 mb-4 w-full max-w-xl"
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
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form_textarea"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          placeholder="Text"
          rows="4"
        />
      </div>
      <button type="submit" className="outline_btn">
        Create
      </button>
    </form>
  );
};

export default YourFormComponent;
