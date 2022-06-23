const gridContainer = document.querySelector('.grid-container')
const resizeBtn = document.getElementById('resize')
const resetBtn = document.getElementById('reset')

let numBoxes = 25



function makeGrid(numBoxes){
    
    let gridArea = numBoxes *numBoxes
    
    
    for(let i =0; i < gridArea; i++){
        let gridItem = document.createElement('div')
        gridContainer.style.gridTemplateColumns = `repeat(${numBoxes}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${numBoxes}, 1fr)`
        gridItem.addEventListener('mouseover', function(){
            gridItem.classList.add('black-bkgd')
        })
        gridContainer.appendChild(gridItem)
    }
}

resizeBtn.addEventListener('click', function(){
    let divs = document.querySelectorAll('.grid-container div')
    reset(divs) 

    let numBoxes = prompt("How big would you like your grid? We can go up to 100X100!. Just type one number")
    makeGrid(numBoxes)
    
})
resetBtn.addEventListener('click', reset)

makeGrid(numBoxes)


function reset(divs){
    divs = document.querySelectorAll('.grid-container div')
    for(let i=0; i < divs.length ; i++){
        divs[i].classList.remove('black-bkgd')
    }
}


