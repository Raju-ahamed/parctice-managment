const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Himel", email: "himel@gamil.com" },
    { id: 2, name: "Himu", email: "himu@gamil.com" },
    { id: 3, name: "Rimu", email: "Rimu@gamil.com" },
]
app.get('/', (req, res) => {
    res.send("Server Management");
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log("api called");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port, () => {
    console.log(`server port ${port}`)
})