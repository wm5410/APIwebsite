// Importing the mysql2 module to interact with MySQL databases
const mysql = require('mysql2');

// Configuration object for the database connection
const dbConfig = {
  host: 'learn-mysql.cms.waikato.ac.nz',
  database: 'wm83',
  user: 'wm83',
  password: 'my223571sql'
};

// Creating a new database connection using the configuration
const db = mysql.createConnection(dbConfig);

// Connecting to the database
db.connect(err => {
  if(err){
    // If there's an error during the connection, throw the error
      throw err;
  }
  console.log('Sucessfully connected to the db') 
});

// Exporting the database connection so it can be used in app.js
module.exports = db;