const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits === 0) {
    visitsDisplay.textContent = `First time here!`;
} else {
    visitsDisplay.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
