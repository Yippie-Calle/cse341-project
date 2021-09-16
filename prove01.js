// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:3000

const app = express();

// Route setup. You can implement more in the future!
const prove01 = require('./views/prove01-routes');

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res, next) => {
        // This is the primary index, always handled last.
        res.render('/prove01-routes', {
            title: 'Welcome to my CSE341 repo',
            path: '/',
        });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));