const container = document.querySelector('#container');

for(i=0; i<16; i++) {
    for(j=0;j<16;j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.addEventListener('mouseenter', () => {div.style.backgroundColor = 'orange'} )
        container.appendChild(div);
    }
}

const setGrid = function() {
    let num = 0;
    num = prompt('How many rows and columns do you want? Pick from 1 to 64.');

   /* let gridItems = container.querySelectorAll('.box');
    gridItems.forEach(() => container.removeChild(div))

    for(i=0; i<num; i++) {
        for(j=0;j<num;j++) {
            div.setAttribute('class', 'box');
            div.addEventListener('mouseenter', () => {div.style.backgroundColor = 'orange'} )
            container.appendChild(div);
        }
    }   */
}

const gridSize = document.querySelector('#gridAmount');
gridSize.addEventListener('click', setGrid);
