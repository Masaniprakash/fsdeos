import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true,
        },
        createDate: {
            type: Date,
            default: Date.now(),
        },
    
    }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product