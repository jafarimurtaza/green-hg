import express from "express";
import data from "./data";

const app = express();

app.get("/api/products/:id", (req, res) => {
  const productId = req.
  res.send(data.products);
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});
