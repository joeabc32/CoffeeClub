import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github'
import type { NextAuthOptions } from 'next-auth'
import { Provider } from "next-auth/providers";
import { connectMongoDB } from '@/lib/dbConnect';
import { Account } from '@/lib/models';

type CredentialsType = {
    email: string;
    password: string;
};

export const authoptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET as string
        }),

        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email: ",
                    type: "email",
                },
                password: {
                    label: "Password: ",
                    type: "password"
                }
            },
            async authorize(credentials: CredentialsType | undefined) {
                // This is where I would retrieve user data from Mongo dB
                try {
                    if (!credentials) {
                        return null; // Handle the case where credentials are undefined
                    }
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
        })
    ] as Provider[],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },

    jwt: {
        encryption: true
    },
    theme: {
        colorScheme: "dark",
    },
    pages: {
        signIn: '/signin'
    },
}

export default NextAuth(authoptions)