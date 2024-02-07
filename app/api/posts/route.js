// pages/api/posts.js

import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import User from "@models/users";
import { NextResponse } from "next/server";

export const GET = async () => {
  // if (context.req.method === "GET") {
    try {
      await connectToDB();
      const posts = await Post.find({});
      const users = await User.find({});
      
      // Using NextResponse to simplify sending JSON responses
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error(error);

      // Using NextResponse for error responses
      return NextResponse.error({ error: "Failed to fetch all posts" }, { status: 500 });
    }
  }

