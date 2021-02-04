// zadanie 1
const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);

// zadanie 2
  const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
  const myList = document.createElement('ol');
  myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));  

// zadanie 3
  newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});

// zadanie 4
const button = document.createElement('button');
button.innerText = 'Click to remove';
button.addEventListener('click', (e) => {
    e.target.remove();
});

// zadanie 5
  var random = Math.round(Math.random() * 10);

  for (var a = 0; a < random; a++) {
      var someDiv = document.createElement('div');

      someDiv.innerHTML = `to jest div numer ${a}`;
      exe.appendChild(someDiv);
  }
  
// zadanie 6
const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlFromObj(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlFromObj(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

htmlFromObj(object);


// zadanie 7

  var myOLlist = document.createElement('ol');
  myOLlist.id = "firstList";
  var myFirstButton = document.createElement('button');
  myFirstButton.id = "firstButton";
  myFirstButton.innerText = 'first OL list';

  var q = document.createElement('li');
  q.innerText = "Q";
  var w = document.createElement('li');
  w.innerText = "W";
  var e = document.createElement('li');
  e.innerText = "E";
  var r = document.createElement('li');
  r.innerText = "R";
  var t = document.createElement('li');
  t.innerText = "T";
  var y = document.createElement('li');
  y.innerText = "Y";

  myOLlist.appendChild(q);
  myOLlist.appendChild(w);
  myOLlist.appendChild(e);
  myOLlist.appendChild(r);
  myOLlist.appendChild(t);
  myOLlist.appendChild(y);

  
  var myNextOLlist = document.createElement('ol');
  myNextOLlist.id = "secondList";

  var mySecondButton = document.createElement('button');
  mySecondButton.id = "secondButton";
  mySecondButton.innerText = "second OL list";

  root.appendChild(myOLlist);
  root.appendChild(myFirstButton);
  root.appendChild(myNextOLlist);
  root.appendChild(mySecondButton);

  function toTWO(){
    var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if( listOfElements1.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }
  }
  document.querySelector('#firstButton').addEventListener('click', toTWO);

  function toOne(){
    var listTwo =document.querySelector("#firstList");
    var listOne =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if(listOfElements1.length < 1){
      document.querySelector("#secondButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#firstButton").disabled = false;
    }

  }
  document.querySelector('#secondButton').addEventListener('click', toOne);
  
  
  // zadanie 8
  const fieldset = document.createElement('fieldset');
const inputs = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}

// zadanie 9
  var nextFormulage = document.createElement("form");
  root.appendChild(nextFormulage);
  var yourName = document.createElement("input");
  yourName.setAttribute('type', 'text');
  yourName.setAttribute('value', 'Name');
  var lastname = document.createElement("input");
  lastname.setAttribute('type', 'text');
  lastname.setAttribute('value', 'Lastname');
  var age = document.createElement("input");
  age.setAttribute('type', 'text');
  age.setAttribute('value', 'Age');
  var howManyKids = document.createElement("input");
  howManyKids.setAttribute('type', 'text');
  howManyKids.setAttribute('value', 'HowManyKids');

  nextFormulage.appendChild(yourName);
  nextFormulage.appendChild(lastname);
  nextFormulage.appendChild(age);
  nextFormulage.appendChild(howManyKids);

  var moreButton = document.createElement('button');
  moreButton.id = "more"
  moreButton.type = 'button'
  moreButton.innerText = "Więcej";
  nextFormulage.appendChild(moreButton);

  var createButton = document.createElement('button');
  createButton.id = "create"
  createButton.type = 'button'
  createButton.innerText = "Utwórz";
  nextFormulage.appendChild(createButton);

  var nameTab = [];
  var lastnameTab = [];
  var ageTab = [];
  var kidsTab = [];

  function moreFields(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';

  }
  document.querySelector('#more').addEventListener('click', moreFields);

  function createTable(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';


    var tab = document.createElement("table");
    
    var header = document.createElement('tr');
    tab.appendChild(header);
    var name = document.createElement('th');
    name.innerHTML = "Name";
    var lastName = document.createElement('th');
    lastName.innerHTML = "Lastname";
    var age1 = document.createElement('th');
    age1.innerHTML = "Age";
    var kids = document.createElement('th');
    kids.innerHTML = "HowManyKids";
    
    root.appendChild(tab);
    header.appendChild(name);
    header.appendChild(lastName);
    header.appendChild(age1);
    header.appendChild(kids);
    
    for (var i = 0; i < nameTab.length; i++) {
      var item = document.createElement('tr');
      tab.appendChild(item);
      var del = document.createElement('button');
      del.innerText = "Usuń";
      item.appendChild(del);

      var newName = document.createElement('td');
      newName.innerText = nameTab[i];
      var newLastname = document.createElement('td');
      newLastname.innerText = lastnameTab[i];
      var newAge = document.createElement('td');
      newAge.innerText = ageTab[i];
      var newKids = document.createElement('td');
      newKids.innerText= kidsTab[i];   

      
      item.appendChild(newName);
      item.appendChild(newLastname);
      item.appendChild(newAge);
      item.appendChild(newKids);
      item.appendChild(del);

      del.addEventListener('click', deleteA);
    
    }
    nameTab = [];
    lastnameTab = [];
    ageTab = [];
    kidsTab = [];
  }

  function deleteA(e) {
    
    e.target  .parentElement.remove()
  }

  document.querySelector('#create').addEventListener('click', createTable);
  
  // zadanie 10
  let changeButton = document.createElement('button');
  changeButton.id = "change"
  changeButton.type = 'button'
  changeButton.innerText = "Użyj dużych liter!";
  root.appendChild(changeButton);  

  function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
  }  

  document.querySelector('#change').addEventListener('click', changeLetters);
  
  // zadanie 11
  var numbersInTxtBtn = document.createElement('button');
numbersInTxtBtn.innerText = 'Check';
var numbersInTxt = document.createElement('input');
numbersInTxt.type = 'text';

const rut = document.getElementById('root');

function numbers(a) {
    if (!/\d/.test(a)) {
        return 'There are no numbers';
    }

    var xxx = a.replace(/[^0-9]/g, ' ').split(' ');

    var sum = 0;
    var notSum = 1;

    xxx.forEach((i) => {
        if (!i.length) {
            return;
        }

        i = parseInt(i);

        sum += i;
        notSum *= i;
      
      console.log(sum);
    });

    for (var i = 0; i < notSum; ++i) {
        var div = document.createElement('div');
        div.innerText = a;

        document.body.append(div, rut);
    }

    return sum;
}

numbersInTxtBtn.addEventListener('click', () => {
    console.log(numbers(numbersInTxt.value));
});

document.body.append(numbersInTxt, rut);
document.body.append(numbersInTxtBtn, rut);

// zadanie 12
function createObj(str) {
    return {
        string: str
    }
}

const alaStr = createObj('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}


// zadanie 13
 function countForMe(stringArr){  
  var howManyLetters = [];
    for(var i = 0; i < stringArr.length; i++){
      howManyLetters[i] = stringArr[i].length;
    }     
     return howManyLetters;
  }

  function showAvg(summ){
    var average = summ / tabWithWords.length;
    return average;
  }

  function sum(howManyLetters){
    var summ = howManyLetters.reduce((prev,curr) => prev += curr);
    return summ;
  }
  

 var tabWithWords = ['Mornings','are','for','coffee','and', 'contemplation', 'StrangerThings'];
  console.log("Letters in each word:");
  console.log(countForMe(tabWithWords));
  console.log("Sum of letters:");
  console.log(sum(countForMe(tabWithWords)));
  console.log("Average:");
  console.log(showAvg(sum(countForMe(tabWithWords))));
  
  // zadanie 14
  let obj = {
    name: '',
    surname: ''
};

function modifyObj(name, surname) {
    obj.name = name;
    obj.surname = surname;
    obj.nameLength = name.length;
    obj.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (e) => {
            obj = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

modifyObj('Krystian', 'Kluba');
