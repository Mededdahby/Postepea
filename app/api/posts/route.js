// pages/api/posts.js

import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import User from "@models/users";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
      await connectToDB();
      const posts = await Post.find({});
      
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error(error);

      return NextResponse.error({ error: "Failed to fetch all posts" }, { status: 500 });
    }
  }

