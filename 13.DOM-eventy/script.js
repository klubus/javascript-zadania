// zadanie 1
      // 1.
      document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
      // 2.
      document.addEventListener('mousemove', (event) => console.log(event));
      // 3.
      document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
      // 4.
      document.addEventListener('keypress', (event) => console.log(event));
      // 5.
      document.addEventListener('scroll', (event) => console.log(event));
      // 6.
      document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
 
 // zadanie 2
 document.getElementById('ex2').addEventListener('click', (e) => {
    document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text');
});

// zadanie 3

  function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

switchColor();

// zadanie 4
    function checkInputText(target) {
        var chars = /^[a-zA-Z]+$/;

        return chars.test(target.value);
    }
    document.querySelector('#input-test').addEventListener('change', (event) => {
        var isItOk = checkInputText(event.target);
        var itWasntOk = document.querySelector('#ex3-err');

        if (isItOk == false) {
            itWasntOk.innerText = "Nie możesz wpisywać cyfr!";
            return;
        }
        itWasntOk.innerText = "";
    });
    
    
 // zadanie 5
 const counterBtn = document.getElementById('ex5-button');
const counterContainer = document.getElementById('ex5');
let counter = 0;
function counterAction () {
    counter++;
    counterContainer.innerText = counter;
    if(counter >= 10) {
        counterBtn.removeEventListener('click', counterAction);
    }
}
counterBtn.addEventListener('click', counterAction);

// zadanie 6
 function redOrWhiteColor() {
    document.addEventListener('scroll', (event) => {
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');

        if (whereAmI > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}

// zadanie 7
   var ourInput = document.querySelector('#calculator > input');
    var clearFlag = false;
    var another = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (clearFlag == true) {
                ourInput.value = "";
                clearFlag = false;
            }
            ourInput.value = ourInput.value + event.target.innerText;
            if (another == true) {
                ourInput.value = eval(ourInput.value);
                another = false;
                clearFlag = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                another = true;
            }
        });
    });
  
});
 
