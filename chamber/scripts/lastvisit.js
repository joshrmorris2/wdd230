// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#lastvisit");

// processing
const today = Date.now();
const lastVisit = localStorage.getItem('lastTimeVisited');

function visitMessage() {
    const timesinceVisited = today - lastVisit;
    if (!lastVisit) {
        // First page visit
        todayElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        if (timesinceVisited < msToDays) {
            // Less than a day
            todayElement.textContent = "Back so soon! Awesome!";
        } else {
            // More than a day
            const pluralize = Math.round(timesinceVisited / msToDays) === 1 ? "day" : "days";
            todayElement.textContent = "You last visited " + (Math.round(timesinceVisited / msToDays)) + " ${pluralize} ago.";
        }
    }
    localStorage.setItem('lastTimeVisited', today);
};

visitMessage();
