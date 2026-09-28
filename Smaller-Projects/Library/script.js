
        // ------ GLOBAL VARIABLES ------ //
let deleteBtn;
const myLibrary =[]
const dialogBox = document.getElementById(`new-book-dialog`)
const submitButton = dialogBox.querySelector(`#submit-btn`)
const bodyContainer = document.querySelector(`#body`)
//  Global Variables End <---

        // ------ HELPER FUNCTIONS ----- // 
function checkRead(isRead){
    return `${isRead?`Read`:`Not read`}`
}

// ---> createBookDisplay
function cardParaMaker(){
    const p = document.createElement(`p`)
    p.setAttribute(`class`,`card-content`)
    return p
}
// Please look into README - 'TO GET MORE PRACTICE' part
function createDeleteButton(book){
    const deleteBtn = document.createElement(`button`)
    deleteBtn.setAttribute(`class`,`delete`)
    deleteBtn.setAttribute(`data-id`,book.id)
    deleteBtn.textContent = `-`
    return deleteBtn
}
function setCardContent(book){
    let para = [cardParaMaker(), cardParaMaker(), cardParaMaker(), cardParaMaker()]
        para[0].textContent = `Title : ${book.title}`
        para[1].textContent = `Author : ${book.author}`
        para[2].textContent = `Pages : ${book.pageCount}`
        para[3].textContent = `Status : ${checkRead(book.isRead)}`
        return para
}
function createReadToggler(isRead,uuid){
    const toggler = document.createElement(`button`)
    toggler.setAttribute(`class`,`toggle`)
    toggler.setAttribute(`data-state`,checkRead(isRead))
    toggler.setAttribute(`data-id`,uuid)
    toggler.textContent = isRead?`Unread`:`Read`;
    return toggler
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
function checkFormValidity(inputs){
    isValid = true
    inputs.forEach((item, index) => {
        // item.preventDefault()
            if(!(item.validity.valid)){
                isValid=false
            }
        })
    return isValid
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

class Book{
    // Moved those two methods in here, they are only called in new book creation
    #idGenerator(){
        // spliting to obtain a 4 digit number
        let uuid = crypto.randomUUID().split('-')
        let rng = Math.floor(Math.random() *3 + 1)
        return uuid[rng]
    }
    #isIdUnique(array, uuid){
        if(array.length === 0){
            return true
        }
        // if element is not found array.some returns false === is Unique true
        let isUnique = !array.some(book => { 
            book.id === uuid
        })
        return isUnique   
    }

    constructor(title, author, pageCount, isRead){
        // Used an Module pattern, supposedly because it did not initially worked without
        this.id = (() => {
            let id;
        // enters the loop once and verify if unique
            do{
                id = this.#idGenerator()
            }while(this.#isIdUnique(myLibrary, id) === false)
            return id
        })();
        this._title = title
        this._author = author
        this._pageCount = pageCount
        this._isRead = isRead
    }
    
    info() {
    return(`${this.title} by ${this.author}, ${this.pageCount} pages, ` + (checkRead(this.isRead)))
    }
    get title(){
        return this._title
    }
    get author(){
        return this._author
    }
    get pageCount(){
        return this._pageCount
    }
    get isRead(){
        return this._isRead
    }

    set title(value){
        this._title = value
    }
    set author(value){
        this._author = value
    }
    set pageCount(value){
        this._pageCount = value
    }
    set isRead(bool){
        this._isRead = bool
    }
}

function addBookToLibrary(title,author,pageCount,isRead){
    let myBook = new Book(title,author,pageCount,isRead)
    myLibrary.push(myBook)
    createBookDisplay(myBook)
    deleteBtn = document.querySelectorAll(`.delete`)
}
// Rework this part of code BELOW > done
function createBookDisplay(book){
    const card = document.createElement('div')
    card.setAttribute(`class`,`card`)
    card.setAttribute(`id`,book.id)

    const container = document.createElement(`div`)
    container.setAttribute(`class`,`book-holder`)
    const headerId = document.createElement(`h2`)
    headerId.textContent = book.id

    // --- First add top header and container to global variable bodyContainer
    card.appendChild(headerId)
    card.appendChild(container)
    bodyContainer.appendChild(card)

    // ---- Second add content to card > container
    const contentArray = setCardContent(book)
    contentArray.forEach((element) => container.appendChild(element));

    // Third add last row with buttons
    const buttonBar = document.createElement(`div`)
    buttonBar.setAttribute('class', 'card-button-bar')
    buttonBar.appendChild(createReadToggler(book.isRead,book.id))
    buttonBar.appendChild(createDeleteButton(book))
    container.appendChild(buttonBar)


}

// ------------------------------------------------------------ //


// ----- EVENT LISTENERS ----- //

// Closing the form reset all the fields and hide spans
dialogBox.addEventListener(`close`, (e) => {
    document.getElementById(`new-book-form`).reset()
    const spans = document.querySelectorAll(`span`)
    spans.forEach((item) => item.style.visibility = "hidden")
})

submitButton.addEventListener(`click`, function(event){
    event.preventDefault()
    const form = document.querySelector(`form`)
    const span = form.querySelectorAll(`span`)
    const input = form.querySelectorAll('input')
    let addBook = new Book(
        dialogBox.querySelector(`#title`).value, 
        dialogBox.querySelector(`#author`).value, 
        dialogBox.querySelector(`#page-count`).value,
        dialogBox.querySelector(`#isRead`).checked
    )
    if(checkFormValidity(input) && checkInputFill(addBook)){
        addBookToLibrary(
            addBook.title,
            addBook.author,
            addBook.pageCount,
            addBook.isRead
        )
        dialogBox.close()
    }
    else {
        input.forEach((item, index) => {
            if(!(item.validity.valid)){
                span[index].style.visibility = `visible`
            }else{
                span[index].style.visibility = "hidden"
            }
        })
    }
})

// Delete Button & Event Delegation --> .target is magic
// adding toggler here
bodyContainer.addEventListener("click",(event)=>{
    const deleteBtn = event.target.closest(`.delete`);
    const toggleBtn = event.target.closest(`.toggle`)
    if(!deleteBtn && !toggleBtn)return
    if(deleteBtn){
        let uuid = deleteBtn.dataset.id
        libraryPop(uuid)
        cardPop(uuid)
    } else{
        let uuid = toggleBtn.dataset.id
        const card = document.getElementById(uuid)
        const statusPara = card.querySelector(`.book-holder p:nth-child(4)`)
        array = statusPara.textContent.split(' : ')
        if(array[1].length > 4){
            array[1] = `Read`
        } else{
            array[1] = `Not Read`
        }
        statusPara.textContent = array.join(' : ')
        // invert read in display - Above
        // invert read in library - Below
        let index = myLibrary.findIndex(book => book.id === uuid)
        let read = myLibrary[index].isRead
        myLibrary[index].isRead = !read

        toggleBtn.textContent = (!read?`Unread`:`Read`)
    }
})

// Event Listeners End <---