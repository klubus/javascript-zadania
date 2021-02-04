// zadanie 1
var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
}

// zadanie 2
let num3 = 18;
let num4 = 16;
let num5 = 10;

if (num3 > num4 && num3 > num5) {
    console.log(`num3 (${num3}) jest największa`);
} else if (num4 > num5) {
    console.log(`num4 (${num4}) jest największa`);
} else {
    console.log(`num5 (${num5}) jest największa`);
}

// zadanie 3
for (let i=0; i<11; i++) {
    console.log("Lubię JavaScript");
}

// zadanie 4
let result = 0;
for (let j = 1; j < 11; j++) {
    result += j;
}

// zadanie 5:
var n = 5;
for (let k = 0; k <= n; k++) {
    console.log(`${k} - ${k % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

// zadanie 6
for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}

// zadanie 7
for (let n = 0; n <= 100; n++) {
    isMod3 = n % 3 === 0 ? 'Fizz' : '';
    isMod5 = n % 5 === 0 ? 'Buzz' : '';

    const result = isMod3 + isMod5;
    console.log(result || n);
}

// zadanie 8
// a)
let stars = '*';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        
        result += stars;
        
    }
    console.log(result)
}

// b)
let stars = '*';
let spacer = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 -1; j > i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}


// c)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}

// d)
let stars = '*';
let spacer = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? stars : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += spacer;
        }
        result += stars;
    }
  
    console.log(result);
}
