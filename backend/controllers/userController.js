import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const getAll = async (req, res) => {
    try {
        const get = await User.find()
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getByTokenTotal = async (req, res) => {
    try {
        const get = await User.findById({ _id: req.user.id })
        let amount=0;
        get.product.map((i)=>{
            amount=amount+i.amount
        });
        res.status(200).json(amount)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getByToken = async (req, res) => {
    try {
        const get = await User.findById({ _id: req.user.id })

        res.status(200).json(get)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const register = async (req, res, next) => {
    try {
        const email = req.body.email.toLowerCase()
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const find = await User.findOne({ email: email })
        if (find) {
            res.status(401).json({ message: "Email already exists" });
        } else {
            
                const newUser = new User({
                    name: req.body.name,
                    email: email,
                    password: hash,
                    phoneNo: req.body.phoneNo
                });
                await newUser.save();
                res.status(201).json({ message: "User has been created." });
            }
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const email = req.body.email.toLowerCase()
        const user = await User.findOne({ email: email })
        if (user) {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            if (!isPasswordCorrect) return res.status(400).json({ message: "password wrong" });
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

            res.header("token", token).status(200).json({ isAdmin: user.isAdmin, token });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const buyProduct = async (req, res) => {
    const updatePro = req.body
    let update = await User.findByIdAndUpdate({ _id: req.user.id }, { $push: { "product": updatePro } }, { new: true })
    if (update) {
        try {
            res.send(update)
        } catch (error) {
            res.send(error.message)
        }
    } else {
        res.send("User not found")
    }
}