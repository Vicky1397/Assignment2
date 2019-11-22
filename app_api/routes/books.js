const express = require('express');
const router = express.Router();


const ctrlBook = require('../controllers/book');


router 
.route('/books') 
.get(ctrlBook.getBooks);

router 
.route('/books')
.post(ctrlBook.createBook) ;

router 
.route('/books/:bookid') 
.get(ctrlBook.getSingleBook) ;

router 
.route('/books/:bookid') 
.put(ctrlBook.updateBook); 

router 
.route('/books/:bookid') 
.delete(ctrlBook.deleteBook);





module.exports = router;
