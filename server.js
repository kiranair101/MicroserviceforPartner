'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;
const express = require("express");
const app = express();
let hbs = require('hbs')
app.set('view engine', 'hbs')


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.
let projects = {
    name : 0,
    height : 0,
    weight : 0,
    choice: 0
}

app.post("/weight", (req, res) => {
    projects.name = req.body.name
    res.redirect("weight.html");
})
app.post("/height", (req, res) => {
    let height = req.body.height
    res.redirect("height.html")
})
app.post("/BMI", (req, res) => {
    let weight = req.body.weight
    res.redirect("BMI.html")
})
app.post("/calorie", (req, res) => {
    projects.choice = req.body.choice
    res.redirect("calorie.html")
})
app.post("/choice", (req, res) => {
    const choi = projects.choice    
    if (choi == 0){
        res.redirect("end.html")
    } if (choi == 1) {
        res.redirect("lose_weight.html")
    } else if (choi == 2) {
        res.redirect("maintain_weight.html")
    } else if (choi == 3) {
        res.redirect("gain_muscle.html")
    }
})
app.post("/continue", (req, res) => {
    if (req.body.continue == 1){
        res.redirect("gain_muscle2.html")
    } else if (req.body.continue == 2){
        res.redirect("end.html")
    }
})
app.post("/musclechoice", (req, res) => {
    if (req.body.bod == 1){
        res.redirect("arms.html")
    } else if (req.body.bod == 2){
        res.redirect("body.html")
    } else if (req.body.bod == 3){
        res.redirect("legs.html")
    } else if (req.body.bod == 4){
        res.redirect("back.html")
    }
})



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});