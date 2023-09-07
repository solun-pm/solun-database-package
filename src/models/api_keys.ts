import mongoose from "mongoose";

const api_keysSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
  }, 
  {
    timestamps: true,
  }
);

const api_keys = mongoose.models.User || mongoose.model("api_keys", api_keysSchema);

export default api_keys;
