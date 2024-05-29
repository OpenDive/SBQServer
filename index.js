// Add Express
const express = require("express");

// Middleware to parse JSON requests
app.use(express.json());

const port = 5000;

app.get('/api/wallet', (req, res) => {
    const { network, address } = req.query;

    if (!network || !address) {
        return res.status(400).send('Network and address parameters are required');
    }

    res.send({ network, address });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

// Export the Express API
module.exports = app;