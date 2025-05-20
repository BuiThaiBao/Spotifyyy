import {User} from "../models/user.model.js";
export const authCallback =  async(req, res,next) => {
    try {
        const {id,firstName,lastName , imageUrl} = req.body;
        const user = await User.findOne({cleakId: id});

        if(!user){
            //sign up
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
        console.error("Có lỗi khi xác thực người dùng:", error);
        next(error);
    }
}