import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { type, title, text } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Post({
      type,
      title,
      text,
      userID: mongoose.Types.ObjectId("65c40397ea9275e9595fb142"),
    });

    await newPrompt.save();
    return new Response("done", { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new post", { status: 500 });
  }
};
