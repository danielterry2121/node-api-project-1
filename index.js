const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Scrubs');
});

server.get('/aboutMe', (req,res) => {
    res.json({message:"Keeping backend fresh in my head."})
})

server.get('/about', (req,res) => {
    res.status(200).send('<h1>About Us</h1>')
})

server.get('/contact', (req,res) => {
    res.status(200).send('<h1>Contact us</h1>')
})
server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  res.status(200).json(hobbits);
});

server.post('/hobbits' , (req,res) => {
    res.status(200).json({ url: '/hobbits', operation: 'POST' })
})

server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
  });

  server.delete('/hobbits', (req, res) => {
    res.status(204);
  });
  
server.listen(8000, () => console.log('API running on port 8000'));