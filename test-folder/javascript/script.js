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