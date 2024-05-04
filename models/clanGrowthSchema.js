import { model, models } from "mongoose";
import mongoose from 'mongoose';


const clanGrowthSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    memberCount: { type: Number, required: true },
    newMembers: { type: Number, default: 0 }, 
    leftMembers: { type: Number, default: 0 }
});

export const ClanGrowth = models.ClanGrowth || model('ClanGrowth', clanGrowthSchema);
