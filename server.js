//load the env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

//import dependencies
const express = require('express');
const conectToDb = require('./config/connectToDb')
const Note = require('./models/Note');
//create an express app
const app = express();
app.use(express.json());
//connect to database
conectToDb();
//routing
app.get('/', (req, res) => {
    res.json({ hello: 'world}' });

})
app.post('/Note', async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const note = await Note.create({
        title: title,
        body: body,
    })
    res.json({
        note: note
    })
})
//start the server
console.log('hello node')
app.listen(3000);
