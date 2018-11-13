// Requiring express package
const express = require('express')

// Starting express app
const app = express()

// Defining Port
const port = 3000

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));
app.get('/gallery', (req, res) => res.sendFile(__dirname + '/views/gallery.html'));
app.get('*', (req, res) => res.send('404 - Page not found'));


// Start listening for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))