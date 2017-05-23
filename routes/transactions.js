var express = require('express')
var router = express.Router()
var transactionController = require('../controllers/transactions')

router.get('/',transactionController.getAll)
router.post('/',transactionController.insert)
router.get('/:id',transactionController.getOne)
router.delete('/:id',transactionController.delete)
router.patch('/:id',transactionController.update)

module.exports = router
