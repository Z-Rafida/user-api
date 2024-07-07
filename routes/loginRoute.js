import { Router } from "express";
import { postLogin, getLogins, getLogin, patchLogin, deleteLogin } from "../controllers/loginController.js";


// create router
const loginRouter = Router();

// define all routes

// add login
loginRouter.post('/login', postLogin);

// get all logins
loginRouter.get('/logins', getLogins);

// get a single login
loginRouter.get('/login/:id', getLogin);

// update an account
loginRouter.patch('/login/:id', patchLogin);

// delete an account
loginRouter.delete('/login/:id', deleteLogin);

// export Router
export default loginRouter;
