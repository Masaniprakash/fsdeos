import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        product: [{
            name: {
                type: String,
            },
            amount: {
                type: Number,
            },
            date: {
                type: String,
            },
        }],
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }
);

const User = mongoose.model("User", UserSchema);
export default User