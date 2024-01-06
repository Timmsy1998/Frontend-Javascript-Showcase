const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Import routes
const routes = require('./routes');

// Use routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
