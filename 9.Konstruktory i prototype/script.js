// zadanie 1

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newCity(city) {
        this.city = city;
    }
    newAge(age) {
            this.age = age;
    }
}
const personA = new Person('Tomasz', 'Trzoslo', 25, 'Poland', 'Cracow', 'polish');
const personB = new Person('Andrzej', 'Dziedzic', 19, 'Poland', 'Poznan', 'polish');
const personC = new Person('Martyna', 'Boguta', 23, 'Poland', 'Warsaw', 'polish');
const personD = new Person('Pawel', 'Bilski', 54, 'Poland', 'Gdansk', 'polish');
const personE = new Person('Krystian', 'Kluba', 50, 'Poland', 'Sopot', 'polish');

personB.newAge(53);
personE.newAge(20);
personA.newCity("Bochnia");

console.log(personA);
console.log(personB);
console.log(personE);

// zadanie 2
class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

// zadanie 3
class Game{
    random() {
        Game.prototype.x = setInterval(function(){Game.prototype.number = Math.round(Math.random() * (10 - 1) + 1);}, 1000);
    }
    win() {
      Game.prototype.winInterval= setInterval(function(){
          if (Game.prototype.number > 5) {
          console.log('Win')
          clearInterval(Game.prototype.x);
          clearInterval(Game.prototype.winInterval);       
          } else {
          console.log('Not Today My Friend')
        }}, 1000);
    }
  }
  const game = new Game();
  const gameA = new Game();
  
  game.random();
  gameA.win();
