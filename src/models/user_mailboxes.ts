import mongoose from "mongoose";

const user_mailboxes = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    fqe: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    private_key: {
      type: String,
      required: true,
    },
    public_key: {
      type: String,
      required: true,
    },
    quota: {
        type: Number,
        required: true,
    },
    rate_limit: {
        type: Number,
        required: true,
    },
    rate_limit_interval: {
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

const User_Mailboxes = mongoose.models.User_Mailboxes || mongoose.model("User_Mailboxes", user_mailboxes);

export default User_Mailboxes;