import express from "express";
import Customers from "./Customers.js";
import Products from "./Products.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/customers", (req, res) => {
  res.send({data: Customers});
});

app.get("/products", (req, res) => {
  res.send({data: Products});
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
