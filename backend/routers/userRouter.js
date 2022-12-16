import express from "express";
import { getAll , login  , getByToken , register , buyProduct, getByTokenTotal  } from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router=express.Router()

router.get("/",getAll)
router.get("/token",auth,getByTokenTotal)
router.get("/gettoken",auth,getByToken)
router.put("/",auth,buyProduct)
router.post("/login",login)
router.post("/register",register)

export default router