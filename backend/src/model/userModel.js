import { Schema, model } from "mongoose";

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    mobile: Number,
    gender: String,
    isAdmin: false
})

