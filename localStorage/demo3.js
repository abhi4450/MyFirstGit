document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Fetch input values
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var numberValue = document.getElementById("number").value;

    // Create an object to represent the submitted data
    var submittedData = {
      name: nameValue,
      email: emailValue,
      number: numberValue,
    };

    // Fetch existing data from local storage
    var existingData =
      JSON.parse(localStorage.getItem("userSubmittedData")) || [];

    // Add the new data to the array
    existingData.push(submittedData);

    // Store the updated data back in local storage
    localStorage.setItem("userSubmittedData", JSON.stringify(existingData));

    // Display the fetched input values in <ul>
    displayData(submittedData);

    // Optionally, you can display a success message or perform other actions after storing data
    alert("Data stored successfully!");

    clearInputFields();
  });

function displayData(data) {
  // Create a new <li> element
  var listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `Name: ${data.name}, Email: ${data.email}, Number: ${data.number}`;

  // Append the <li> element to the <ul>
  document.getElementById("dataList").appendChild(listItem);
}
function clearInputFields() {
  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
}
