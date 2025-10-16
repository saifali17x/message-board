const { Router } = require("express");
const newMessageRouter = Router();

// Import the messages from a separate module to avoid circular dependencies
const messages = require("../routes/messages");

// GET route for displaying the form
newMessageRouter.get("/", (req, res) => {
  console.log("GET /new route hit");
  res.render("form", {
    message: {
      text: "",
      author: "",
    },
  });
});

// POST route to handle form submission - we need to support both /new and /new/
newMessageRouter.post("/", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.author;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = newMessageRouter;
