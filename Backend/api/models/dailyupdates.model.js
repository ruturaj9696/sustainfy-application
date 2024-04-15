import mongoose from "mongoose";

const { Schema } = mongoose;

const DailyUpdateSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    powergeneration: {
        type: Number,
        required: true,
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { new: true });

export const updateModel = mongoose.model("dailyupdate", DailyUpdateSchema);
