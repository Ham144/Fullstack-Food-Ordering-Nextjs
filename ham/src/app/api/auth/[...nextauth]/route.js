import { User } from "@/app/models/user"
import mongoose, { createConnection } from "mongoose"
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
                const email = credentials?.email
                const password = credentials?.password

                console.log({ password })

                mongoose.connect(process.env.MONGO_URL)
                const user = User.findOne({ email })
                if (user && user.password === password) {
                    return user
                }

                return null
            }
        })
        // ...add more providers here
    ],
})
export { handler as GET, handler as POST }