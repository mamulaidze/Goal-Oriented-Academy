class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

//2
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study(){
        return `${this.name} is studying in grade ${this.grade}`;
    }
}
//3
class Calculator {
    static add(a ,b){
        return a + b;
    }
    static subtract(a, b){
        return a - b;
    }
    static multiply(a, b){
        return a * b;
    }
    static divide(a, b){
        if(b === 0){
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};
console.log(Calculator.add(10, 5));        
console.log(Calculator.subtract(10, 5));   
console.log(Calculator.multiply(10, 5));   
console.log(Calculator.divide(10, 5));   
//4 
class Car {
    constructor(make, model, year) {
      this.make = make
      this.model = model
      this.year = year
    }
  
    startEngine() {
      return 'Engine started';
    }
  
    stopEngine() {
      return 'Engine stopped';
    }
  }
  
const car1 = new Car("Toyota", "Corolla", 2021)
const car2 = new Car("Honda" ,"Civic" ,2020)
const car3 = new Car("Ford" ,"Mustang" ,2022)
  
console.log(car1.startEngine())
console.log(car1.stopEngine())
console.log(car2.startEngine())
console.log(car2.stopEngine())
console.log(car3.startEngine())
console.log(car3.stopEngine())
  
//5
class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound
    }

    getSound() {
        return `${this.type} ${this.sound}`;
    }
}
const dog = new Animal("ძაღლი", "ყეფავს");
console.log(dog.getSound()); 

const cat = new Animal("კატა", "კნავის");
console.log(cat.getSound());

  
  
  
  
  


