const User = require("../models/userModule");


module.exports.userInfo = async (req, res) => {
    try {
        const { firstName, lastName, city, company } = req.body;

        if (!firstName || !lastName || !city || !company) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });

        }
        const userData = await User.create({ firstName, lastName, city, company });
        return res.status(200).json({
            success: true,
            message: "Data created successfully",
            data: userData,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports.getUserInfoWithUserValue = async (req, res) => {
    try {

        console.log(req.params.key);


        const userResponse = await User.find(
            {
                "$or": [

                    { "firstName": { $regex: req.params.key } },
                    { "lastName": { $regex: req.params.key } },
                    { "city": { $regex: req.params.key } },

                ]
            }
        )

        if (userResponse.length == 0) {
            return res.send({
                success: false,
                message: "data not found"

            })
        }

        console.log("user", userResponse);
        res.status(200).send({
            success: true,
            message: "find successfull",
            data: userResponse,

        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}

module.exports.getUserInfoUsingId = async (req, res) => {
    try {
        const id = req.params.id;
      
        const userInfo = await User.findById(id);
        return res.status(200).json({
            success: true,
            message: "User find successfully",
            data: userInfo,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports.findUserInfoUsingCity = async (req,res) => {
    try{
        const city = req.params.city;
        const userResponse = await User.distinct("city")
        return res.status(200).json({
            success:true,
            message:"Data find successfiully",
            data:userResponse
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        
        })
    }
}

module.exports.findCity = async (req,res) => {
    try{
        console.log(req.params.key);
        const userResponse = await User.find(
            {
                "$or": [

                 
                    { "city": { $regex: req.params.key } },

                ]
            }
        )

        if (userResponse == "") {
            return res.send({
                success: false,
                message: "Data not found"

            })
        }

        console.log("user", userResponse);
        res.status(200).send({
            success: true,
            message: "Data find successfull",
            data: userResponse,

        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        
        })
    }
}