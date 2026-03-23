const { ERROR_SERVER } = require("../utils/constants");

const errorHandler = (err, req, res, next) => {
  const { statusCode = ERROR_SERVER, message } = err;

  res.status(statusCode).json({
    message: statusCode === ERROR_SERVER ? "Internal Server Error" : message,
  });
  next();
};
module.exports = errorHandler;
