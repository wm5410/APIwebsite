// Establishes the database connection
const db = require('../db');

// Create a New Event and Save it to the Database -POST- (Crud)
// Steps:
// 1. Define a route handler for POST requests to /events.
// 2. Extract the event details (name, description, startdate, enddate) from the request body.
// 3. Insert these details into the events table in the MySQL database.
// 4. Respond with a 201 status code (indicates that the request has succeeded and has led to the creation of a resource).
const createEvent = (req, res) => {
  const { name, description, startdate, enddate } = req.body;
  const query = 'INSERT INTO events (name, description, startdate, enddate) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, startdate, enddate], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ id: results.insertId, name, description, startdate, enddate });
  });
};

// Get a List of All Events in the Database -GET- (cRud)
// Steps:
// Define a route handler for GET requests to /events.
// Query the events table to fetch all records.
// Respond with a 200 status code and the list of events.
const getAllEvents = (req, res) => {
  const query = 'SELECT * FROM events';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
};

// Get event by ID -GET- (cRud)
// Steps:
// Define a route handler for GET requests to /events/:id.
// Extract the event ID from the request parameters.
// Query the events table to fetch the event with the specified ID.
// Respond with a 200 status code and the event details.
const getEventById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM events WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results[0]);
  });
};

// Get event by name -GET- (cRud)
// Steps:
// Define a route handler for GET requests to /events/name/:name.
// Extract the event name from the request parameters.
// Query the events table to fetch events with the specified name.
// Respond with a 200 status code and the event details.
const getEventByName = (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM events WHERE name = ?';
  db.query(query, [name], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
};

// Update Event Information by ID -PUT- (crUd)
// Steps:
// Define a route handler for PUT requests to /events/:id.
// Extract the event ID from the request parameters and the new event details from the request body.
// Update the corresponding record in the events table.
// Respond with a 200 status code and the updated event's details.
const updateEventById = (req, res) => {
  const { id } = req.params;
  const { name, description, startdate, enddate } = req.body;
  const query = 'UPDATE events SET name = ?, description = ?, startdate = ?, enddate = ? WHERE id = ?';
  db.query(query, [name, description, startdate, enddate, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({ id, name, description, startdate, enddate });
  });
};

// Delete event by ID -DELETE- (cruD)
// Steps: 
// Define a route handler for DELETE requests to /events/:id.
// Extract the event ID from the request parameters.
// Delete the corresponding record from the events table.
// Respond with a 204 status code (indicates that a request has been successfully completed, 
// but there is no additional content to send in the response payload body).
const deleteEventById = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM events WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(204).send();
  });
};

// Delete all events -DELETE- (cruD)
// Steps:
// Define a route handler for DELETE requests to /events.
// Delete all records from the events table.
// Respond with a 204 status code (indicates that a request has been successfully completed, 
// but there is no additional content to send in the response payload body).
const deleteAllEvents = (req, res) => {
  const query = 'DELETE FROM events';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(204).send();
  });
};

// Export functions from a module so they can be used by app.js with the require() function.
module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  getEventByName,
  updateEventById,
  deleteEventById,
  deleteAllEvents
};

