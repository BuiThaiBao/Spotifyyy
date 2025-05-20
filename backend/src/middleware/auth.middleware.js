import { clerkMiddleware } from "@clerk/express";

export const protectRoute = (req, res, next) => {
    if(!req.auth.userId){
        return res.status(401).json({
            message: "Bạn phải đăng nhập để sử dụng chức năng này",
        });
        
    }
    next();
}

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

        if(!isAdmin){
            return res.status(403).json({
                message: "Bạn không có quyền truy cập vào chức năng này",
            });
            
        }
        next();
    } catch (error) {
        next(error);
    }
}