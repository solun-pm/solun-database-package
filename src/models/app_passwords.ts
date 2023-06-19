import mongoose from "mongoose";

const app_passwords_schema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    app_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const app_passwords =
  mongoose.models.app_passwords || mongoose.model("app_passwords", app_passwords_schema);

export default app_passwords;