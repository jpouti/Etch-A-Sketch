const container = document.querySelector('#grid_container');

//making 16 x 16 grid for default view
function defautGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let gridElement = document.createElement("div");
            gridElement.className = "gridElement";
            gridElement.setAttribute('style', 'border-style: solid;');
            container.appendChild(gridElement);
        }
    }
    sketchGrid();  
}

// adding sketching, changing color of the grid square when mouse passes over them
// a mouse pass is adding 20% of black to color (square is black after 5 passes)
function sketchGrid() {
    document
        .querySelectorAll('.gridElement')
        .forEach(e => {
            e.addEventListener('mouseover', function(event) {
                event.target.style.backgroundColor = "black"
                if (parseFloat(event.target.style.opacity)) {
                    event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.2;
                } else {
                    event.target.style.opacity = 0.2;
                }
            }); 
    });
}

// Clicking 'clear the grid' clears the old grid and makes a new with prompted size
document.querySelector('#clear').addEventListener('click', function() {
    clearGrid();
    newGrid();
});


// making new grid with chosen gid size, max size 60 x 60
function newGrid() {
    let gridSize = prompt("Enter number of squares per side to make a new grid: (Max grid size 60 x 60)");
    if (gridSize > 60) {
        gridSize = 60;
    }
    //setting the 'grid-template-columns & grid-template-rows' to prompted variable
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridElement = document.createElement("div");
            gridElement.className = "gridElement";
            gridElement.setAttribute('style', 'border-style: solid;');
            container.appendChild(gridElement);
        }
    }
    sketchGrid();   
}

//Clearing the old grid
function clearGrid() {
    document
        .querySelectorAll(".gridElement")
        .forEach((e) => e.parentNode.removeChild(e));
}

// calling the defaultGrid for default view
defautGrid();