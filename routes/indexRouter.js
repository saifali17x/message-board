const { Router } = require("express");
const indexRouter = Router();

// Import the messages from the shared module
const messages = require("./messages");

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

module.exports = indexRouter;
