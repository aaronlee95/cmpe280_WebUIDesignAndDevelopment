// import {Client, Status} from "@googlemaps/google-maps-services-js";
// const {Client, Status} = require("@googlemaps/google-maps-services-js");

'use strict'

const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = new express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const route = require('./routes/routes.js')(app, fs);

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + '/index.html'));
//     console.log(`New connection Open..`);
// })

app.listen(port, hostname, function(){
    console.log(`Example app listening on port ${port}`);
})