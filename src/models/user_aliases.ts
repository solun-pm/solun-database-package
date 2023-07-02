import mongoose from "mongoose";

const user_aliases = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    fqa: {
        type: String,
        required: true,
        unique: true,
    },
    alias_name: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },
    goto: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User_Aliases = mongoose.models.User_Aliases || mongoose.model("User_Aliases", user_aliases);

export default User_Aliases;