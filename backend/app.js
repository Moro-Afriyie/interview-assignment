require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data = require("./rest_cfg.json"); // import the json file
const app = express();

app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("welcome to the backend");
});

// endpoint to get all employees
app.get("/api/employees", (req, res) => {
  res.json({ employees: data.employees }); //send a json response to the frontend
});

//endpoint to get all customers
app.get("/api/customers", (req, res) => {
  res.json({ customers: data.customers });
});

// endpoint to get all invoices
app.get("/api/invoices", (req, res) => {
  res.json({ invoices: data.invoices });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
