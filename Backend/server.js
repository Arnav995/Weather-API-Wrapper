import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import weatherRouter from "./Routes/weatherRoutes.js";

// this is loading the dotenv file to use the API key and Port
dotenv.config();


const app = express();


// Middleware
// Cors Allows and helps frontend to talk to backen
app.use(cors());
// Allows backend to read the the json data
app.use(express.json());

//Routes
app.use("/api/weather",weatherRouter);


// this way we use port from .env file or or default
const port = process.env.PORT || 5011;


// app.listen helps to start the server
app.listen(port,()=>{
     console.log(`server running on ${port}`);
})