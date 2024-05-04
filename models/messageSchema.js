import { model, models } from "mongoose";
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    type: {
        type: String,
        enum: ['private', 'clan', 'local', 'global'], // Определяем возможные типы чата
        required: true
    },
    sender: {
        type: String, // Изменено на строку для хранения никнеймов
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: { createdAt: true, updatedAt: false } }); // Включаем метки времени только для создания

export const Message = models.Message || model('Message', messageSchema);