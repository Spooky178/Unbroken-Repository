// Write a constructor for making “Book” objects.

function Book(title, author, pageCount, isRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount
    this.isRead = isRead;
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pageCount} pages, ` + (this.isRead?'already read':`not read yet`))
    }
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Don't do this!
Object.setPrototypeOf(Player.prototype, Person.prototype)
// Player.prototype = Person.prototype;

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

// Not again!
Object.setPrototypeOf(Enemy.prototype, Person.prototype)
// Enemy.prototype = Person.prototype;

Enemy.prototype.sayName = function() {
  console.log("HAHAHAHAHAHA");
};

const carl = new Player("carl", "X");
carl.sayName();
console.log(carl.marker)
const rick = new Enemy(`Rick`)
rick.sayName()
console.log(rick.marker)
// SafeGuarding Constructors
// Why: throws error if new keyword isnt used to create an object
//  if (!new.target) {
// throw Error("You must use the 'new' operator to call the constructor");
//   }

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple