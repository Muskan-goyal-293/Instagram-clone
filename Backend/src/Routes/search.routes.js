const express = require("express");

const searchRoute = express.Router();

const searchUser = require("../Controllers/search.controller");

searchRoute.get("/Search" , searchUser);

module.exports = searchRoute;