var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema({
  memberid : {type : String, required : true},
  days : {type : Number, required : true},
  out_date : {type : Date, required : true},
  due_date : {type : Date, required : true},
  in_date : {type : Date, required : true},
  fine : {type : Number, required : true},
  booklist : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {timestamps : true})

var Transaction = mongoose.model('Transaction', transactionSchema)
module.exports = Transaction
