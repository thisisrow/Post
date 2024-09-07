const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require('./config/db');

//DOTENV
dotenv.config();

//DATABASE CONNECTION
connectDB();
//REST OBJECT 
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//PORT
const PORT = process.env.PORT||8080

//coustom routes
//
app.use("/api/v1/auth", require("./routes/userRoutes"));

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ${PORT}`.bgGreen.white);
    
})




