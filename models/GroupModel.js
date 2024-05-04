import { model, models } from "mongoose";
import mongoose from 'mongoose';
const Permission = require('../models/Permission');


const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    perms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const Group = models.Group || model('Group', groupSchema);
