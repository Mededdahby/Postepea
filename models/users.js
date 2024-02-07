import {model, Schema, models } from 'mongoose'

const userDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User =  models.User||model("User", userDataSchema);

export default User;
