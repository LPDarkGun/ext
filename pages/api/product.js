import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    await mongooseConnect();
    const {method} = req;

    if(method === "GET") {
        if (req.query?.id) {
            res.json(await Product.findOne({_id:req.query.id}));
        } else {
            res.json(await Product.find());
        }
    }

    if (method === "POST") {
        const {name, model, color} = req.body;
        const productDoc = await Product.create({
            name, model, color
        })
        res.json(productDoc)
    }

    if (method === "DELETE") {
        if(req.query?.id) {
            await Product.deleteOne({_id:req.query?.id})
            res.json(true)
        }
    }
} 