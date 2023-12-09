let dataList = document.getElementById("dataList");

// Delete event
dataList.addEventListener("click", removeItem);

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

    // Store the submitted data in local storage
    storeDataInLocalStorage(submittedData);

    // Display the fetched input values in <ul>
    displayData(submittedData);

    // Clear input fields
    clearInputFields();
  });

function displayData(data) {
  // Create a new <li> element
  var listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `Name: ${data.name}, Email: ${data.email}, Number: ${data.number}`;

  // Create a delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("delete"));

  // Add click event listener to the delete button
  deleteBtn.addEventListener("click", function () {
    // Find the index of the item in the list
    var index = Array.from(dataList.children).indexOf(listItem);

    // Remove the item from both the list and local storage
    removeItem(index);
  });

  // Append the delete button to the <li> element
  listItem.appendChild(deleteBtn);

  // Append the <li> element to the <ul>
  dataList.appendChild(listItem);
}

function clearInputFields() {
  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
}

function storeDataInLocalStorage(data) {
  // Fetch existing data from local storage
  var existingData =
    JSON.parse(localStorage.getItem("userSubmittedData")) || [];

  // Add the new data to the array
  existingData.push(data);

  // Store the updated data back in local storage
  localStorage.setItem("userSubmittedData", JSON.stringify(existingData));
}

function removeItem(index) {
  // Remove the item from the list
  var listItem = dataList.children[index];
  dataList.removeChild(listItem);

  // Remove the item from local storage
  removeDataFromLocalStorage(index);
}

function removeDataFromLocalStorage(index) {
  // Fetch existing data from local storage
  var existingData =
    JSON.parse(localStorage.getItem("userSubmittedData")) || [];

  // Remove the data from the array
  existingData.splice(index, 1);

  // Store the updated data back in local storage
  localStorage.setItem("userSubmittedData", JSON.stringify(existingData));
}
