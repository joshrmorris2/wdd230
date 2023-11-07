// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#lastvisit");

// processing
const today = Date.now();
const lastVisit = localStorage.getItem('lastTimeVisited');

let message = ;

todayElement.textContent = message;