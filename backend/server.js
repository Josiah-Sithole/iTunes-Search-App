// express dev dependences
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require("path");
require("isomorphic-fetch");

// init express
// create express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Helmet helps you secure your Express apps by setting various HTTP headers
// helmet imported above for security policy
// https://helmetjs.github.io/
app.use(helmet());

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // a static folder is set
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// reading the data
// display data from favmedia.json using GET method
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Creating data using a Post method
// new tracks will be added to the favmedia.json file
// These should include artist name and track name
app.post("/search", (req, res) => {
  let rawSearch = req.body.search;
  let option = req.body.option;
  let term = rawSearch.split(" ").join("+");

  // fetch data from the url
  // the fetch should return data in JSON format
  let url = `https://itunes.apple.com/search?term=${term}&media=${option}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      // catch any errors
      res.send(err);
    });
});

// Server is listening on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
