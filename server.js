const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
//each function takes in 2 paramaters: first request, second response
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

let houses = [
    {name:"farmhouse"}, 
    {name:"poolhouse"}
];

app.get("/api/houses", (req,res)=>{
    res.send(houses);
});

app.listen(3001, ()=>{

});

