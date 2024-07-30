const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PayAndBank');

  console.log('Connected to MongoDB');
}
try{
  const userSchema = new mongoose.Schema({
    firstName: {
      type : String,
      required: true,
      trim: true,
      maxLength: 50
    },
    lastName : {
      type : String,
      required: true,
      trim: true,
      maxLength: 50
    },
    email: {
      type : String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 70
    },
    password : {
      type : String,
      required : true,
      minLength : 6
  },
  });

  const User = mongoose.model("User" , userSchema);
    module.exports = {
      User
    }
  }catch(err){
  console.log(err);
}