document.addEventListener('DOMContentLoaded', () => {
    const switchBox = document.querySelector('.switch input[type="checkbox"]');
    const body = document.querySelector('body');

    switchBox.addEventListener('change', () => {
        if (switchBox.checked) {
            body.style.background = '#131515';
            body.style.color = '#e9eff7';
        } else {
            body.style.background = '#e9eff7';
            body.style.color = '#131515';
        }
    });
});