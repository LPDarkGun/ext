import { model, models } from "mongoose";
import mongoose from 'mongoose';


const clanMembershipSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    username: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
    leaveDate: { type: Date },
    isActive: { type: Boolean, default: true }, // true, если пользователь на данный момент в клане
    kills: { type: Number, default: 0 } // Добавляем поле для учета убийств
});

export const ClanMembership = models.ClanMembership || model('ClanMembership', clanMembershipSchema);
