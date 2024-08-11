const express = require("express");
const app = express();
const indexRouter = require("../Routes/index")
const cors = require("cors");

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: '*', // or specify a specific origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/api/v1", indexRouter)

app.use((err,req,res,next) => {
    console.log(err)
    res.status(500).json({message: "Internal Server Error"});
})

app.listen(port ,()=>{
    console.log("server is running on port 3000");
})

module.exports = app;
