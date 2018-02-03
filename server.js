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
    name: "Dillon",
    time: "5:30",
    phone: "520.989.2345",
    email: "fake@email.com",
    request: "I need food!"
  },
  {
    name: "Trevor",
    time: "7:30",
    phone: "602.435.6753",
    email: "new@fake.com",
    request: "I need food!"
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



// Create New reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
