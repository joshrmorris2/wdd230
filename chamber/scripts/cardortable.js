const box = document.querySelector('#carddefault')
const head = document.querySelector('head')
let style = document.createElement('link')

style.setAttribute('rel', 'stylesheet');
head.appendChild(style);

function updateStyle() {
    style.href = box.checked ? 'styles/table.css' : 'styles/card.css';
}

box.addEventListener('change', updateStyle);

updateStyle();