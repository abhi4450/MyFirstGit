let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

//Delete event

itemList.addEventListener("click", removeItem);

//Filter event

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  //Get input value

  let newItem = document.getElementById("item");

  //Create new li element

  let li = document.createElement("li");

  //Add class

  li.className = "list-group-item";

  //Add text node with input value

  li.appendChild(document.createTextNode(newItem.value));

  //Create delete buttom element

  let deleteBtn = document.createElement("button");

  //Add classes to delete button

  deleteBtn.className = "btn btn-danger btn-sm float-end delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li

  li.appendChild(deleteBtn);

  //Append li to list

  itemList.appendChild(li);

  //Add a Edit button next to the delete Icon

  //Create edit buttom element

  let editBtn = document.createElement("button");

  //Add classes to Edit button

  editBtn.className = "btn btn-primary btn-sm float-end me-1 edit";

  editBtn.appendChild(document.createTextNode("edit"));

  //Append button to li

  li.append(editBtn);
}

//Remove Item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items

function filterItems(e) {
  //conver text to lowercase

  let text = e.target.value.toLowerCase();
  //Get list
  let items = itemList.getElementsByTagName("li");

  //Convert to an array

  Array.from(items).forEach(function (item) {
    let itemName = item.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
