SafeGuarding Constructors
Why: throws error if new keyword isnt used to create an object

    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }