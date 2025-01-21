const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

app.get('/fetchObject', (req, res) => {
    const filePath = path.join(__dirname, 'onject.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const jsonObject = JSON.parse(data);
        res.json(jsonObject);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});