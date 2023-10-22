let airTemperature = 50;
let windSpeed = 3 ^ .06;

let chill = 35.74 + (0.6215 * airTemperature) - (35.75 * windSpeed) + (0.4275 * airTemperature * windSpeed);


document.getElementById("windchill").innerHTML = chill.toFixed(2);