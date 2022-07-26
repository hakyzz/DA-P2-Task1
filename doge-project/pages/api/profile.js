import { connectToDatabase } from "../../util/mongodb";

export async function getData() {
    const { db } = await connectToDatabase();
    const myData = await db
    .collection("profile")
    .find({})
    .limit(1)
    .toArray();

    return JSON.parse(JSON.stringify(myData[0]))
  }
  
export default async (req, res) => {
    const myData = await getData()
    const { method } = req;

    switch(method) {
        case 'GET':
            res.json(myData);
        break;
    }
}