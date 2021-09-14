//function declaration
const myAge = calcAge1(1994);
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}



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

const yearsToRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} still has ${retirement} years to leave his blistering career`
}

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