import mongoose from "mongoose";

const connectDb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to mongo! Database: ', mongoose.connections[0].name)
}

export default connectDb
