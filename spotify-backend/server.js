// cloudinary : we can store the image and mp3 files
// cors : we can connect the backend and frontend
// dotenv : that will allow us to store the enviroment variable
// express : to create the backend api's
// mongoose : to connect with the database and manage our database 
// multer : we can upload the image and mp3 files that we will get from the frontend 
// nodemon : that we can create one script that will easily run our project 

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';


// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary();


// middlewares
app.use(express.json());
app.use(cors());


// initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)
app.get('/', (req, res) => res.send(" API Working"))

app.listen(port, () => console.log(`Server started on ${port}`))