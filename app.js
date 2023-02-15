const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

const db = new sqlite3.Database('wguides.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the WGuides database.');
});

app.use(favicon('./public/favicon.svg'));
app.use(require('./app.routes')(db));

app.use(function (_req, res) {
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
