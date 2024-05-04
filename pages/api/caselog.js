import{ CaseLog }from "@/models/CaseLogModels";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await CaseLog.findOne({_id:req.query.id}));
        } else {
            res.json(await CaseLog.find());
        }
    }
} 