var express = require('express')
var router = express.Router()
var booksController = require('../controllers/books')

router.get('/',booksController.getAll)
router.post('/',booksController.insert)
router.get('/:id',booksController.getOne)
router.delete('/:id',booksController.delete)
router.patch('/:id',booksController.update)

module.exports = router
