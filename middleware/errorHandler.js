const { NoResultFound } = require("./resultNotFound");

const errorHandler = (err, req, res, next) => {
  if (err instanceof NoResultFound) {
    return res.status(err.status).json({ message: err.message });
  }
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
};

module.exports = errorHandler;
