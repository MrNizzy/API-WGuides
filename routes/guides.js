const express = require('express');
const router = express.Router();

module.exports = function (db) {
    router.get('/api/guides/:id?', (req, res) => {
        let id = req.params.id;
        let sql = 'SELECT * FROM class_guides';
        let sqlParams = [];
        if (id) {
            sql += ' WHERE id = ?';
            sqlParams.push(id);
        }
        db.all(sql, sqlParams, (err, rows) => {
            if (err) {
                throw err;
            }
            if (rows.length > 0) {
                res.send(rows);
            } else {
                res.send(null);
            }
        });
    });

    return router;
};
