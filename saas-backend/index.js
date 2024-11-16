const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Health check');
});

app.post('/credits/has_credits', (req, res) => {
    console.log('has_credits', req);
    res.json({
        user_id: 1,
        status: 'subscriber_has_credits'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});