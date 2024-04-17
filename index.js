
const express = require('express')
const app = express()
const port = 5000;
const phones = require('./phones.json');

app.get('/',(req,res) =>{
     res.send('hellow this is my first project')
})

app.get('/data', (req,res)=>{
    res.send('hellow i am data')
})

app.get('/data1', (req,res)=>{
    res.send('hellow i am data1')
})

app.get('/phones',(req,res)=>{
     res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
      const id = parseInt(req.params.id);
      const phone = phones.find(phone => phone.id === id) || {};
      res.send(phone)

})

app.listen(port,()=>{
    console.log(`my first project run on port ${port}`);
})

