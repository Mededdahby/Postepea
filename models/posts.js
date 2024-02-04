import { model, Schema, Types } from "mongoose";

const dataPost = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["post", "article"],
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

const DataPost = model("Posty", dataPost);

module.exports=DataPost;