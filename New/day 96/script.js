let arry  =[1,3,4,2,4,5,7,7,5,4,3,3,2,4,56,7,7,56,4,3,2,24,6,8,909,0,9,76,5,3,2];

let uniqueNum = new Set();

arry.forEach(number =>{
    if(!uniqueNum.has(number))
        uniqueNum.add(number);
});

let sortedArray = [...uniqueNum]
console.log(sortedArray)

//2
let person = new Map();

person.set('name', 'gela');
person.set('name1','juba')
person.set('name2','beso')
//3
person.delete('name2')
console.log(person.get('name'))
console.log(person.get('name1'))
console.log(person.get('name2'))

//4
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);

mySet.clear();

console.log(mySet);
//5
class CollectionManager {
    constructor() {
        this.myMap = new Map();
        this.mySet = new Set();
    }
    addToMap(key, value) {
        this.myMap.set(key, value);
    }

    removeFromMap(key) {
        this.myMap.delete(key);
    }

    addToSet(item) {
        this.mySet.add(item);
    }

    clearSet() {
        this.mySet.clear();
    }

    showMap() {
        this.myMap.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }

    showSet() {
        console.log([...this.mySet].join(' '));
    }
}

const manager = new CollectionManager();

manager.addToMap('name', 'besiki');
manager.addToMap('age', 28);

manager.addToSet(1);
manager.addToSet(2);
manager.addToSet(3);

manager.showMap();
manager.showSet();

manager.removeFromMap('age');
manager.showMap();

manager.clearSet();
manager.showSet();
