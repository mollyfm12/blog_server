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

const budaItems = [
    {
        name: "Boat Tour",
        image: "", 
        description: "This boat tour is a common tourist attraction that many people rave about. It is an hour long boat ride long the Danube River." 
    },
    {
        name: "Thermal Baths",
        image: "thermalBaths", 
        description: "The thermal baths are a popular attraction for both locals and tourists. It is a large house with many different large baths both warm and cold"
    },
    {
        name: "Chimney Cake",
        image: "chimneyCake.jpg", 
        description: "Chimney Cake is a classic dessert known in Eastern Europe. It is a dough with a large center and coated in different flavors of sugar."

    },
    {
        name: "AirBnb",
        image: "", 
        description: "We stayed in a 4 person AirBnb. It was not the nicest place by any means; however, it was very convienitenly located. It was one minute away from a main train station and even right under a Starbucks."
    }, 
    {
        name: "Nightlife",
        image: "", 
        description: "Budapest has a very large nightlife scene. There are many clubs that are popular amoung both vistors and locals. One of the clubs is well known for its interior designs and three stories. "
    }, 
    {
        name: "Dinner",
        image: "", 
        description: "We got a traditional Hungarian dinner at ___. They are known for Goulash and ____"
    },
    {
        name: "Pho",
        image: "", 
        description: "After eating most of Italian food for months, we wanted to venture to other cuisines. We travelled to a different neighborhood to get Pho. It was very good for a change of pace. "
    },
    {
        name: "Public Transit",
        image: "", 
        description: "Budapest has a very good public transit system. There is both subways and local rails. We were able to buy a 10 pack of passes where you have to validate on each ride. If you do not validate your ticket, you will likely get caught and fined. "
    }
];

app.get("/api/buda", (req,res)=>{
    res.send(budaItems);
});

app.listen(3001, ()=>{

});

