import { model, models } from "mongoose"
import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    username: { type: String, required: true },
    kills: { type: Number, required: true, default: 0 },
});

const battleDaySchema = new mongoose.Schema({
    date: { type: Date, required: true, unique: true },
    participants: [participantSchema],
    winner: {
        username: String,
        kills: Number,
    }
});

export const BattleDay = models.BattleDay || model('BattleDay', battleDaySchema);
