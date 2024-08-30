let person = {
    name: "ვაჟა",
    lastName: "ფშაველა",
    // age: 53,
    homeTown: "ჩარგალი",
}
person.height = "უცნობია"

let person1 ={
    name: 'გიორგი',
    lastName: 'მამულაიძე',
    age: 16,
    homeTown: "ახალციხე"
}
person1.height = 1.85;

const persons = Object.assign(person1,person)
console.log(persons)



const obj = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    },
    hobbies: ['reading', 'traveling']
};

const { name, age, address: { city, country }, hobbies } = obj;
console.log(age)
console.log(hobbies[1])

let arr =[1,2,3,4,5,6]
let arr1 =[a,b,c,d,e,f] = arr;
console.log(a,b,c,d,e,f)
