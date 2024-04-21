import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

userSchema.post('validate', (args) => {
    console.log(args)
})

export const User = models?.User || model("User", userSchema) 