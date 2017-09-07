const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

// const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.MONGO_URI);
const app = express();

// memorize this, any POST or PUT or PATCH goes to EXPRESS
// EXPRESS is too stupid, needs this to put this into the req.body
//  specificlaly:  REQ.BODY has it
app.use(bodyParser.json());

// this is the magic triggering language that causes the serialize and cookie things to work like rails
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will server production assets, main.js, main.css
  app.use(express.static("client/built"));
  // Express will serve up the index.html if not recognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// app.listen(5001);
