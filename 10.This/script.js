// zadanie 1
class Person {
  constructor(imie, nazwisko, wiek, kraj, miasto) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }

  printInfo() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }

  addYearToAge() {
    this.wiek++;
  }

}

const person1 = new Person('Marcin', 'Kowalczyk', 15, 'Polska', 'Krakow');
const person2 = new Person('Crsistano', 'Ronaldo', 31, 'Portugal', 'Torino');

person1.printInfo();
person1.addYearToAge();
person1.printInfo();

// zadanie 2
class Person {
  constructor(imie, nazwisko, wiek, kraj, miasto) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }

  printInfo() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }

  addYearToAge() {
    this.wiek++;
  }

}

const person1 = new Person('Marcin', 'Kowalczyk', 15, 'Polska', 'Krakow');
const person2 = new Person('Crsistano', 'Ronaldo', 31, 'Portugal', 'Torino');

person1.favDishes = ['Spaghetti', 'Aglio olio', 'Budda bowl', 'Czwartkowe owoce'];
person2.favDishes = ['Maca', 'Olej rzepakowy', 'Bazylia w sosie bazyliowym'];

function printDishes() {
  console.log(this.favDishes);
}

function addDish(dish) {
  this.favDishes.push(dish)
}

person1.printDishes = printDishes;
person2.printDishes = printDishes;
person1.addDish = addDish;
person2.addDish = addDish;

person1.printDishes();
person2.addDish('Gulasz');
person2.printDishes();

// zadanie 3
class Calc {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  passNumbers(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  substract(invOrder) {
    return invOrder === true
      ? this.b - this.a
      : this.a - this.b;
  }

  divide(invOrder) {
    if (!invOrder && this.b === 0) {
      console.error('You cannot divide by 0');
      return;
    } else if (invOrder && this.a === 0) {
      console.error('You cannot divide by 0');
      return;
    }

    return invOrder === true
      ? this.b / this.a
      : this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

const abCalc = new Calc();
abCalc.passNumbers(3, 5);
console.log(`add: ${abCalc.add()}`);
console.log(`multiply: ${abCalc.multiply()}`);
console.log(`substract: ${abCalc.substract()}`);
console.log(`divide: ${abCalc.divide()}`);

const zeroCalc = new Calc();
abCalc.passNumbers(4, 0);
abCalc.divide();

// zadanie 4
let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },
    
    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");
            
            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();

