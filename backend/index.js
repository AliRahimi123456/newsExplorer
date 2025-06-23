const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { errors } = require("celebrate");
const helmet = require("helmet");
const rateLimiter = require("./middlewares/rateLimiter");
const { MONGODB_URI } = require("./utils/config");

const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const router = require("./routes");

const { PORT = 3001 } = process.env;

const app = express();
app.use(rateLimiter);
app.use(helmet());
mongoose
  .connect(
    MONGODB_URI

    //   () => console.log("Connected to DB"),
    //   (e) =>
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => console.error("DB error", e));

app.use(express.json());
app.use(cors());
app.use(requestLogger);
// Crash test route
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});
console.log(router);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
