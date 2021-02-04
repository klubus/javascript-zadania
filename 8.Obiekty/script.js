// zadanie 1
var car = {
  name: 'BMW',
  model: 'E86',
  power: '507HP',
  color: 'black'
};
console.log(car);

// zadanie 2
car.changeName = function(chg){
    this.name = chg;
}
car.changeName('Audi');
console.log(car);

// zadanie 3
let a= {
 sum: function(arr){
        this.sum = arr.reduce((b, c) => b += c);
    }
} 
a.sum([18,9,5,21,2]);
console.log(a);

// zadanie 4
const car = {
    model: 'BMW',
    age: 12,
    color: 'Black ofc'
}

for (const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// zadanie 5
const car = {
  name: 'Audi',
  age: 5,
  color: 'Black',
  model: 'A3t'
}
Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// zadanie 6

const car = {
  name: 'Audi',
  age: 4,
  color: 'Graphite',
  model: 'RS6 C7 Avant'
}

car.engine = "4.2 V8";

car.hello = function() {
    console.log("Hello");
}
car.hello();
