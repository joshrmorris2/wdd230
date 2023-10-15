document.getElementById("lastModified").innerHTML = new Date(document.lastModified);
document.getElementById("year").innerHTML = new Date().getFullYear();

/*Navigation menu*/
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/*Dark mode*/
const switchBox = document.querySelector('.switch');
const body = document.querySelector('body');

switchBox.addEventListener('click', () => {
    if (switchBox.checked = true) {
        body.style.background = '#000';
        body.style.color = '#F3EAF4';
    } if (switchBox.checked = false) {
        body.style.background = '#F3EAF4';
        body.style.color = '#000';
    }
});