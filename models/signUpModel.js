import { Schema, model} from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const signUpSchema = new Schema({
    "first_name": {type: String, required: true},
    "last_name": {type: String, required: true},
    "username": {type: String, required: true, unique: true},
    "mobile": {type: Number, required: true, unique: true},
    "email": {type: String, required: true, unique: true},
    "password": {type: String, required: true, unique: true},
});

signUpSchema.plugin(toJSON);
export const SignUpModel = model('signUp', signUpSchema);