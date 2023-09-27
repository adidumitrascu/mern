import express from "express";
import {PORT, mongoDB} from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
  return response.status(234).send("Welcome!")
})


mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("App connected to database")
    app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
  });