const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const pagesDirectory = path.join(__dirname, 'frontend', 'src', 'pages');

fs.readdirSync(pagesDirectory).forEach(file => {
    const route = file.split('.')[0];

    const controller = require(path.join(pagesDirectory, file));

    router.use(`/${route}`, controller);
});

module.exports = router;
