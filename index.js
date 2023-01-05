const express = require('express')
const app = express()

//http://localhost:5000/
app.get('/',(req,res)=>{
    return res.status(200).send("Hello World!")
})

//http://localhost:5000/about
app.get('/about',(req,res)=>{
    return res.status(200).send("About Page")
})

//http://localhost:5000/profile
app.get('/profile',(req,res)=>{
    return res.status(200).send("Profile Page")
})

app.listen(5000,()=>{
    console.log(`Sever running at http://localhost:${5000}`)
})