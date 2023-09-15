import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err)=> console.log(err));

    mongoose.set('strictQuery',true);

   
}

export default connectDB;