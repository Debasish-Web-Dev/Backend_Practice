// import mongoose from "mongoose"; // import the mongoose in connect the database.

import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import express from "express";


const app = express();
const port = process.env.PORT || 8000;

// that is basically used to config the path of the environment variable.

dotenv.config(
    {
        path : './env'
    }
)


// get the request from the user and send the respose to the user.
app.get("./", (req, res)=>{
    res.status(200).send("response is sent in my backend");
})


// connect the database.
// then() is used for the listen the server that the server is running in the correct port or not.
// catch() is used for the error handling if any error is present in this connection of the server then it give the error in backend.
ConnectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`the server is liten in ${port} port`);
        
    })
})
.catch((err) => {
    console.log("mongodb is given an error: ", err);
    
})




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