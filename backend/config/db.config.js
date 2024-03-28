import mongoose from "mongoose";

export const ConnectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/passwordmanager');

        console.log(`DB is cinnected with ${mongoose.connection.host}`);
        
    }catch(error){
        await mongoose.disconnect();
        process.exit(1);
    }
}