import { ClanGrowth } from "@/models/clanGrowthSchema";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const { method } = req;

    if (method === "GET") {
        if (req.query?.id) {
            res.json(await ClanGrowth.findOne({ _id: req.query.id }));
        } else {
            const mostRecentClanGrowth = await ClanGrowth.findOne().sort({ _id: -1 });
            res.json(mostRecentClanGrowth);
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
