const container = document.querySelector('#container');

for(i=0; i<16; i++) {
    for(j=0;j<16;j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.addEventListener('mouseenter', () => {div.style.backgroundColor = 'orange'} )
        container.appendChild(div);

    }
}