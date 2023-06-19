import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
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

const log = mongoose.models.log || mongoose.model("log", logSchema);

export default log;