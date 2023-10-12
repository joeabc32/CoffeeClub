// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import { Account } from '@/lib/models';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, ounces, name } = req.body;

    const updateCoffee = async () => {
        await connectMongoDB();
        const result = await Account.updateOne({ email }, { $inc: { ounces: ounces } });

        res.status(200).json({ message: "Works" });

    }

    const verifyAccount = async () => {
        await connectMongoDB();
        const user = await Account.findOne({ email });
        if (user) {
            return;
        } else {
            const newUser = new Account({ email, name, password: "Oath-account", ounces: 0 });
            await newUser.save();
            res.json({ message: 'User created successfully' });
        }
    }

    const submitCoffee = async () => {
        await verifyAccount();
        updateCoffee();
    }
    submitCoffee();
};

