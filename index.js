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