const express = require("express");
// import express from "express";
// on SERVER side, you have to use COMMONJS modules
// NODE Is dumb, can't understand IMPORT

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.get("/greet", (req, res) => {
  res.send({ hi: "greeetssss" });
});

// app - the express app to register
// get - watch for HTTP request on GET method
// '/' - watch for '/' ROUTE access on the GET rest call
// req - fucntion attrtibute for the incoming
// res - funciton objet for outgoing
// res.send - return on the incoming res object


const PORT = process.env.PORT || 5000
app.listen(PORT);
// app.listen(5001);
