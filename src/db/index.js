import mongoose from "mongoose";
// const mongoose = require("mongoose");
import { DB_NAME } from "../constants.js";

const ConnectDB = async ()=>{
    try {
        const connectMongodb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`database is connected: ${connectMongodb.connection.host}`);
    } catch (error) {
        console.error("error: ", error);
        process.exit(1);
    }
}

export default ConnectDB;