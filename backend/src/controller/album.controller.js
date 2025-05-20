import { Album } from "../models/album.model.js";
export const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find();
        res.status(200).json({
            message: "Lấy danh sách album thành công",
            albums,
        });

    } catch (error) {
        next(error);
    }
}
export const getAlbumById = async (req, res, next) => {
    try {
        const { albumId } = req.params;
        const album = await Album.findById(albumId).populate("songs");
        if (!album) {
            return res.status(404).json({
                message: "Album không tồn tại",
            });
        }
        res.status(200).json({
            message: "Lấy album thành công",
            album,
        });
    } catch (error) {
        console.log("Có lỗi khi lấy album:", error);
        next(error);
    }
}