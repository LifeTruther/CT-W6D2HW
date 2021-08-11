
/*
Code Wars Problem 1: https://www.codewars.com/kata/reviews/59264a88919f2ff650000070/groups/611296a8f807b1000182660c
function typist(s){
    //coding and coding..
    let count = 0;
    let y = 1
    if (s[0] == s[0].toUpperCase()){
        count += 1
    }
    for(let i = 0; i < s.length - 1; i++ ){
    if (s.length > 1 && s[i] == s[i].toLowerCase() && s[y] == s[y].toUpperCase()){
        count += 1
    } else if (s.length > 1 && s[i] == s[i].toUpperCase() && s[y] == s[y].toLowerCase()){
        count += 1
    } y += 1 
    } return s.length + count
}

Code Wars Problem 2: https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript
var replaceDots = function(str) {
    return str.replace(/\./g, '-');
}
*/

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:[ "Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream:[ "Chocolate", "Vanilla", "Oreo"],
    shakes:[{
        oberweis:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

FavFood = (obj) =>{
    for(let x in obj){
        if (typeof obj[x] == "string"){
            console.log(`${x}: ${obj[x]}`)
        } else if (typeof obj[x] == "object"){
            console.log(`${x}`, (obj[x]))
        }  
    } console.log("That's Nate's favorite food!")
};
FavFood(person3)

console.log(typeof person3.shakes)

//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Person{
    constructor(name, age, height){
        this.age = parseInt(age);
        this.name = name;
        this.height = height;
    }

// Use an arrow to create the printInfo method
    printInfo = () => {
        console.log(`\n Name: ${this.name} \n Age: ${this.age} \n Height: ${this.height}`)
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = (add) =>{
        let age = this.age += parseInt(add)
    }
}

let jessica = new Person('Jessica','29','5ft 8in')
jessica.addAge(7)
jessica.printInfo()
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let strength = (strest) =>{
    return new Promise( (resolve, reject) => {
        if (strest.length > 10){
            resolve("Big word")
        }else{
            reject("Small Number")
        }
    })
}

strength('Long Big Strong One')


.then( (result) =>{
    console.log(result)
})

.catch((error) => {
    console.log(error)
})