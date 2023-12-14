document.addEventListener('DOMContentLoaded', () => {
    const duration = document.querySelector('#duration');
    const dropChoice = document.querySelector('#dropChoice');
    const dropInfo = document.querySelector('#dropInfo');

    duration.addEventListener('change', () => {
        console.log(duration.value)
        if (parseInt(duration.value) > 1) {
            if (dropChoice.disabled) {
                dropChoice.removeAttribute('disabled');
                dropInfo.removeAttribute('disabled');
            }
        } else {
            if (!dropChoice.disabled) {
                dropChoice.setAttribute('disabled', 'disabled');
                dropInfo.setAttribute('disabled', 'disabled');
            }
        }
    });
});