import { model, models } from "mongoose";
import mongoose from 'mongoose';


const clanStatsSchema = new mongoose.Schema({
    membersCount: {
        type: Number,
        default: 0
    },
    lastJoined: String, // Просто строка с именем последнего вступившего
    lastLeft: String   // Просто строка с именем последнего ушедшего
}, { timestamps: true });

export const ClanStats = models.ClanStats || model('ClanStats', clanStatsSchema);
