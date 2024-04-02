const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    number:Number
})

module.exports = mongoose.model("user",userSchema);