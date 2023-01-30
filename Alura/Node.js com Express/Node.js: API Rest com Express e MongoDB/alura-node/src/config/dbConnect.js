import mongoose from "mongoose";

mongoose.connect("mongodb+srv://caroline:123@alura.wwwt8ir.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;