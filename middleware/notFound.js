const notFound = (req, res, next) => {
  res.status(404).json({ message: "Route Not FOund" });
};

module.exports = notFound;
