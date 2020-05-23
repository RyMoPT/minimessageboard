const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: `${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: `${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function (req, res) {
  let newName = req.body.nameinput
  let newMsg = req.body.messageinput
  messages.push({
    user: newName,
    text: newMsg,
    added: `${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`
  })
  res.redirect('/');
})
module.exports = router;
