const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');
const ctrlBook = require('../controllers/book');
const ctrlDisplay = require('../controllers/display');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.about);
router.get('/booklist', ctrlBook.book);
router.get('/display', ctrlDisplay.display);

module.exports = router;
