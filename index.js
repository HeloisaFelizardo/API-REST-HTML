const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Without middleware
app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'index.html';
    res.sendFile('index.html', options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
