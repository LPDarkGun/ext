import { model, models } from "mongoose";
import mongoose from 'mongoose';

const caseLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true, enum: ['send', 'receive', 'use', 'receivePromoCode', 'addCase'] },
    amount: { type: Number, required: true },
    relatedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Для отправки/получения
    date: { type: Date, default: Date.now },
});

export const CaseLog = models.CaseLog || model('CaseLog', caseLogSchema);

