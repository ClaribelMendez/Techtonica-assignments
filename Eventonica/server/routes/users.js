var express = require('express');
var router = express.Router();

/* GET users listing. */
let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

router.get('/', function(req, res, next) {
  console.log(req.body, 'the body')
  res.json({users: mockUsers});
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.post('/', (req, res) => {
    let users = req.body;


res.json(users)});

module.exports = router;


