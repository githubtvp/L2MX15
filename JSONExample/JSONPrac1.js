data.json
 [
  {"name": "Sanjay", "regno": "23mx224", "topic": "json intro"},
  {"name": "Nidhin", "regno": "23mx220", "topic": "creating & accessing"},
  {"name": "Hari", "regno": "23mx108", "topic": "json Uses"},
  {"name": "Kavin", "regno": "23mx211", "topic": "json Methods"},
  {"name": "Mohan", "regno": "23mx118", "topic": "json example"}
]

html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Display Web Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <h1>Display JSON Data in Web Page</h1>
 
  <table id="dataTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Regno</th>
        <th>Topic</th>
      </tr>
    </thead>
    <tbody>
      <!-- Data will be inserted here dynamically -->
    </tbody>
  </table>

  <script src="app.js"></script>
</body>
</html>

app.js

document.addEventListener("DOMContentLoaded", function() {
  // Fetch data from the JSON file
  fetch("data.json")
    .then(response => response.json())
    .then(data => displayData(data));

  // Function to display data in the table
  function displayData(data) {
    const tableBody = document.querySelector("#dataTable tbody");

    // Clear existing rows
    tableBody.innerHTML = "";

    // Populate the table with data
    data.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.regno}</td>
        <td>${item.topic}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});

server.js
const express = require('express');
const app = express();
const port = 3000;

// Determine the root directory of your project
const rootDir = process.cwd();

// Serve the HTML and JSON files
app.use(express.static(rootDir));
app.use('/data', express.static(rootDir + '/data.json'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
