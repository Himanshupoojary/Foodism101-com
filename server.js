import express from "express";

const app = express()
const port =3000


app.get("/0" , (req,res) => {
    res.send('halcutt')
})

app.listen(port,() =>{
    console.log('nope')
})
