const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error500", {
    message: "Something broke on the server!",
    error: err,
  });
};

module.exports = errorHandler;
