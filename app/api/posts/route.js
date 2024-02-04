// pages/api/posts.js

import { NextResponse } from "next/server";

export  async function GET(req, res) {
  const data=[
    {text:"hello1"},
    {text:"hello2"},
    {text:"hello3"}
  ]
  try {
   return  NextResponse.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch all prompts" });
  }
}
