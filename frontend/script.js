const getAllEmployees = document.querySelector(".employees");
const getAllCustomers = document.querySelector(".customers");
const getAllInvoices = document.querySelector(".invoices");
const displayResults = document.querySelector(".display__results");

// get all the employees when the get all employees button is clicked
getAllEmployees.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/employees");
    const data = await result.json();
    console.log(data.employees);
    let tableHTML = `<table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>`;
    data.employees.forEach((item) => {
      tableHTML += `
            <tr>
              <td>${item.firstName}</td>
              <td>${item.lastName}</td>
              <td>${item.age}</td>
            </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    displayResults.innerHTML = tableHTML;
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});

// get all the employees when the get all customers button is clicked
getAllCustomers.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/customers");
    const data = await result.json();
    console.log(data.customers);
    let tableHTML = `<table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>`;
    data.customers.forEach((item) => {
      tableHTML += `
            <tr>
              <td>${item.corpName}</td>
              <td>${item.address}</td>
            </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    displayResults.innerHTML = tableHTML;
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});
// get all the employees when the get all invoices button is clicked
getAllInvoices.addEventListener("click", async function () {
  try {
    const result = await fetch("http://localhost:5000/api/invoices");
    const data = await result.json();
    // displayResults.textContent = data.invoices;

    let tableHTML = `<table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Inv. Number</th>
              <th scope="col">Invoice Sum</th>
              <th scope="col">Currency</th>
              <th scope="col">Corporate Name</th>
            </tr>
          </thead>
          <tbody>`;

    data.invoices.forEach((item) => {
      tableHTML += `
            <tr>
              <td>${item.invNumber}</td>
              <td>${item.invSum}</td>
              <td>${item.currency}</td>
              <td>${item.corpName}</td>
            </tr>
            `;
    });

    tableHTML += `</tbody></table>`;
    displayResults.innerHTML = tableHTML;
    console.log(data.invoices);
  } catch (error) {
    alert("an unexpected error occured, Please try again");
  }
});

// displayResults.innerHTML = tableHTML;
