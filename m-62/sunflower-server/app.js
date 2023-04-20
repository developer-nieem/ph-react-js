const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
const categories =  require('./public/categories.json')
app.get('/', (req, res) => {
  res.send('Hello World!ddd')
})

app.get('/category', (req, res) =>{
   
   res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})