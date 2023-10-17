const express = require('express');
const bodyParser = require('body-parser');
const loaiSPRoute = require('./router/loaiSPRoute');
const sanphamRoute = require('./router/sanphamRoute')
const khachhangRoute = require('./router/khachhangRoute')
const donhangRoute = require('./router/donhangRoute')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('kính chào quý khách  ');
});

app.use('/api', loaiSPRoute, sanphamRoute, khachhangRoute, donhangRoute);

// app.use('/api');

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});