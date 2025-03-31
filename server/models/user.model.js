const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  email:{
    type : String,
    required : true,
    unique : true
  }, 
  password:{
    type : String,
    required : true,

  },
  userprofile:{
    type: String,
    default : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  },
  role :{
    type : String,
    default: "user"
  }

})


const userModel = mongoose.model("user" ,userSchema )


module.exports =userModel