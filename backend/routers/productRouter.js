import express from "express";
import { uploadProduct,getAllProduct ,getByIdProduct } from "../controllers/productController.js";
import auth from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js"

const router = express.Router()

router.post("/",uploadProduct)
router.get("/",getAllProduct)
router.get("/:id",getByIdProduct)

export default router