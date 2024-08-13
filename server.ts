import { app } from "./app";
require("dotenv").config();


//create server
const port = process.env.PORT || 8000;
console.log(`Server is connected with port ${port}`);