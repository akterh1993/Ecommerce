
const express =require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app=express();

//middlewares
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

// import routes
const authRouter = require("./routes/authRoute");
app.use("/api", authRouter);


module.exports = app;