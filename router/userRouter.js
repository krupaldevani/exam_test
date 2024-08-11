const express = require("express");
const router = express.Router();

const { userInfo,getUserInfoWithUserValue } = require("../controllers/user");
const { getUserInfoUsingId ,findUserInfoUsingCity,findCity} = require("../controllers/user")


router.post("/userdata",userInfo);
router.get("/userdata/:key",getUserInfoWithUserValue);
router.get("/user/:id",getUserInfoUsingId);
router.get("/city",findUserInfoUsingCity)
router.get("/city/:key",findCity);


module.exports = router;