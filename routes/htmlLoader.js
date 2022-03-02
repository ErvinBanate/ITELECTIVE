const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('Homepage.html', {root: path.join('./HTML')});
});

router.get('/productlist', (req, res) => {
    res.sendFile('product-list.html', {root: path.join('./HTML')});
});

router.get('/Customer/:username', (req, res) => {
    res.sendFile('Customer.html', {root: path.join('./HTML')});
});

module.exports = router;
