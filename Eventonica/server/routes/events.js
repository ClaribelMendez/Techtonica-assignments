var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'This is my events route' });
// });

const Events = [
{
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday party for my best friend",
  category: "Celebration",
},

{
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "The class of 2021 graduates from East High",
  category: "Education",
},

{
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice Javascript interview questsions",
  category: "Education",
}
]

router.get('/', function(req, res, next) {
  console.log(req.body, 'the body')
  res.json({Events: Events});
});


// router.get('/', async function (req, res, next) {

//   try {
//     const events = await db.any('SELECT * FROM events', [true]);
//     res.send(events);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// router.post('/', async (req, res) => {
//   const event = {
//     name: req.body.name,
//     description: req.body.description
//   };
//   console.log(event);
//   try {
//     const createdEvent = await db.one(
//       'INSERT INTO events(name, description) VALUES($1, $2) RETURNING *',
//       [event.name, event.description]
//     );
//     console.log(createdEvent);
//     res.send(createdEvent);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

module.exports = router;