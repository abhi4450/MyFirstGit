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
