const express = require("express");

const app = express();

const port = 5000;

// endpoint to get all employees
app.get("/api/employees", (req, res) => {
  res.json({ employees: "employees" });
});

//endpoint to get all customers
app.get("/api/customers", (req, res) => {
  res.json({ customers: "customers" });
});

// endpoint to get all invoices
app.get("/api/invoices", (req, res) => {
  res.json({ invoices: "invoices" });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
