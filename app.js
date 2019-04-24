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
app.get("/infrastructure", function(req, res) {
  // res.sendFile(path.join(__dirname + "/careers.html"));
  res.render("infra");
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
app.get(
  "/The-Perfect-Christmas-Gift-Guide-For-That-Awesome-Girl-Boss-In-Your-Life",
  function(req, res) {
    res.render("gift");
  }
);
app.get("/thankyou", function(req, res) {
  res.sendFile(path.join(__dirname + "/thankyou.html"));
});
app.get("/services", function(req, res) {
  res.sendFile(path.join(__dirname + "/services.html"));
});
app.post("/contact", function(req, res) {
  console.log(req.body.name);
});
app.get("/events", function(req, res) {
  res.render("events");
});
app.get("/blogs", function(req, res) {
  res.render("blog");
});
app.listen(3000, function() {
  console.log("server is listening");
});
