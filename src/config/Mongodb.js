import mongoose from "mongoose";
const connectMongoDB = (url)=> mongoose.connect(url)
.then(
    console.log('MongoDB Database connected')
);

export default connectMongoDB;