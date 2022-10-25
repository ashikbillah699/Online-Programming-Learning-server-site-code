const express = require('express');
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/course_details', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Example app listening on port`, port)
})