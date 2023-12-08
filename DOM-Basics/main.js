let itemList = document.querySelector("#items");

//****parentElement****

itemList.parentElement.style.backgroundColor = "#f4f4f4";

//*****childElemnt*****

//console.log(itemList.firstChild)
//console.log(itemList.firstElementChild)
//console.log(itemList.lastChild)
//console.log(itemList.lastElementChild)

//****siblings*****

//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSbiling)
//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling)

//****Deliverable*****

let newDiv = document.createElement("div");
let newDivText = document.createTextNode("Hello");

newDiv.appendChild(newDivText);

// console.log(newDiv);

// newDiv.setAttribute('title', 'Hello Div');

let container = document.querySelector("header .container");

let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

newDiv.style.fontSize = "30px";

let secondDiv = document.createElement("div");

let secondDivText = document.createTextNode("HEllo");

secondDiv.appendChild(secondDivText);

let header = document.querySelector("#main-header");

header.insertBefore(secondDiv, container);
