const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const destinationData =  require('./public/destination.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/destination', (req,res)=>{
    res.send(destinationData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})