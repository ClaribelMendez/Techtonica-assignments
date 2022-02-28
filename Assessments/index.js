const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about',function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));  
});
app.get('/contactme', function (req, res) {
    res.sendFile(path.join(__dirname, 'contactme.html'));
});
app.get('/404', function (req, res) {
   
});

app.use((req, res,next)=>{
    res.sendFile(path.join(__dirname, '404.html'));
    
 });





app.listen(port);
console.log('Server started at http://localhost:' + port);