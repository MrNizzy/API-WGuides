const express = require('express');
const router = express.Router();

module.exports = function (db) {
    router.get('/api/guides/glyphs/:id', (req, res) => {
        db.all(
            'SELECT * FROM glyphs_class WHERE id_reference = ?',
            [req.params.id],
            (err, rows) => {
                if (err) {
                    throw err;
                }
                if (rows.length > 0) {
                    res.send(rows);
                } else {
                    res.send('No glyphs found');
                }
            }
        );
    });

    return router;
};
