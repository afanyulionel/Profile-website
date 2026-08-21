const array = [1, "2", 3.5, {name: "Mr. Lio"} ]

const person = {
    name: "",
    age: 1,
    gender: "M",
    height: 23.3,   
}
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const persons = [person, person, person]
// foreach, =>void
persons.forEach(iterate);
// a block of code = function.

function iterate (person){
    console.log(person.name);
}

// map
const multiplyByTwo = (n) => n * 2;
const doubledIntegers = integers.map(multiplyByTwo);

const trippledIntergers = integers.map(multiplyByThree);

function multiplyByThree(n){
    return n * 3;
}