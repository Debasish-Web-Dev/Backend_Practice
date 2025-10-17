// import mongoose from "mongoose"; // import the mongoose in connect the database

import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

dotenv.config(
    {
        path : './env'
    }
)



ConnectDB();




/*

import express from "express"; // import the express for the backend
const app = express();

( async ()=>{ // async awit is used for the asyncronus function beacause database is present is different continent.
    // try catch is basically used for the handaling the error that is profetional approach to do backend connect with the database.
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`) // connect the url of the mongodb atlas which is present in the .env file.
        app.on("error", (error)=>{ // this on listen is used for that the any error is occure or not during the coonection of the database.
            console.log("error: ", error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log("the database is listen on the backend");
            
        })
    } catch (error) {
        console.error("error: ", error);
        throw error;
    }
})()

*/