// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import { Submission, Account } from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, name, ounces, roast } = req.body;

    const submitEntry = async () => {
        await connectMongoDB();
        const newSubmission = new Submission({ email, name, ounces, roast });
        await newSubmission.save();

        res.status(200).json({ message: "Works" });

    }
    submitEntry();

};

