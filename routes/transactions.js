var express = require('express')
var router = express.Router()
var transactionController = require('../controllers/transactions')

router.get('/',transactionController.getAll)
router.post('/',transactionController.insert)
router.get('/:id',transactionController.getOne)
router.delete('/:id',transactionController.delete)
router.put('/:id',transactionController.update)
router.patch('/:id',transactionController.addBooklist)

module.exports = router
