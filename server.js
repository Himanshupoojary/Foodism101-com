import express from "express" //importing the module

import { fileURLToPath } from "url";   //to get the absolute path in the deployed computer
import {dirname} from "path";   //to get the directory path 

const app=express();
const port =3000;
const __dirname = dirname(fileURLToPath(import.meta.url))   //to get the path upto the folder eg :acer:document/github/Foodism-com/ + 'filename' 

app.use(express.static(__dirname +'/views'))  //to resolve static files



app.get("/",(req,res) => {
    res.sendFile(__dirname+ '/views/index.html',)})
    
 

app.get("/about",(req,res) => {
    res.sendFile(__dirname + '/views/about.html')})
    
app.get("/contact",(req,res) => {
    res.send( __dirname + "/views/contact.html")})
    

app.get("/addrecipe",(req,res) => {
    res.send("express is onn")})
    

app.get("/recipe",(req,res) => {
    res.send("express is onn")})
                

app.listen(port,() =>{
    console.log("server is running on 3000");
})
