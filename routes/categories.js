const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fertilizers = require('../JS/components/fertilizers');
const gardenSupplies = require('../JS/components/gardenSupplies');
const plants = require('../JS/components/plants');
const pots = require('../JS/components/pots');
const rocksPebbles = require('../JS/components/rocksPebbles');
const soils = require('../JS/components/soils');
const category = [fertilizers, gardenSupplies, plants, pots, soils, rocksPebbles];
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.post('/productlist/category', (req, res) => {
    const index = req.body.index;

    res.send(category[index]);
})

module.exports = router;