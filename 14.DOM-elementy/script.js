// zadanie 1
function getTagNames(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(getTagNames(document.getElementsByClassName('more-divs')));

// zadanie 2
 function display(a) {
    //  1.
        console.log(a.innerHTML);
    //  2.
        console.log(a.outerHTML);
    //  3.
        console.log([...a.classList].join(''));
    //  4.
        console.log([...a.classList]);
    //  5.
        console.log(a.dataset)
    }

    display(document.querySelector('.short-list'));  
    
// zadanie 3

  function showMe(...int) {
        return {
            sum: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),

            difference: int.reduce((prev, curr) => prev - curr),
        }
    }

    let numb = document.querySelector('#datasetCheck').dataset;
    console.log(showMe(numb.numberone, numb.numbertwo, numb.numberThree));
    
// Zadanie 4
document.getElementById('spanText').innerText = 'cokolwiek';

// Zadanie 5
document.getElementById('spanText').className = 'cokolwiek';

// zadanie 6
 function allClasses(classList){
    var list = [...classList];

        list.forEach((b) => console.log(b));
        console.log(list.join('+'));
  }
  var classes = document.querySelector('#classes');
    allClasses(classes.classList);
    classes.classList = '';
    console.log('Klasy zostały usunięte.');
    
 // zadanie 7
 function addAttr(els) {
    const filtered = [...els].filter(el => !el.getAttribute('data-text'));
    filtered.forEach((el) => {
      el.setAttribute('data-text', 'text');
    })
  }
  
  addAttr(document.getElementById('longList').getElementsByTagName('li'));
  
  
// zadanie 8
   var theFirst = (string) => { 
        return {
            newClass: string
        };
     };

    var theSecond = (object) => {
        return object.newClass;
    };

    var object = theFirst('something');
    var string = theSecond(object);
    var xxx = document.querySelector('#myDiv').classList;
    xxx.add(string);
    
// zadanie 9
function addEvenOddClass(number) {
  const newClass = number % 2 === 0 
    ? 'even'
    : 'odd';
  console.log(number, newClass);
  document.getElementById('numbers').classList.add(newClass);
}

addEvenOddClass(Math.floor(Math.random() * 11));

// zadanie 10
function getValues(el) {
  return [...el.children].map(v => v.innerText);
}

console.log(getValues(document.getElementById('longList')));

// zadanie 11
  function switchThem(child) {
        let childs = [...child];
        childs.forEach((element) => {
            var newNmb = Math.round(Math.random() * 10);
            element.dataset.oldValue = element.innerHTML;
            element.innerHTML = newNmb;
        });
    }

    let child = document.querySelector('#longList').children;
    switchThem(child)
});
