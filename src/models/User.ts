import mongoose from "mongoose";
const { Schema, model } = mongoose;


const userSchema = new Schema({
    first_name:{
       type: String,
       required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    created_at: {
        type: Date,
        default: () => new Date(),
        immutable: true
    },
    updated_at: Date
});

const UserModel = model('User', userSchema);

export default UserModel;

