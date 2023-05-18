import mongoose from "mongoose";

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.connect(process.env.MONGO_DB_URI);
};

export default dbConnect;
