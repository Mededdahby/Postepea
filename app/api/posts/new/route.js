import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";

export const POST = async (request) => {
  try {
    await connectToDB();
    const { type, title, text, userID } = await request.json();
    const newPost = {
      type,
      title,
      text,
      userID,
    };
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
