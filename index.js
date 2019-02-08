const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/pizzas", (req, res) =>
  res.json([
    "Sausage",
    "Cheese",
    "Pepperoni",
    "Hawaiian",
    "Vegetable",
    "3 Cheese",
    "Macaroni",
    "Chicken",
    "Sausage and Pepperoni"
  ])
);

app.listen(PORT, () => console.log(`Pizza app listening on port ${PORT}!`));
