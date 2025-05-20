// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js';
import userRoutes from './routes/user.route.js';
import fileUpload from 'express-fileupload';
import path from 'path';
import authRoutes from './routes/auth.route.js';
import adminRoutes from './routes/admin.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';
import statRoutes from './routes/stat.route.js';
import { clerkMiddleware } from '@clerk/express'
dotenv.config();


const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT;
app.use(express.json());// dunng de parse req.bopy
app.use(clerkMiddleware({})); //add auth to req 
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, '/tmp'),
  createParentPath: true,
  limits:{
    fileSize: 10 * 1024 * 1024 //10mb
  }
})); 


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);


//Xu ly file loi
app.use((err, req, res, next) => {
  res.status(500).json({message: process.env.NODE_ENV === 'production' ? 'Lỗi máy chủ !' : err.message});
});

app.listen(PORT, () => {
  console.log('Server is running on port' + PORT);
  connectDB();
})