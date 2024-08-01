//1
const element = document.getElementById('mydiv');
console.log(element.children); // get all children
console.log(element.firstElementChild); // get first child
console.log(element.lastElementChild); // get last child
console.log(element.nextElementSibling); // get next sibling


//2
//შექმენით საიტი სადაც მომხმარებელი prompt ის დახმარებით შემოიტანს ელემენტის სახელს, თქვენ შექმენით ელემენტი და დაამატეთ ვებგვერდძე

const input = prompt('Enter element name');
const newElement = document.createElement(input);
let txt = prompt('enter text');
newElement.textContent = txt.trim();
document.body.appendChild(newElement);


