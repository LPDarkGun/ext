import { ClanMembership } from "@/models/clanMembershipSchema";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await ClanMembership.findOne({_id:req.query.id}));
        } else {
            res.json(await ClanMembership.find());
        }
    }
} 