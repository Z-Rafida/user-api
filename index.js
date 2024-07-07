import express from "express";
import { databaseConnection } from "./config/database.js";
import mongoose from "mongoose";
import loginRouter from "./routes/loginRoute.js";
// import signUpRouter from "./routes/signUpRoute.js";


// connect to database
await mongoose.connect(process.env.MONGO_URL);
databaseConnection();


// create app
const userApp = express();


// use routes
userApp.use(loginRouter);
// userApp.use(signUpRouter);


// listen to app
const port = 3050
userApp.listen(port, () => {
    console.log(`App running on port ${port}`)
});