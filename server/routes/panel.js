const express = require('express');
const router = express.Router();
// const mongodb = require('mongodb');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const path = require('path');

/**
 *@desc panel
 *@route GET panel
 */
/* router.get('/', ensureAuth, (req, res) => {

}) */

router.get('/*', ensureAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/panel/index.html'));
});

module.exports = router;
