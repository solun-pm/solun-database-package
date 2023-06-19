import mongoose from "mongoose";

const api_logsSchema = new mongoose.Schema({
        method: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        ms: {
            type: Number,
            required: true,
        },
        remoteAddress: {
            type: String,
            required: true,
        },
        referrer: {
            type: String,
            required: true,
        },
        userAgent: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
    }
);

const api_logs = mongoose.models.api_logs || mongoose.model("api_logs", api_logsSchema);

export default api_logs;