import { Schema, model } from "mongoose";
import { TuserSignup } from "./user.interface";
import config from "../config";
import  bcrypt from 'bcrypt';

const userSignup = new Schema<TuserSignup>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
userSignup.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
    next();
  });

 export  const UserSignup = model<TuserSignup>('UserSignup', userSignup);