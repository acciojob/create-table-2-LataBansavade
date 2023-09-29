
function createTable() {
  // Prompt the user for the number of rows and columns
  const numRows = parseInt(prompt("Input number of rows"));
  const numCols = parseInt(prompt("Input number of columns"));

  // Get the table element by its ID
  const table = document.getElementById("myTable");

  // Create the table rows and cells
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow(i); // Create a new row

    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell(j); // Create a new cell
      cell.textContent = `Row-${i} Column-${j}`; // Set cell text
    }
  }
}

// Attach the createTable function to a button click event
const createTableButton = document.getElementById("createTableButton");
createTableButton.addEventListener("click", createTable);
