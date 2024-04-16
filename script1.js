//express function

const express  = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('<h2>Hello!</h2><h3>hi!!</h3>');
})

app.listen(3000);

//  download postman zaroor verna bhaga dega
