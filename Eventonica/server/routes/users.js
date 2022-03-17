// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const app = express();



// /* GET users listing. */
// let mockUsers = [
//   { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
//   { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
//   { id: 3, name: 'Dory', email: 'dory@gmail.com' }
// ];

// router.get('/', function(req, res, next) {
//   console.log(req.body, 'the body')
//   res.json({users: mockUsers});
// });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}));
// app.use(express.json())


// router.post('/', (req, res) => {
//   // let body = req.body;
//   // console.log(req)
//   // let newUser = {name: body.name}
//   // // console.log(newUser);
//   // console.log(req, 'the body')
//   // res.json(newUser);
//     res.send(req.body)
// })

// module.exports = router;

var express = require('express');
var router = express.Router();
var db = require('../db/db-connection.js');

/* GET users listing. */
let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

router.get('/', async function(req, res, next) {
  console.log(req.body, 'the body')
  res.json({users: mockUsers});
  
});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

router.post('/', (req, res) => {
  let newUser = {id: req.body.id, name: req.body.name, email: req.body.email}
  mockUsers.push(req.body)
  console.log(newUser);
  res.send(req.body);
});

module.exports = router;

