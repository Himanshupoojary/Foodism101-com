import express from "express"

import { fileURLToPath } from "url";
import {dirname} from "path";

const app=express();
const port =3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res) => {
    res.sendFile(__dirname+ '/main/index.html',)})
    
 

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
