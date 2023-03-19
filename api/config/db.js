import mongoose from "mongoose";

// create a mongodb connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected successfully`.bgBlue.black);
  } catch (error) {
    console.log(`${error}`.bgRed.black);
  }
};

// export
export default mongoDBConnect;
