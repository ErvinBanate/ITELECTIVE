const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');
const passwordHash = require('password-hash');
const database = new sqlite.Database(path.resolve(__dirname, '../Database/GreenerGreen.db'));
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post('/Sign-In', (req, res) => {
    const username = req.body.user;
    const password = passwordHash.generate(req.body.pass);
    const customer = 'Customer';

    database.get('SELECT * FROM Users WHERE username = ?', [username], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            if (result == undefined) {
                const response = database.run('INSERT INTO Users (username, password, user_type) VALUES(?,?,?)', [username, password, customer], (err) => {
                    if (err) {
                        throw err;
                    }
                });
                res.send('Success',response);
            }
            else {
                res.send('Present');
            }
        }
    });
});

router.post('/Log-In', (req, res) => {
    const username = req.body.user;
    const password = req.body.pass;

    database.get('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            throw err;
        }
        else {
            if (result == undefined) {
                res.send('Not Found');
            }
            else {
                res.send(result);
            }
        }
    });
});

module.exports = router;