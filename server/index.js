// server/index.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname, "../portfolio/build")))

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"})
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../portfolio/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on Port: http://localhost:${PORT}`);
})

