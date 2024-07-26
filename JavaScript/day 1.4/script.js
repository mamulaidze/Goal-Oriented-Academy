//1. Create an object to represent a book with properties for title, author, and year published.
const book = {
    name: "History of Georgian football",
    author: "Dinamos Eqimi",
    published: 2024
}
console.log("Created object:",book)

//2. Add a new property to an existing object.
Object.defineProperty(book, "Pages", {value:"342"});
console.log("Added property to an object:",book)

//3. Delete a property from an object.
delete book.name;
console.log("Deleted property:",book)

//4. Access and print the value of a property in an object.
console.log("Author:",book.author+", "+"Published",book.published)

//5. Check if a property exists in an object.
console.log("Checking if object exists:",book.wigni);

//7. Create an array of objects, each representing a person with name and age properties.
const people = new Array()
people.push({name:"Giorgi",lastName:"Mamulaidze"})
people.push({name:"Gela",lastName:"Zviadauri"})
console.log(people)

//8. Find the length of an object (number of properties).
console.log("the number of properties:",people.length)

//Create an object with nested objects and access a property from the nested object.
const mercedes = {
    model: "S-Class",
    year: 2023,
    color: "black",
    owner: {
        name: "Giorgi Mamulaidze",
        age:16,
        city: "Axalcixe"
    },
    engine: {
        type: "V8",
        horsepower: 999
}
}
console.log("car color:",mercedes.color)
console.log("Owner age:",mercedes.owner.age)

//10. Convert an object into an array of its property values.
const newMerc = Object.values(mercedes);
console.log(newMerc)

//11. Create an array of numbers from 1 to 10.
const numbs = new Array(1,2,3,4,5,6,7,8,9,10)


//12. Add an element to the end of an array.
numbs.push(11)
console.log("added element to array: ",numbs)

// Add an element to the beginning of an array.
numbs.unshift(0)
console.log("added element '0' in the begginingof array:",numbs)

//14. Remove the last element of an array.
numbs.pop()
console.log("removed last element:",numbs)

//15. Remove the first element of an array.
numbs.shift()
console.log("removed first element:",numbs)

//16. Find the length of an array.
console.log("the lenght of an array is:",numbs.length)

//17. Access the third element in an array.
console.log("third element:",numbs[2])

//18. Iterate over an array and print each element.
for (let i = 0; i < numbs.length; i++){
    console.log(numbs[i]);
}

//19. Create a new array by doubling each element of an existing array.
for (let i = 0; i < numbs.length; i++){
    newNumbs = []
    newNumbs = numbs[i] + numbs[i]
    console.log(newNumbs)
}

// 20. Reverse the order of elements in an array.
numbs.reverse()
console.log("reversed nums:",numbs)