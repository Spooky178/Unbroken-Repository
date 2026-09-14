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
    // const svg = document.createElement(`svg`)
    // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    // svg.setAttribute("viewBox", "0 0 24 24")
    // const path = document.createElement(`path`)
    // path.setAttribute('d',"M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z")
    // svg.appendChild(path)
    // alert(svg)
    // toggler.textContent = svg

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
        return(`${this.title} by ${this.author}, ${this.pageCount} pages, ` + (checkRead(this.isRead)))
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

// Toggle read Button
function displaytoggler(prop){
    
}
// ------------------------------------------------------------


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
        
        let index = myLibrary.findIndex(book => book.id === uuid)
        let read = myLibrary[index].isRead
        myLibrary[index].isRead = !read        
    }
// const secondItem = document.querySelector('#myList li:nth-child(2)');
})

// Event Listeners End <---