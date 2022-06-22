const gridContainer = document.querySelector('.grid-container')
const resizeBtn = document.getElementById('resize')
let numBoxes = 25

resizeBtn.addEventListener('click', function(){

    let numBoxes = prompt("How big would you like your grid? We can go up to 100X100!. Just type one number")
    makeGrid(numBoxes)

})


// console.log(numBoxes)
function makeGrid(numBoxes){
    let gridArea = numBoxes *numBoxes


   for(let i =0; i < gridArea; i++){
        let gridItem = document.createElement('div')
        gridContainer.style.gridTemplateColumns = `repeat(${numBoxes}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${numBoxes}, 1fr)`

        gridContainer.appendChild(gridItem)
        
   }

   
//         let rows = document.createElement('div')
//         rows.classList.add('row')
//         for(let j =0; j< numBoxes; j++){
//             let columns = document.createElement('div')
//             columns.classList.add('column')
//             rows.appendChild(columns)
//         }
//     gridContainer.appendChild(rows)
//    }

    const squares = document.querySelectorAll('.column')


    squares.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.classList.add('black-bkgd')
        })
    })
}

makeGrid(numBoxes)