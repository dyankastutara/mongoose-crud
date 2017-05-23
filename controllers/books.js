var Book = require('../models/book')

module.exports = {
  getAll : (req, res)=>{
    Book.find({}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Book.findOne({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var insertBook = new Book({
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock
    })
    insertBook.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Book.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Book.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Book.updateOne({
        _id: query._id
      }, {
        $set: {
          isbn: req.body.isbn || query.isbn,
          title: req.body.title || query.title,
          author: req.body.author || query.author,
          category: req.body.category || query.category,
          stock: req.body.stock || query.stock,
          createdAt : query.createdAt,
          updateAt : new Date().toISOString()
        }
      }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
      })
    })
  }
}
