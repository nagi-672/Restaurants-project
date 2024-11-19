const express = require('exoress');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const data = {
    level1: ["Task 1", "Task 2", "Task 3"],
    level2: ["Task 2", "Task 2", "Task 3"],
    level3: ["Task 1", "Task 2", "Task 3"]
}
app.get('/tasks/:level',(req,res) => {
    const level = req.params.level;
    res.json(data[level] || []);
});
app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
}); 