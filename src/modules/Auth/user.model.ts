import { Schema, model } from "mongoose";
import { TuserSignup } from "./user.interface";

import  bcrypt from 'bcrypt';
import config from "../../config";

const userSignup = new Schema<TuserSignup>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: 0
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
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