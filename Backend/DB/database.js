import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/SinUp_User_DB")

.then(() => console.log("Connection Successfull with DB..."))

.catch((error) => console.log(error));
