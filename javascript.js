const container = document.querySelector('#container');

for(i=0; i<16; i++) {   //create initial grid
    for(j=0;j<16;j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.addEventListener('mouseenter', () => {box.style.backgroundColor = 'orange'} )
        container.appendChild(box);
    }
}

const setGrid = function() {
    let gridSize = 0;
    gridSize = prompt('How many rows and columns do you want? Pick from 1 to 64.');

    let gridItems = container.querySelectorAll('.box');
    gridItems.forEach( () => {
        const div = container.querySelector('div');
        container.removeChild(div);
    });  
    
    for(let i=0; i < gridSize; i++) {       //redraw grid
        for(let j=0; j < gridSize;j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener('mouseenter', () => {box.style.backgroundColor = 'orange';})
            container.appendChild(box);
        }
    }   

    let boxSize = 320 / gridSize;   //resize the redrawn grid
    const boxesToResize = container.getElementsByClassName('box');
    for(let i=0; i<boxesToResize.length; i++) {
        container.getElementsByClassName('box')[i].style.width = boxSize + 'px';
        container.getElementsByClassName('box')[i].style.height = boxSize + 'px';
    }
}

const gridSize = document.querySelector('#gridAmount');
gridSize.addEventListener('click', setGrid);
//box style -> size of grid divided by number of rows= box size