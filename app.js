const path = require("node:path");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Error handling middleware
// 404 handler
app.use((req, res, next) => {
  res.status(404).render("error404", {
    message: `The page ${req.url} could not be found`,
  });
});

// 500 handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
