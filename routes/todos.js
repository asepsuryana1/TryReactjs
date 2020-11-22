var express = require('express');
var router = express.Router();
var Todo = require("../models/todo")

/* GET users listing. */
router.get('/', function (req, res, next) {
  Todo.find({}, function (err, data) {
    if (err) return res.status(500).json({ err });
    res.status(200).json(data)
  })
})

router.post('/', (req, res, next) => {
  Todo.create({
    task: req.body.task,
    complete: req.body.complete
  }, (err, data) => {
    if (err) return res.status(500).json({ err })
    res.status(200).json(data)
  })
})

router.put('/:id', (req, res, next) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      task: req.body.task,
      complete: req.body.complete
    },
    { new: true }
    , (err, data) => {
      if (err) return res.status(500).json({ err })
      res.status(200).json(data)
    })
})







module.exports = router;
