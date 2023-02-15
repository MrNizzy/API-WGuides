const express = require('express');
const router = express.Router();

module.exports = function (db) {
    router.get('/api/guides/equipment/:id', (req, res) => {
        db.all(
            'SELECT * FROM equipment_class WHERE id_reference = ?',
            [req.params.id],
            (err, rows) => {
                if (err) {
                    throw err;
                }
                if (rows.length > 0) {
                    res.send(rows);
                } else {
                    res.send('No items found');
                }
            }
        );
    });

    return router;
};
