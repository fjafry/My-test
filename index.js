//generate express app boilerplate

const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World! here is me');
});