// pages/api/posts.js

import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic';
export const GET = async () => {
    try {
      await connectToDB();
      const posts = await Post.find({}).populate('userID'); 
      
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error(error);

      return NextResponse.error({ error: "Failed to fetch all posts" }, { status: 500 });
    }
  }

