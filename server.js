import express from "express"
import dir from "path"



const app=express();
const port =3000;

app.get("/",(req,res) => {
    res.sendFile('',)})
    


app.get("/about",(req,res) => {
    res.send("express is onn")})
    
app.get("/contact",(req,res) => {
    res.send("express is onn")})
    

app.get("/addrecipe",(req,res) => {
    res.send("express is onn")})
    

app.get("/recipe",(req,res) => {
    res.send("express is onn")})
                

app.listen(port,() =>{
    console.log("server is running on 3000");
})
