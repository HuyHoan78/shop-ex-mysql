const express = require('express');
const bodyParser = require('body-parser');
const loaiSPRoute = require('./router/loaiSPRoute');

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('tao là hoàn gà gà gà  ');
});

app.use('/api', loaiSPRoute)

// app.use('/api');

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});