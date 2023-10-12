// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import { Account, Submission } from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { call } = req.query;
    if (call === "Most Cups Today") {
        try {
            const date = new Date();
            const day = date.toISOString().split('T')[0];
            const getMostDaily = async () => {
                await connectMongoDB();
                const result = await Submission.find({ "timestamp": { $gt: day } })
                console.log(result)
                res.status(200).json({ message: "Successfully fetched data", data: result });
            }

            getMostDaily();
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to Fetch data" })
        }

    }
    if (call === "Most All Time") {
        try {
            const getAllTime = async () => {
                await connectMongoDB();
                const result = await Account.find().sort({ ounces: -1 }).limit(1);
                const response = result[0]
                res.status(200).json({ message: "Success", data: { name: response.name, ounces: response.ounces } })
            }

            getAllTime();
        } catch (error) {
            console.log(error);
        }
    }
};

