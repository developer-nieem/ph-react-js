const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

const categories =  require('./public/categories.json');
const news =  require('./public/news.json');

app.get('/', (req, res) => {
  res.send('Hello World!ddd')
})

app.get('/category', (req, res) =>{
   
   res.send(categories)
})

app.get('/news', (req, res)=>{
  res.send(news)
})

app.get('/news/:id' , (req, res) =>{
  const id = req.params.id;
  const selectedNews = news.find(n=> n._id === id);
  res.send(selectedNews)
})

app.get('/categories/:id', (req, res)=>{
  const id =  parseInt(req.params.id);
      if (id === 0) {
        res.send(news)
      }else{
        const categoriesItem =  news.filter(n=> parseInt(n.category_id) === id);
        res.send(categoriesItem);
      }
  

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})