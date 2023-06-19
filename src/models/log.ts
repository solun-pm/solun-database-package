import mongoose from "mongoose";

const logsSchema = new mongoose.Schema({
        log_name: {
            type: String,
            required: true,
        },
        log_message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
    }
);

const logs = mongoose.models.logs || mongoose.model("logs", logsSchema);

export default logs;