import { model, Schema, Types, models } from "mongoose";

const dataPost = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Post", "Article"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  userID: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = models.Post || model("Post", dataPost);

export default Post;
