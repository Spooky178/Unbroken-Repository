// Lesson 2

// factory functions and closure
// a closure is : the combination of a function and the surrounding state

// function createUser(name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => { reputation++; };

//   return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// // logs { discordName: "@josh", reputation: 2 }
// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });

// Scope

// function outer(){
//   const outerVar = `hey I am an outer var`
//   return function inner(){
//     const innerVar = `Hey I am an inner var`
//     console.log(innerVar)
//     console.log(outerVar)

//   }
// }
// const innerFn = outer()
// innerFn()

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function(name) {
    return `${myGreet} ${name}`;
  };
}
const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');