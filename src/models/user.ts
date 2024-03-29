import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: false,
    },
    domain: {
      // Domain name e.g. solun.pm
      type: String,
      required: true,
    },
    fqe: {
      // Fully Qualified Email e.g. username@solun.pm
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    two_fa: {
      type: Boolean,
      required: true,
      default: false,
    },
    two_fa_secret: {
      type: String,
      required: false,
      default: "",
    },
    membership: {
      type: String,
      required: true,
      default: "free",
    },
    fast_login: {
      type: Boolean,
      required: true,
      default: false,
    },
    beta: {
      type: Boolean,
      required: true,
      default: false,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    private_key: {
      type: String,
      required: true,
    },
    public_key: {
      type: String,
      required: true,
    },
    recoverable: {
      type: Boolean,
      required: true,
      default: false,
    },
    recovery_key: {
      type: String,
      required: false,
    },
    aliases: {
      type: Number,
      required: true,
      default: 0,
    },
    mailboxes: {
      type: Number,
      required: true,
      default: 0,
    },
    domains: {
      type: Number,
      required: true,
      default: 0,
    },
    api_access: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
