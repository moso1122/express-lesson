const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    console.log(req)
})

app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})