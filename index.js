const express = require('express')
const static = require('./static.js')
const app = express()

app.use(static('public'))

app.get('/',(req,res)=>{
    res.send("Hi")
})


app.listen(2000,()=>{
    console.log("Server Started")
})


