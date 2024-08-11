const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        company:{
            type:String,
            required:true,
        }
    }
)

module.exports = mongoose.model("User",userSchema);