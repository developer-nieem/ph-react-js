const express = require('express');
const phones = require('./pjons.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Worldfff!')
  })

  app.get('/phone' , (req, res) => {
    res.send(phones)
  })

  app.get('/phone/:id' , (req, res)=>{
    const id =  req.params.id;
    
    const phone = phones.find(ph => ph.id == id);
    res.send(phone)
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })