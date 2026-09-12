//------GLOBAL VARIABLES------// 

// set variable for hovering logic
let isHovered ;
let isCapped ;
// Create a square div and set length to 800px 
const container = document.createElement(`div`)
    container.setAttribute(`class`, `container`)
    const lengthContainer = 800
    container.style.width = `${lengthContainer}px`
    container.style.height = `${lengthContainer}px`
    container.style.opacity = `0.5`

const userInput = document.createElement(`input`)
    userInput.setAttribute(`class`, `input`)

const navBar = document.querySelector(`.navBar`)

const button = document.createElement(`button`)
    button.setAttribute(`class`,`button`)
    button.textContent = `Submit`

let resetSession = false

// Appending initial look of the page **Added navBar
navBar.appendChild(userInput)
navBar.appendChild(button)
document.body.appendChild(container)

// ----- User Input ----- //

button.addEventListener(`click`, function(e){
    container.style.backgroundColor = rdmColorGenerator()
    let setUserInput = +userInput.value
    userInput.value = ``
    if(resetSession === true){
        deleteGrid()
    }
    addGrid(setUserInput)
    sketchSession()
    resetSession = true
})

// ----- Single Grid creation ----- //
function newGrid(index, squarePerSide){
// Create a grid and set its length to match a calc from prompt
let grid = document.createElement(`div`)
grid.setAttribute(`class`,`grid`)
grid.setAttribute(`id`,`id:${index}`)
let lengthGrid = lengthContainer / squarePerSide
grid.style.width = `${lengthGrid}px`
grid.style.height = `${lengthGrid}px`

grid.isHovered = false ;
grid.isCapped = false ;

return grid ;
}
// Append max number of grid possible in the sqaure
// Fixed logic, squared gridCount and added flex-wrap to container
function addGrid(gridCount){
        for(let i = 0;i < (gridCount ** 2);i++){
        container.appendChild(newGrid(i,gridCount))
    }
}
// ------ Grid Deletion ----- //
function deleteGrid(){
    let gridList = document.querySelectorAll(`.grid`)
    gridList.forEach((element)=>{
        element.remove()
    });
}

// ----- Hovering Logic ------ //

// fix : added a cap to opacity
function sketchSession(){
    let gridList = document.querySelectorAll(`.grid`)
    gridList.forEach((element,index)=>{
        element.addEventListener(`mouseenter`, function(e){
            let opacity = +e.target.style.opacity
            if(e.target.isHovered === false){
                opacity = 0.1
                e.target.style.backgroundColor = rdmColorGenerator()
                gridList[index].isHovered = true
            }
            else if(e.target.isHovered === true && e.target.isCapped === false){
                opacity += 0.1
            }
            e.target.style.opacity = `${opacity}`
            if (opacity>1){
                e.target.isCapped = true
            }
        })
        
    });
}

// Generate a random rgb color and return it as a string format 'rgb(val val val)'
function rdmColorGenerator(){
    let rgbArray = []
    let rgbStr = ''
    for(let i = 0;i<3;i++){
        rgbArray.push(Math.floor(Math.random()*255))
        console.log(rgbArray[i])
    }
    rgbStr = `rgb(${rgbArray.join(' ')})`
    console.log(rgbStr)
    return rgbStr
}