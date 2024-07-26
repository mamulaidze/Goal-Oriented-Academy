const car = {
    brand: "Mercedes-Benc",
    model: "Mercedes C63",
    topSpeed: 330,
    color: "matte black",
    engine: 6.3,
    curSpeed: 0,
    acceleration: function () {
        this.curSpeed += 5;
        console.log("Acceleration:", this.curSpeed);
        if (this.curSpeed == 330) {
            console.log("This is top speed");
        } else if (this.curSpeed > 330) {
            console.log(this.curSpeed, "is impossible to reach with this car!");
        } else if (this.curSpeed < 0) {
            console.log("You are in heaven");
        } else {
            console.log("Jemo");
        }
    },
    slowDown: function () {
        this.curSpeed -= 5;
        console.log("Slowed down:", this.curSpeed);
    }
};


car.acceleration();
car.acceleration();
car.acceleration();
car.slowDown()
delete car.model

            //2
function cars(brand,model,topSpeed){
    this.brand = brand;
    this.model = model;
    this.topSpeed = topSpeed;
}

const car1 = new cars("Mercedes","G-class",777)
console.log(car1)
const car2 = new cars("Bmw","M3 G80",776)
console.log(car2)