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
