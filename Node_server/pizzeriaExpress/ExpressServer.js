var express = require("express");
var server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

var mongodb = require("mongodb");
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

var cors = require("cors");
server.use(cors());

server.use(express.urlencoded({ extended: false }));

//==================== order pizza =======================

server.get("/orderPizza", (req, res) => {
    console.log(req.method);

    mongoclient.connect(url, (error, response) => {
        if (error) {
            console.log("error while connecting" + error);
        }
        else {
            console.log("connected to mongo server");

            var database = response.db("projectsimulation");
            database.collection("pizzas").find({}).toArray((err, data) => {
                if (err) {
                    console.log("error in fetching data");
                }
                else {
                    // console.log(data);
                    res.send(data);  // this response will go in then method in EmpForm.js
                }
            })
        }
    })
})

//==================== Build Your Pizza =======================

server.get("/buildPizza", (req, res) => {
    mongoclient.connect(url, (error, response) => {
        if (error)
            console.log("error while connecting")
        else {
            var database = response.db("projectsimulation");
            database.collection("ingredients").find({}).toArray((err, data) => {
                if (err)
                    console.log("error while fetching");
                else {
                    console.log(data)
                    res.send(data);
                }
            })
        }
    })
})

server.listen(7000, () => {
    console.log("server started")
})