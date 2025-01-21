const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.all('*', (req, res) => {
res.status(404).send('404 Not Found');

});
app.listen(port);