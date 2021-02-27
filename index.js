const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const PORT = process.env.PORT || 4000

// Set up static directory to serve in express
app.use(cors())

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
}) 

app.listen(PORT, () => {
    console.log('Server is starting')
})