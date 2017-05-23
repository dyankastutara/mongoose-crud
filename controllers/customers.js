var Customer = require('../models/customers')

module.exports = {
  getAll : (req, res)=>{
    Customer.find({}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Customer.findOne({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var insertCustomer = new Customer({
      name : req.body.name,
      memberid : req.body.memberid,
      address : req.body.address,
      zipcode : req.body.zipcode,
      phone : req.body.phone
    })
    insertCustomer.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Customer.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Customer.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Customer.updateOne({
        _id: query._id
      }, {
        $set: {
          name: req.body.name || query.name,
          memberid: req.body.memberid || query.memberid,
          address: req.body.address || query.address,
          zipcode: req.body.zipcode || query.zipcode,
          phone: req.body.phone || query.phone,
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
