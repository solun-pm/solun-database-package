import mongoose from "mongoose";

const user_domains = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    domain: {
        type: String,
        required: true,
        unique: true,
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
    verification_status: {
        type: String,
        required: true,
    },
    catch_all: {
        type: Boolean,
        required: true,
        default: false,
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

const User_Domains = mongoose.models.User_Domains || mongoose.model("User_Domains", user_domains);

export default User_Domains;