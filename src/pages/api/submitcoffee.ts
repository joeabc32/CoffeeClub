// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import Account from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, ounces, roast } = req.body;
    const check = async () => {
        await connectMongoDB();
        const user = await Account.findOne({ email });
        if (user) {
            res.status(403).json({ message: "User already exists" });
        } else {
            const newUser = new Account({ email, name, password });
            await newUser.save();
            res.json({ message: 'User created successfully' });
        }
    }

    check();

};

