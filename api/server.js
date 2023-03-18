import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

// init express
const app = express();
dotenv.config();

// environment variables
const PORT = process.env.PORT || 9000;

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
