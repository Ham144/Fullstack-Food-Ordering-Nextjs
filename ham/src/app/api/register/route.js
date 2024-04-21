import { User } from "@/app/models/user"
import mongoose from "mongoose"

export async function POST(req) {
    const body = await req.json()
    mongoose.connect(process.env.MONGO_URL)
    const createdUser = await User.create(body)
    if (createdUser) return Response.json({ ok: true, createdUser })
    else return Response.json({ "error": "error server" })
}
