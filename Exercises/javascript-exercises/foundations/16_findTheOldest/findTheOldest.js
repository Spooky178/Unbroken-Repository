

const { startTransition } = require("react");
// An array of objects provided by Gemini
// Nodes : name, yearOfBrith,yearOfDeath
// If a person is alive, yearOfDeath === NaN
const person = [
  {
    name: "Alice Johnson",
    yearOfBirth: 1990,
    yearOfDeath: NaN
  },
  {
    name: "Benjamin Smith",
    yearOfBirth: 1945,
    yearOfDeath: 2012
  },
  {
    name: "Clara Oswald",
    yearOfBirth: 1986,
    yearOfDeath: NaN
  },
  {
    name: "David Miller",
    yearOfBirth: 1920,
    yearOfDeath: 1998
  },
  {
    name: "Elena Rostova",
    yearOfBirth: 2001,
    yearOfDeath: NaN
  },
  {
    name: "Frank Sinatra",
    yearOfBirth: 1915,
    yearOfDeath: 1998
  },
  {
    name: "Grace Hopper",
    yearOfBirth: 1906,
    yearOfDeath: 1992
  },
  {
    name: "Isaac Newton",
    yearOfBirth: 1643,
    yearOfDeath: 1727
  },
  {
    name: "Jane Doe",
    yearOfBirth: 1995,
    yearOfDeath: NaN
  },
  {
    name: "Marcus Aurelius",
    yearOfBirth: 121,
    yearOfDeath: 180
  }
];

// calculate age seperately to avoid redundency
function calcAge(birth, end){
  const currentDate = new Date().getFullYear();
        let age;
        // console.log(`End : ${end}`)
        if(!end){
            end = currentDate
        }
        age = end - birth
        // console.log(`Age ; ${age}`)
        return age
}

const findTheOldest = function(arrrayOfObj) {
    const currentDate = new Date().getFullYear();
    let oldestAge = arrrayOfObj.reduce(function(obj, index) {
      // If obj is empty, assign it to first element of array
        if(!obj.name){
            obj = index
        } else {
          const indexAge = calcAge(index.yearOfBirth, index.yearOfDeath)
          const objAge = calcAge(obj.yearOfBirth, obj.yearOfDeath)
          // console.log(`Index ${indexAge} :: Obj ${objAge}`)
          if (indexAge > objAge){
            obj = index
            
          }
        }
        console.log(obj)
      return obj
    },{});
    return {oldestAge}

    // What could reduce be used for?
    // - Calc age
    // - Assign the total/obj argument to be the highest value
    // - Compare the index to total/obj, and store or dismiss accordingly
    // - Return the object with the highest value, NOT the value in of itself
    console.table(findTheOldest(person))
};

// Do not edit below this line
module.exports = findTheOldest;
