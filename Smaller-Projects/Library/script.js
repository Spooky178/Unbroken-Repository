function Book(title, author, pageCount, isRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount
    this.isRead = isRead;
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pageCount} pages, ` + (this.isRead?'already read':`not read yet`))
    }
}

const myLibrary =[]
function addBookToLibrary(title,author,pageCount,isRead){
    let myBook = new Book(title,author,pageCount,isRead)
    let id;
    // enters the loop once and verify if unique
    do{
        id = idGenerator()
    }while(isIdUnique(myLibrary, id) === false)
    myBook[`id`] = id
    myLibrary.push(myBook)

}

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
function createBookDisplay(book){
    const card = document.createElement('div')
    card.setAttribute(`class`,`card`)
    card.setAttribute(`id`,book.id)

    const container = document.createElement(`div`)
    container.setAttribute(`class`,`book-holder`)
    container.style.border = `1px solid black`
    const headerId = document.createElement(`h2`)
    headerId.textContent = book.id

    card.appendChild(headerId)
    card.appendChild(container)
    const bodyContainer = document.querySelector(`#body`)
    bodyContainer.appendChild(card)

    let para = [cardParaMaker(), cardParaMaker(), cardParaMaker(), cardParaMaker()]

    para[0].textContent = `Title : ${book.title}`
    para[1].textContent = `Author : ${book.author}`
    para[2].textContent = `Pages : ${book.pageCount}`
    para[3].textContent = `Status : ${book.isRead}`
    para.forEach((element) => container.appendChild(element));

}
function cardParaMaker(){
    const p = document.createElement(`p`)
    p.setAttribute(`class`,`card-content`)
    return p
}
