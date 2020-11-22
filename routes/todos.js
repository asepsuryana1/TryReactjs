var express = require('express');
var router = express.Router();
var Todo = require("../models/todo")

/* GET users listing. */
router.get('/', function(req, res, next) {
Todo.find({},function (err, data) {
  if (err) return res.status(500).json({err});
  res.status(200).json(data)
})
})
module.exports = router;
