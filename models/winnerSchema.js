import { model, models } from "mongoose";
import mongoose from 'mongoose';

const winnerSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true // Убедитесь, что запись за каждый день уникальна
    },
    topLikes: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        count: { type: Number, required: true } // Количество лайков
    }],
    topKills: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        count: { type: Number, required: true } // Количество убийств
    }]
});

export const Winner = models.Winner || model('Winner', winnerSchema);

