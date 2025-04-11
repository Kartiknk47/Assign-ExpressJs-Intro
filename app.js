const express = require('express');
const colors = require('colors');

const app = express();

app.use(express.json())
// app.use(cors())

const port = 7002;

app.get('/api', (req, res) => {
    res.status(202).send({ message: 'Server running successfully', greet: "Hello user", success: true });
});

app.post('/api',(req, res)=>{
    
    console.log(req.body)
    res.status(202).send({ message: 'This is post', greet: "Hello post user", success: true });
})

app.delete("/api/:ID", (req, res) => {
    console.log(req.params);
    res.status(200).send("This ID is requested");
});

app.put('/api/:id', (req, res) => {
    console.log(req.params);
    res.status(200).send(`PUT request received for ID: ${req.params.id}`);
});

app.get('/about', (req, res) => {
    res.send("This is About");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`.rainbow);
});


// http://localhost:7002/api