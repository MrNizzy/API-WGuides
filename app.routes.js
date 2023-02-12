const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = function(db){
    // Routes
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    router.use(require('./routes/guides')(db));
    router.use(require('./routes/consumables')(db));
    router.use(require('./routes/enchants')(db));
    router.use(require('./routes/equipment')(db));
    router.use(require('./routes/statistics')(db));
    router.use(require('./routes/talents')(db));

    return router
}
