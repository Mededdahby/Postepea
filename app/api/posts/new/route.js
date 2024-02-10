import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import mongoose from "mongoose";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { type, title, text } = await request.json();
    const userID = new mongoose.Types.ObjectId("65c40331ea9275e9595fb13f");

    const newPost = {
      type,
      title,
      text,
      userID,
    };

    console.log("New Post:", newPost);

    await Post.create(newPost);

    return new Response(
      JSON.stringify("Post created successfully", { status: 200 })
    );
  } catch (error) {
    console.error("Error creating a new post:", error);
    return new Response(
      JSON.stringify("Failed to create a new post", { status: 500 })
    );
  }
};
