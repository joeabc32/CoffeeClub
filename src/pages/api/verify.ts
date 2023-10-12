// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongoDB } from '@/lib/dbConnect';
import Account from '@/lib/models';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    async authorize(credentials) {
        // This is where I would retrieve user data from Mongo dB
        try {
            const { email, password } = credentials;
            await connectMongoDB();
            const user = await Account.findOne({ email });
            console.log(user);
            if (!user) {
                return null
            }

            if (user.password !== password) {
                return null
            }

            return user;

        }
        catch (error) {
            console.log(error);
            throw (Error);
        }
    }
};

