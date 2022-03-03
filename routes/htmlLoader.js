const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('Homepage.html', {root: path.join('./HTML')});
});

router.get('/productlist/page1', (req, res) => {
    res.sendFile('product-list.html', {root: path.join('./HTML')});
});

router.get('/productlist/page2', (req, res) => {
    res.sendFile('page-2.html', {root: path.join('./HTML')});
});

router.get('/productlist/page3', (req, res) => {
    res.sendFile('page-3.html', {root: path.join('./HTML')});
});

router.get('/productlist/page4', (req, res) => {
    res.sendFile('page-4.html', {root: path.join('./HTML')});
});

router.get('/productlist/page5', (req, res) => {
    res.sendFile('page-5.html', {root: path.join('./HTML')});
});

router.get('/Customer/:username', (req, res) => {
    res.sendFile('Customer.html', {root: path.join('./HTML')});
});

module.exports = router;
