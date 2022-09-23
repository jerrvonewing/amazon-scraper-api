// Dependencies
const express = require('express');
const request = require('request-promise');

// Initialize express application
const app = express();
const PORT = process.env.PORT || 3000;

// Allow application to parse json
app.use(express.json());

// Initialize API base
app.get('/', (req, res) => {
    res.send('Welcome to the Amazon Scraper API');
})

// Listen on changes at port
app.listen(PORT, () => console.log('Server running on port ' + PORT));