//include express module or package
const express = require('express');

//create instance of express
const app = express();
app.get('/', (req, res) => res.send('Josh Richards API'));

app.listen(8888, () => console.log('Listening on port 8888!'));