const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const newMessageRouter = Router();

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
newMessageRouter.post(
  "/",
  [
    // Validation and sanitization for author field
    body("author")
      .not()
      .isEmpty()
      .withMessage("Name is required")
      .trim() // Remove whitespace from both ends
      .isLength({ min: 2, max: 50 })
      .withMessage("Name must be between 2 and 50 characters")
      .escape(), // Convert special characters to HTML entities

    // Validation and sanitization for messageText field
    body("messageText")
      .not()
      .isEmpty()
      .withMessage("Message text is required")
      .trim()
      .isLength({ min: 3, max: 1000 })
      .withMessage("Message must be between 3 and 1000 characters")
      .escape(),
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // If there are errors, re-render the form with validation messages
      return res.render("form", {
        message: {
          text: req.body.messageText,
          author: req.body.author,
        },
        errors: errors.array(),
      });
    }

    // If validation passes, proceed with saving the message
    const messageText = req.body.messageText;
    const messageUser = req.body.author;

    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date(),
    });

    res.redirect("/");
  }
);

module.exports = newMessageRouter;
