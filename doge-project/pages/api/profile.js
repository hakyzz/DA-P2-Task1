import { connectToDatabase } from "../../util/mongodb.js";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { method } = req;
    
    switch(method) {
        case 'GET':
            const profile = await db
            .collection("profile")
            .find({})
            .limit(1)
            .toArray();
    
            res.json(profile);
        break;
    }
};