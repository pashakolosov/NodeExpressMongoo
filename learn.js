/* function sumAll(...args) {
    let sum = 0
    for (let val of args) {
        sum += val
    }
    return sum
}

console.log(sumAll(9, 3, 4, 5, 3, 23, 6, 1, 'Pasha', 5, 89)) 

let arr = [1, 3, 4, 5, 2, 5, 6]

console.log(...arr)

console.log(...'Hello')
console.log(...['Привет, как дела, этот код никто не увидит. Никто не узнает, что у меня 4см']) 


function pow(x ,n) {
    let sum = 1
    if (n <= 0) {
        return sum
    }
    return x * pow(x, (n -1))
    
}

console.log(pow(2, 3)) 


function Person(name, old, country) {
    let obj = {};
    obj.name = name;
    obj.old = old;
    obj.country = country;
    obj.greeting = function () {
        console.log(`hello I'm is ${this.name}`)
    }
    return obj
}

function Person2(name, old, country) {
    this.name = name;
    this.old = old;
    this.country = country;
    this.greeting = () => console.log(`hello I'm is ${this.name}`)
}

let person1 = new Person2('pasha', '22', 'Belarus');
let person2 = new Person2('masha', 32, 'Russia');


function People(firstName, secondName, gender, interest) {
    this.name = {
        first: firstName,
        second: secondName
    }
    this.gender = gender
    this.interest = interest

    this.greeting = () => console.log(`Hello, my name is ${this.name.first}`)

    this.bio = () => console.log(`Has name is ${this.name.first}, uesrname is ${this.name.second}. Gender is ${this.gender} interest is ${this.interest}`)
}


let pasha = new People('Pasha', 'Kolosov', 'man', ['guitar', 'coding', 'judo'])

console.log(pasha);

pasha.bio();
*/


let people = new Object({
    name: 'people',
    foot: 2,
    brain: 1,
    hang: 2,
    greeting: function() {
        console.log('hello my name is ' + this.name)
    }
})


let pasha = Object.create(people);

pasha.greeting();

console.log(pasha.getKey().forEach(element => {
    console.log(element)
}))