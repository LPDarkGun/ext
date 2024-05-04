import { BattleDay } from "@/models/BattleDay";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await BattleDay.findOne({_id:req.query.id}));
        } else {
            res.json(await BattleDay.find().sort({ _id: -1 }));
        }
    }
} 