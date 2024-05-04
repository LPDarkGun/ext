import {Permission} from "@/models/Permission";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await Permission.findOne({_id:req.query.id}));
        } else {
            res.json(await Permission.find());
        }
    }
} 