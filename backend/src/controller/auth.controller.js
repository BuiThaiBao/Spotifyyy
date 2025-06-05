import {User} from "../models/user.model.js";
export const authCallback =  async(req, res,next) => {
    try {
        const {id,firstName,lastName , imageUrl} = req.body;
        const user = await User.findOne({clerkId: id});

        if(!user){
            //sign up
            await User.create({
                clerkId: id,
                fullname: `${firstName} ${lastName}`,
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