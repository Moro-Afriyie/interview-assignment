const getAllEmployees = document.querySelector(".employees");
const getAllCustomers = document.querySelector(".customers");
const getAllInvoices = document.querySelector(".invoices");
const displayResults = document.querySelector(".display__results");

// get all the employees when the get all employees button is clicked
getAllEmployees.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/employees");
    const data = await result.json();
    displayResults.textContent = data.employees;
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});

// get all the employees when the get all customers button is clicked
getAllCustomers.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/customers");
    const data = await result.json();
    displayResults.textContent = data.customers;
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});
// get all the employees when the get all invoices button is clicked
getAllInvoices.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/invoices");
    const data = await result.json();
    displayResults.textContent = data.invoices;
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});
