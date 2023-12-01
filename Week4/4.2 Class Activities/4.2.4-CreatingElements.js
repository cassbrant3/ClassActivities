// create a new unordered list (ul) element
const ulElement = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove();
// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(ulElement);
// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.textContent = "Some text to them";
li2.textContent = "Some text to them pt 2";
// add the li elements to the ul in the nav-bar
ulElement.appendChild(li1);
ulElement.appendChild(li2);
