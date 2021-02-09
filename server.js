const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("~helpers/db.config");

// create an express app
const app = express();
app.use(logger("dev"));

// connect to database on MongoDB Atlas cluster
db.onConnect();

/**
 * add a generic JSON/URL-encoded parser as a top-level middleware
 * which will parse the bodies of all incoming requests
 */

// register cors
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse http request cookies
app.use(cookieParser());

const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listen on http//localhost:${port}`);
});
