import {Song} from '../models/song.model.js';
export const getAllSongs = async (req, res, next) => {
    try {
        const songs = await Song.find().sort({createdAt: -1})
        res.status(200).json({
            message: "Lấy danh sách bài hát thành công",
            songs, })
    } catch (error) {   
        next(error);  
    }
}
export const getFeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 6 } }, // Lấy ngẫu nhiên 10 bài hát
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ])
        res.json(songs);
    } catch (error) {   
        next(error);  
    }
}
export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4 } }, // Lấy ngẫu nhiên 4 bài hát
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ])
        res.json(songs);
    } catch (error) {   
        next(error);  
    }
}
export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            { $sample: { size: 4} }, 
            {
                $project: {
                    _id: 1,
                    title: 1,
                    artist: 1,
                    imageUrl: 1,
                    audioUrl: 1,
                },
            },
        ])
        res.json(songs);
    } catch (error) {   
        next(error);  
    }
}