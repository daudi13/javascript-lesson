//function declaration

// const myAge = calcAge1(1994);
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

/*

//function expression

function calcAge2(birthYear) {
    return 2021-birthYear
}
const myAgeNow = calcAge2(1994);
console.log(myAgeNow);

//arrow function 

const theBirthday = birthYear => 2021 - birthYear

const age3 = theBirthday(1988);

console.log(age3)


//years left until retirement

// const yearsToRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} still has ${retirement} years to leave his blistering career`
// }

const yearsLeft = yearsToRetirement(1994, "Matthew");
console.log(yearsLeft);

//functions calling other functions 


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)
    const juice = `juice with ${applePieces} apple${apples>1?'s':''} pieces and ${orangePieces} orange${oranges>1?'s':''} pieces`;
    return juice
}

const myJuice = fruitProcessor(0, 5);
console.log(myJuice);

*/

/*

//converting function types
function calcAge(birthYear) {
    return 2021 - birthYear
}

const yearsToRetirement = function (birthYear, firstName) {
    const age = calcAge1 (birthYear);
    const retirement = 65 - age;
    if (retirement>0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} has already retired`)
    }
}

const myretirement = yearsToRetirement(1961, 'Ludwig');
*/

/*

//coding challenges 

function calcAverage(a, b, c) {
    const average = (a + b + c) / 3;
    return average;
}

const dolphinsScore = calcAverage(4, 23, 71);
const koalasScore = calcAverage(23, 34, 27);

// console.log(dolphinsScore);
// console.log(koalasScore);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }

    else if(avgKoalas >= 2* avgDolphins) {
        console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`)
    }

    else {
        console.log(`Nobody won`)
    }
}

checkWinner(dolphinsScore, koalasScore);
*/

//coding challenge #2

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 15 / 100;
    } else {
        return bill * 20 / 100;
    }
};

const bill1 = calcTip(100);

console.log(bill1)

const bills = new Array(125, 555, 44);

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];

const total = new Array(tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]);

console.log(total);

