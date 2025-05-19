import { Router } from "express";
import {User} from "../models/user.model.js";
const router = Router();

router.post("/callback", async(req, res) => {
    try {
        const {id,firstName,lastName , imageUrl} = req.body;
        const user = await User.findOne({cleakId: id});

        if(!user){
            await User.create({
                cleakId: id,
                firstName:` ${firstName}${lastName}`,
                imageUrl
            })
        }

        res.status(200).json({
           success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",error,
        });
    }
});

export default router;