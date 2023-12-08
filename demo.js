//Examine the document object

// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype)
// console.log(document.forms);
// console.log(document.links)
// console.log(document.all);

// document.title="123"

let headerTitle = document.getElementById("header-title");

headerTitle.style.borderBottom = "2px solid black";

let subHeader = document.getElementById("subheader");

subHeader.style.fontWeight = "bold";
subHeader.style.color = "green";

let items = document.getElementsByClassName("list-group-item");

items[2].style.backgroundColor = "green";
for (let item of items) {
  item.style.fontWeight = "bold";
}

let ul = document.querySelector(".list-group");

let newLi = document.createElement("li");

newLi.textContent = "Item 5";

newLi.classList.add("new-list-group-item");
ul.appendChild(newLi);

newLi.style.listStyleType = "none";
newLi.style.backgroundColor = "red";

// Make the 2nd item have green background color
// Make the 3rd item invisible

let secondLi = document.querySelector(".list-group-item:nth-child(2)");

secondLi.style.backgroundColor = "green";

let thirdLi = document.querySelector("#third");

thirdLi.style.display = "none";

//QuerySelectorAll

let secondListItem = document.querySelectorAll(".list-group-item")[1];

secondListItem.style.color = "white";

let odds = document.querySelectorAll(".list-group-item:nth-child(odd)");

for (let i = 0; i < odds.length; i++){
    odds[i].style.backgroundColor = "green";
}
