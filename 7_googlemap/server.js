// import {Client, Status} from "@googlemaps/google-maps-services-js";
// const {Client, Status} = require("@googlemaps/google-maps-services-js");

'use strict'

const fs = require('fs');
const http = require('http');
const express = require('express');
const app = new express();
const path = require('path');

// app.use(express.static('public'))

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, hostname, function(){
    console.log(`Example app listening on port ${port}`);
})