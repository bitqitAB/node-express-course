require("dotenv").config();
require("express-async-errors");
const authRouter = require("./routes/authRoutes");

// const morgan = require("morgan");

// express
const express = require("express");
const app = express();

// database
const connectDb = require("./db/connect");

// routers
app.use("/api/v1/auth", authRouter);

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// app.use(morgan("tiny"));
app.use(express.json);

app.get("/", (req, res) => {
  res.send("e-commerce api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log("DataBase Connected");
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
