const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoute = require("./Routes/AuthRoutes");
const projectRoutes = require('./Routes/projectRoutes')

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080
const url = process.env.MONGO_URL;

mongoose.connect(url).then(()=>{
    console.log("DB connection Successful")
}).catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT}`);
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}))
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use('/', projectRoutes);