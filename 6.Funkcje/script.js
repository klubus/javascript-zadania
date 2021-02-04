// zadanie 1:
function printMadeIt() {
    console.log('Udało się!');
}

printMadeIt();

// zadanie 2
function nazwaFunkcji(nr) {
    console.log(nr)
}
nazwaFunkcji(2console);

// zadanie 3
function getArray(someArray) {
    return someArray;
}

console.log(getArray(['Pierwszy', 'Drugi', 'Trzeci']));

// zadanie 4
function myString(paramStr) {
    
    let counter = 0;
 let myInterval =  setInterval(() => {
           counter++;
           if(counter == 5) {
                console.log("Koniec");
               clearInterval(myInterval);
           } else {
                console.log(paramStr);
           }
           
    }, 3000);
}

myString('Jakiś string');

