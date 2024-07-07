import { Schema,model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const loginSchema = new Schema({
   "userName": {type: String, unique: true},
   "email": { type: String, unique:true},
   "password": {type: String, unique: true, required: true},
});


loginSchema.plugin(toJSON);
export const LoginModel = model('login', loginSchema);