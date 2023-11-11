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
document.addEventListener('DOMContentLoaded', () => {
    const switchBox = document.querySelector('.switch input[type="checkbox"]');
    const body = document.querySelector('body');

    switchBox.addEventListener('change', () => {
        if (switchBox.checked) {
            body.style.background = '#000';
            body.style.color = '#F3EAF4';
        } else {
            body.style.background = '#F3EAF4';
            body.style.color = '#000';
        }
    });
});