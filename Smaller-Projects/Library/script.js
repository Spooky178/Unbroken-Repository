        // ------ GLOBAL VARIABLES ------ //
let deleteBtn;
const myLibrary =[]
const dialogBox = document.getElementById(`new-book-dialog`)
const submitButton = dialogBox.querySelector(`#submit-btn`)
const bodyContainer = document.querySelector(`#body`)
//  Global Variables End <---

        // ------ HELPER FUNCTIONS ----- // 

// ---> addBookToLibrary
function idGenerator(){
    // spliting to obtain a 4 digit number
    let uuid = crypto.randomUUID().split('-')
    let rng = Math.floor(Math.random() *3 + 1)
    return uuid[rng]
}
function isIdUnique(array, uuid){
    if(array.length === 0){
        return true
    }
    // if element is not found array.some returns false === is Unique true
    let isUnique = !array.some(book => { 
        book.id === uuid
    })
    return isUnique   
}

// ---> createBookDisplay
function cardParaMaker(){
    const p = document.createElement(`p`)
    p.setAttribute(`class`,`card-content`)
    return p
}

// ---> Submit Button
function checkInputFill(obj){
    isFill = true
    for (const prop in obj){
        if(obj[prop].value === ""){
            isFill = false
        }
    }
    return isFill
}

// ---> Delete Button
function libraryPop(uuid){
    index = myLibrary.findIndex(book => book.id === uuid)
    myLibrary.pop(index)
}
function cardPop(uuid){
    const card = document.getElementById(uuid)
    card.remove()
}
//Helper Functions End <---

// ----- MAIN FUNCTION -----//
// Book Constructor
function Book(title, author, pageCount, isRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount
    this.isRead = isRead;
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pageCount} pages, ` + (this.isRead?'already read':`not read yet`))
    }
}
function addBookToLibrary(title,author,pageCount,isRead){
    let myBook = new Book(title,author,pageCount,isRead)
    let id;
    // enters the loop once and verify if unique
    do{
        id = idGenerator()
    }while(isIdUnique(myLibrary, id) === false)
    myBook[`id`] = id
    myLibrary.push(myBook)
    createBookDisplay(myBook)
    deleteBtn = document.querySelectorAll(`.delete`)

}
// Rework this part of code BELOW
function createBookDisplay(book){
    const card = document.createElement('div')
    card.setAttribute(`class`,`card`)
    card.setAttribute(`id`,book.id)

    const container = document.createElement(`div`)
    container.setAttribute(`class`,`book-holder`)
    const headerId = document.createElement(`h2`)
    headerId.textContent = book.id

    card.appendChild(headerId)
    card.appendChild(container)
    // execpt for the constant above, all elements of this function have been created
    bodyContainer.appendChild(card)

    let para = [cardParaMaker(), cardParaMaker(), cardParaMaker(), cardParaMaker()]

    para[0].textContent = `Title : ${book.title}`
    para[1].textContent = `Author : ${book.author}`
    para[2].textContent = `Pages : ${book.pageCount}`
    para[3].textContent = `Status : ${book.isRead?`Read`:`Not read`}`
    para.forEach((element) => container.appendChild(element));

    const deleteBtn = document.createElement(`button`)
    deleteBtn.setAttribute(`class`,`delete`)
    deleteBtn.setAttribute(`data-id`,book.id)
    deleteBtn.textContent = `-`
    container.appendChild(deleteBtn)

}


// Buttons does work, event listeners do not fire everytime a button is created
// They are not captured by ^ those
// Event Delegation is the key, implementation below doesn't work > WHY?
// Because a new event listeners are fired each time body is clicked
            // bodyContainer.addEventListener(`mousedown`,function(){
            //     deleteBtn.forEach((currentButton, index) => {
            //     currentButton.addEventListener(`click`, function () {
            //         some code here
            //     })
            // })
            // })

// Toggle read Button
bodyContainer.addEventListener("click",(event)=>{
    const toggleReadbtn = event.target.closest(`.toggle`);
    if(!deleteBtn)return
    let uuid = deleteBtn.dataset.id
    libraryPop(uuid)
    cardPop(uuid)
})


// ----- EVENT LISTENERS ----- //

// Closing the form reset all the fields
dialogBox.addEventListener(`close`, (e) => {
    document.getElementById(`new-book-form`).reset()
})
submitButton.addEventListener(`click`, function(event){
    event.preventDefault()

    let addBook = new Book(
        dialogBox.querySelector(`#title`), 
        dialogBox.querySelector(`#author`), 
        dialogBox.querySelector(`#page-count`),
        dialogBox.querySelector(`#isRead`)
    )
    if(checkInputFill(addBook)){
        addBookToLibrary(
            addBook.title.value,
            addBook.author.value,
            addBook.pageCount.value,
            addBook.isRead.checked
        )
        dialogBox.close()
    }
})

// Delete Button & Event Delegation --> .target is magic
bodyContainer.addEventListener("click",(event)=>{
    const deleteBtn = event.target.closest(`.delete`);
    if(!deleteBtn)return
    let uuid = deleteBtn.dataset.id
    libraryPop(uuid)
    cardPop(uuid)
})

// Event Listeners End <---