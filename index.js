// Dependencies
const express = require('express');
const axios = require('axios')
const cheerio = require('cheerio');
const request = require('request-promise')

// Initialize express application
const app = express();
const PORT = process.env.PORT || 3000;

const results = [];
// Price 

// Rating

// Description

// URL


// Name



// Initialize API base
app.get('/', (req, res) => {
    res.json('Welcome to the YouTube Scraper API');
})

app.get('/test', (req, res) => {
    //const {searchTerm} = req.params; 
    searchTerm = "nba"
    try{
        axios.get("https://www.youtube.com/results?search_query=" + searchTerm, {
            params: {
                _limit: 1
            }
        })
        .then(response => {
            const html = response.data
            res.json(html);
            /*
            const $ = cheerio.load(html)
            $('a:contains("glue")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                results.push({ 
                    productName: title, 
                    url: url
                })
            })*/
        })
    } catch (e) {
        console.log(e)
    }
})
// Listen on changes at port
app.listen(PORT, () => console.log('Server running on port ' + PORT));