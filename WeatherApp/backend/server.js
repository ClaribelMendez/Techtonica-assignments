const express = require('express'); // importing express
let request = require('request');
// const cors = require('cors')
const app = express(); // creates new express application
const port = 4000; // specifying a port (not 3000 as React runs on that port)
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = 'https://api.openweathermap.org/data/2.5/forecast?zip=11206,us&units=imperial&cnt=5&appid=760e58bb0f0aeee3122e41cfe28f4e5f';

app.get('/',  (req, res) => res.send('Hello World!'))


app.get('/weather', (req,res) => {
    request(url, function(error,response,body){ // WHERE ARE THE INPUTS TO THIS PARAMETER BEING PASSED IN?
        if(!error && response.statusCode == 200) {
            let parsedBody = JSON.parse(body);
            // let temp1 = parsedBody['list'][0].main.temp
    //         let temp2 = parsedBody['list'][1].main.temp

            
            // res.send({temp1});
    //         // res.send({temp2});

        res.json({parsedBody})
        }
    }); 
});



    







app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
