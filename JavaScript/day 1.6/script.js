//element.childNodes returns an array of an element's child nodes.
//element.firstChild returns the first child node of an element.
//element.lastChild returns the last child node of an element.
//element.hasChildNodes returns true if an element has any child nodes, otherwise false.
//element.nextSibling returns the next node at the same tree level.
//element.previousSibling returns the previous node at the same tree level.
//element.parentNode returns the parent node of an element.
let test = document.getElementById("testing")
console.log(test.childNodes)
console.log(test.firstChild)
console.log(test.lastChild)
console.log(test.hasChildNodes)
console.log(test.nextSibling)
console.log(test.previousSibling)
console.log(test.parentNode)