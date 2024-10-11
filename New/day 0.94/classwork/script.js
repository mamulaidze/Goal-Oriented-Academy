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
