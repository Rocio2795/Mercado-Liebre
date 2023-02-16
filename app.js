const express = require ("express");
const path= require ("path");
const port = process.env.PORT || 3002;
const app = express(); 

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

/*const { listen } = require("express/lib/application");*/

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

/*app.listen(3002, ()=>console.log("servidor corriendo en el puerto 3002"));*/

app.listen(port, () => console.log(`Server running on port ${port}`));
