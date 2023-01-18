const express = require ("express");
const path= require ("path");

const app = express(); 

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

const { listen } = require("express/lib/application");

app.get("/", (req, res) =>{
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});


app.listen(3002, ()=>console.log("servidor corriendo en el puerto 3002"));


