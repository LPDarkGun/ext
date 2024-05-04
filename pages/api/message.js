import { Message } from "@/models/messageSchema";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Message.findOne({ _id: req.query.id }));
        } else {
            // Fetch the last 10 messages, sorted by createdAt in descending order
            const messages = await Message.find().sort({ createdAt: -1 }).limit(10);
            res.json(messages);
        }
    }
}
