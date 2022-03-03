const express = require('express');
const accountRouter = require('./routes/accountRouter');
const htmlLoader = require('./routes/htmlLoader');
const categories = require('./routes/categories');
const app = express();

// Front-end Designs and Functions
app.use(express.static('Bootstrap/CSS'));
app.use(express.static('Bootstrap/JS'));
app.use(express.static('JS'));
app.use(express.static('CSS'));
app.use(express.static('JQuery Ajax'));
app.use(express.static('img'));
app.use(express.static('fonts'));
app.use(express.static('lib'));

app.get('/', htmlLoader);

app.get('/productlist/page1', htmlLoader);

app.get('/productlist/page2', htmlLoader);

app.get('/productlist/page3', htmlLoader);

app.get('/productlist/page4', htmlLoader);

app.get('/productlist/page5', htmlLoader);

app.get('/cart', htmlLoader);

app.get('/Customer', htmlLoader);

app.get('/Customer/:username', htmlLoader);


app.post('/Sign-In', accountRouter); 

app.post('/Log-In', accountRouter);

app.post('/productlist/category', categories);

app.listen(8080, () => console.log("You are Now Connected in 8080"));