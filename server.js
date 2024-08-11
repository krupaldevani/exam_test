const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());
const database = require("./config/database");
database.connectDB;
PORT = process.env.PORT || 3000;

const userRouter = require("./router/userRouter");
app.use("/api/v1",userRouter);

app.listen(PORT , () =>{
    console.log(`Server start at ${PORT}`);
})
