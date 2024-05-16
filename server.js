// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mysql = require('mysql2');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse JSOn and URL encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files from static dir
app.use(express.static('static'));


// Define your routes here
app.get('/', (req, res) => {
    res.render('index', { title: 'Home - DeskBotany.ie' });
});



// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
});
