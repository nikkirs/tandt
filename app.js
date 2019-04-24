var express = require("express");
var path = require("path");
const ejs = require("ejs");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// EJS
app.set("view engine", "ejs");

// Public Folder
app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/educational", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("educational");
});

app.get("/commercial", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("commercial");
});
app.get("/view-all", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("view-all");
});
app.get("/residential", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("residential");
});
app.get("/industrial", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("industrial");
});
app.get("/current-projects", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("current-projects");
});
app.get("/infrastructure", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("infra");
});
app.listen(3000, function() {
  console.log("server is listening");
});
