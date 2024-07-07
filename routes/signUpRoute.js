import { Router } from "express";
import { createAccount, getAllAccounts } from "../controllers/signUPController.js";

// create Router
const signUpRouter = Router();

// define all routes

// create an account
signUpRouter.post('/signUp', createAccount);

// get all accounts
signUpRouter.get('/signUps', getAllAccounts);


// export Router
export default signUpRouter;