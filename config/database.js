
const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() =>console.log("Successfully  Connection with database" ))
    .catch((error) =>{
        console.log("Error occurred while connection with database")
        console.log(error);
        process.exit(1);
    })
}
module.exports.connectDB = connectDB();