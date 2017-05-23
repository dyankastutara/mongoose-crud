var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mongoose-crud', ()=>{
  console.log("Connected To Database");
})

var books = require('./routes/books')
var customers = require('./routes/customers')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api/books', books)
app.use('/api/customers', customers)


app.listen(3000, function(){
  console.log("Connected to Port 3000")
})
