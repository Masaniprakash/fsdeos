import Product from "../models/productModel.js"

export const uploadProduct=async (req, res) => {
    try {
        let addProduct= await new Product({
            name:req.body.name,
            amount:req.body.amount,
            material:req.body.material,
            weight:req.body.weight,
        })
        await addProduct.save()
        res.status(201).send({ message: "Product uploaded successfully" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

export const getAllProduct=async(req,res)=>{
    try {
        const get=await Product.find()
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const getByIdProduct=async(req,res)=>{
    try {
        const get=await Product.findById(req.params.id)
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

