import mongoose from "mongoose";

const user_aliases = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
      unique: true,
    },
    alias_name: {
        type: String,
        required: true,
        unique: true,
    },
    domain: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User_Aliases = mongoose.models.User_Aliases || mongoose.model("User_Aliases", user_aliases);

export default User_Aliases;