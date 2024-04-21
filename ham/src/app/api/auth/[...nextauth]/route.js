import { User } from "@/app/models/user"
import mongoose from "mongoose"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



const handler = NextAuth({
    // Configure one or more authentication providers
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log({ credentials });
                return null
            }
        })
        // ...add more providers here
    ],
})
export { handler as GET, handler as POST }