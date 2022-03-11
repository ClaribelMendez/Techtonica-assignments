const express = require('express');
const cors = require('cors');
let request = require('request');





const app = express();

const port = 4001

app.listen(port,() => console.log(`Server running on port ${port}`));


const url = "https://opentdb.com/api.php?amount=2&difficulty=easy&type=multiple";
app.get('/',  (req, res) => res.send('Hello World!'))

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


// app.get('/quiz', (req,res) => {
//     request(url, function(error,response,body){ // WHERE ARE THE INPUTS TO THIS PARAMETER BEING PASSED IN?
//         if(!error && response.statusCode === 200) {
//             let parsedBody = JSON.parse(body);
//             let test = parsedBody['results']
//             // let temp2 = parsedBody['list'][1].main.temp

            
//             res.send({test});
//             // res.send({temp2});

//         res.json({test})
//         }
//     }); 
// });

app.get('/quiz', cors(), (req, res) => { 
    fetch(url) .then(res => { return res.json(); }) .then(data => { console.log("data from fetch:", data) 
    res.json(data.results); }) .catch(err => { res.redirect('/error') }); });
