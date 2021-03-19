const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__direname, 'index.html'));
})

app.listen(3000, () => {
    console.log("server running on 3000");
})