const form = document.querySelector("#my-form");
let expenseList = document.getElementById("expenseList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;

  let listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let textContent = document.createElement("span");
  textContent.textContent = `${amount}-${description}-${category}`;
  listItem.appendChild(textContent);

  var submittedData = {
    amount: amount,
    description: description,
    category: category,
  };

  // Fetching the existing data from the local storage
  let existingData =
    JSON.parse(localStorage.getItem("userSubmittedData")) || [];

  // Storing the submittedData in the local storage
  existingData.push(submittedData);
  localStorage.setItem("userSubmittedData", JSON.stringify(existingData));

  // Create delete button element
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("delete"));

  // Create edit button element
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-end me-1 edit";
  editBtn.appendChild(document.createTextNode("edit"));

  // Create a div to wrap the buttons
  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = "d-flex justify-content-end";

  // Append buttons to the div
  buttonsDiv.appendChild(deleteBtn);
  buttonsDiv.appendChild(editBtn);

  // Append the div to listItem
  listItem.appendChild(buttonsDiv);

  // Append listItem to expenseList
  expenseList.appendChild(listItem);

  // Clear input fields
  clearInputFields();

  deleteBtn.addEventListener("click", function () {
    removeItemFromListAndStorage(listItem);
  });

  editBtn.addEventListener("click", function () {
    editItemForm(submittedData, listItem);
  });
});

function removeItemFromListAndStorage(listItem) {
  // Fetch existing data from local storage
  var existingData =
    JSON.parse(localStorage.getItem("userSubmittedData")) || [];

  // Find the index of the item in the array
  var index = Array.from(expenseList.children).indexOf(listItem);

  // Remove the item from local storage
  existingData.splice(index, 1);

  // Store the updated data back in local storage
  localStorage.setItem("userSubmittedData", JSON.stringify(existingData));

  // Remove the item from the list
  expenseList.removeChild(listItem);
}

function editItemForm(data, listItem) {
  // Populate the form fields with the existing data
  document.getElementById("amount").value = data.amount;
  document.getElementById("description").value = data.description;
  document.getElementById("category").value = data.category;

  removeItemFromListAndStorage(listItem);
}

function clearInputFields() {
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}
