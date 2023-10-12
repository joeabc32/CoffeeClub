// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import { Account } from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email } = req.query;
    if (!email) {
        res.status(400).json({ error: 'Email paramter is missing' });
    }
    const check = async () => {
        await connectMongoDB();
        const user = await Account.findOne({ email });
        if (user) {
            res.status(200).json({ message: "User already exists", cups: user.ounces });
        } else {
            res.json({ message: 'User created successfully' });
        }
    }

    check();

};

