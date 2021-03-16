import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
    salt: {
      type: String,
      unique: false,
      required: true,
    },
    posts: [{ title: String, content: String }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
