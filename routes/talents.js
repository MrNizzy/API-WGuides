const express = require('express');
const router = express.Router();

module.exports = function(db) {
    router.get('/api/guides/talents/:id', (req, res) => {
        db.all('SELECT * FROM talents_class WHERE id_reference = ?', [req.params.id], (err, results) => {
            if (err) throw err;
            if (results.length > 0) {
                res.send(results);
            } else {
                res.send('Result no found');
            }
        }
        );
    });

    return router;
};