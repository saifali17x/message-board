# Mini Message Board

A simple, elegant message board application built with Express and EJS templating engine. Users can view existing messages and add new ones to the board.

![Mini Message Board Screenshot](https://via.placeholder.com/800x400?text=Mini+Message+Board)

## Features

- **View Messages**: Browse all posted messages on the home page
- **Post Messages**: Create and submit new messages through a simple form
- **Error Handling**: Custom 404 and 500 error pages
- **Responsive Design**: Clean, modern UI that works on desktop and mobile
- **Light Color Scheme**: Featuring sky blue and other light colors for a pleasant user experience

## Technology Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Templating engine
- **CSS**: Custom styling with responsive design

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/saifali17x/message-board.git
   cd message-board
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   node app.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Project Structure

```
message-board/
├── app.js               # Main application entry point
├── package.json         # Project dependencies and scripts
├── middlewares/
│   └── errorHandler.js  # Custom error handling middleware
├── public/
│   └── styles.css       # CSS stylesheets
├── routes/
│   ├── indexRouter.js   # Home page routes
│   ├── messages.js      # Shared message store
│   └── newMessageRouter.js # New message form routes
└── views/
    ├── error404.ejs     # 404 error page
    ├── error500.ejs     # 500 error page
    ├── form.ejs         # New message form
    └── index.ejs        # Home page with message list
```

## Routes

- **/** - Home page displaying all messages
- **/new** - Form to create a new message
- **/new (POST)** - Endpoint to submit a new message

## Error Handling

The application includes custom error pages:

- **404 Not Found**: Displays when a route doesn't exist
- **500 Server Error**: Displays when a server-side error occurs

## Development

### Adding New Features

1. Create any new routes in the `routes` directory
2. Add new views in the `views` directory
3. Update `app.js` to include new routes

### Styling

All styling is done through `public/styles.css`. The application uses a light color scheme with sky blue as the primary color.

## Future Enhancements

- User authentication
- Message deletion and editing
- Comment functionality
- Rich text formatting for messages
- Image uploading
- Message categories/tags

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Express.js team for the excellent web framework
- EJS team for the templating engine
- All contributors and users of this application

---

Created by saifali17x - October 2025
