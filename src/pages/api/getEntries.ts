// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import { Account, Submission } from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email } = req.query;
    const getData = async () => {
        try {
            await connectMongoDB();
            const result = await Submission.find().sort({ timestamp: -1 }).limit(19)
            res.status(200).json({ message: "Successfully fetched data", data: result });
        } catch (error) {
            res.status(500).json({ message: "Error fetching data" });
        }
    }
    getData();
};

