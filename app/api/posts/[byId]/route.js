
import { connectToDB } from "@utils/ConnectDb";
import Post from "@models/posts";
import { NextResponse } from "next/server";
import mongoose from "mongoose"

export const GET = async (params) => {
  const id = params;
console.log(id)

    try {
      await connectToDB();
      const post = await Post.findById({id});
      console.log(post)
      return NextResponse.json(post, { status: 200 });
    } catch (error) {
      console.error(error);

      return NextResponse.error({ error: "Failed to fetch all posts" }, { status: 500 });
    }
  }

