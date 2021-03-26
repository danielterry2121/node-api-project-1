const express = require('express')

const server = express();

server.get('/', (req,res) => {
    res.send('Hello From Express')
})

server.listen(5000, () => {
    console.log('Server Running')
})