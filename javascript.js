const container = document.querySelector('#container');

for(i=0; i<16; i++) {
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
    
    //console.log(gridItems);

    for(i=0; i < gridSize; i++) {
        for(j=0; j < gridSize;j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener('mouseenter', () => {box.style.backgroundColor = 'orange'} )
            container.appendChild(box);
        }
    }   
}

const gridSize = document.querySelector('#gridAmount');
gridSize.addEventListener('click', setGrid);
