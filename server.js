const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example endpoint
app.get('/tasks/:level', (req, res) => {
    const level = req.params.level;
    const tasks = {
        tasks1: ["Task 1", "Task 2", "Task 3"],
        tasks2: ["Task A", "Task B", "Task C"],
        tasks3: ["Task X", "Task Y", "Task Z"],
    };
    res.json(tasks[level] || []);
});

// Start the server
app.listen(port, () => {
    console.log(API running at http://localhost:${port});
});