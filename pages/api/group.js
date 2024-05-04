import {Group} from "@/models/GroupModel";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await Group.findOne({_id:req.query.id}));
        } else {
            res.json(await Group.find());
        }
    }
} 