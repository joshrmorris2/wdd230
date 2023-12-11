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