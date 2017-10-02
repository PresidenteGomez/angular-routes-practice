var express = require('express');
var app = express ();
app.path= require('path');

// var serverThings = ['apron', 'pen', 'notebook', 'viruses', 'turtles'];

app.use(express.static('public'));

// app.get('/serverThigns', function (req, res) {
//     res.send(serverThings);
// });



app.listen (3000, function () {
    console.log('listening on 3000');
});