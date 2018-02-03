// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// (DATA)
// =============================================================
var reservations = [
  {
    name: "Yoda",
    phone: "520.989.2345",
    email: "fake@email.com",
    uid: 234567
  },
  {
    name: "Darth Maul",
    phone: "602.435.67e3",
    email: "new@fake.com",
    uid: 987743
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "view.html"));
  console.log(reservations);
  
});


// Search for Specific reservation (or all reservations) - provides JSON
app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;
  console.log(chosen);
});

// Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {

// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
