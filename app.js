const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const PORT = process.env.PORT || 4208;
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// SQLite connection
const db = new sqlite3.Database('wguides.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the WGuides database.');
});

app.use(favicon('./public/favicon.ico'));
app.use(require('./app.routes')(db));

/* This is a middleware function that is executed when the requested resource is not found. */
app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
