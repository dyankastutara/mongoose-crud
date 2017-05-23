var Transaction = require('../models/transactions')

module.exports = {
  getAll : (req, res)=>{
    Transaction.find({})
    .populate('booklist')
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Transaction.findOne({_id : req.params.id})
    .populate('booklist')
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var insertTransaction = new Transaction({
      memberid : req.body.memberid,
      days : req.body.days,
      out_date : new Date(),
      due_date : new Date(),
      in_date : new Date(),
      fine : req.body.fine,
      booklist : req.body.booklist
    })
    insertTransaction.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Transaction.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Transaction.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Transaction.updateOne({
        _id: query._id
      }, {
        $set: {
          memberid : req.body.name,
          days : req.body.memberid,
          out_date : new Date(),
          due_date : new Date(),
          in_date : new Date(),
          fine : req.body.fine,
          booklist : req.body.booklist,
          createdAt : query.createdAt,
          updateAt : new Date().toISOString()
        }
      }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
      })
    })
  },
  addBooklist : (req, res)=>{
    Transaction.findById(req.params.id, (err, query) => {
      if (err){ 
        res.send(err)
      }
      else{
        var list = query.booklist
        list.push(req.body.booklist)
        Transaction.updateOne({
          _id: query._id
        }, {
          $set: {
            booklist : list
          }
        }, (err, result) => {
          if (err) res.send(err)
          res.send(result)
        })
      }
    })
  }
}
