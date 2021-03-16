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
      select: false,
    },
    salt: {
      type: String,
      unique: false,
      required: true,
      select: false,
    },
    posts: [{ title: String, content: String }],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
