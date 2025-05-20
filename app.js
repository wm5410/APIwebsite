// Importing required modules
const express = require('express'); // Express.js for building the server
const cors = require('cors'); // CORS for handling cross-origin requests
const path = require('path'); // Path for handling file and directory paths
const events = require('./events'); // Custom module for handling events (events.js file)

// Creating an Express application
const app = express();

// Middleware setup for the frameworks - Express.js
app.use(cors()); // Enable all CORS requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'public')));

// Event routes
app.post('/events', events.createEvent); // Route for creating an event
app.get('/events', events.getAllEvents); // Route for getting all events
app.get('/events/:id', events.getEventById); // Route for getting an event by ID
app.get('/events/name/:name', events.getEventByName); // Route for getting an event by name
app.put('/events/:id', events.updateEventById); // Route for updating an event by ID
app.delete('/events/:id', events.deleteEventById); // Route for deleting an event by ID
app.delete('/events', events.deleteAllEvents); // Route for deleting all events

// Server setup
const PORT = process.env.PORT || 3001; // Set the port to use
app.listen(PORT, () => { // Start the server
  console.log(`Server is running on port ${PORT}`); // Log a message when the server starts successfully
});
