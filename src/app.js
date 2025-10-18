import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// access the express as a app where app is doing everything in backend.

const app = express();

// cors is basically used for the connection of frontend and backend.
// it only takes the request from the original url of the frontend it do not take the request form everywhere.

app.use(cors({
    origin: process.env.CORS_ORIGIN, // here we mention the origin means which url it takes the request 
    credentials: true
}))

// use is used only for middleware
// express.json is used for to access the json data from the user.
app.use(express.json({limit: "10kb"}))
// express.urlencodded is used for encode the url.
app.use(express.urlencoded({extended: true, limit: "10kb"}));
// exress.static access the data from the public folder
app.use(express.static("public"));
// cookieParser is used for the access the cookie from the user.
app.use(cookieParser());


export {app};