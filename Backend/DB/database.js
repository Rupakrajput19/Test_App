import mongoose from 'mongoose';

const dbUrl = "mongodb://localhost:27017/SinUp_User_DB";

mongoose.connect(dbUrl)

.then(() => console.log("Connection Successfull with DB..."))

.catch((error) => console.log(error));