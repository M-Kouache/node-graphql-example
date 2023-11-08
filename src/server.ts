import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const { Schema } = mongoose


mongoose.connect(process.env.DATABASE_URL);
const MyModel = mongoose.model('Test', new Schema({ name: String }));
const test = await MyModel.findOne();
console.log(test)



