// FOOTER: Current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// FOOTER: Last modified date
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;


// WEATHER: Static weather values
const temperature = 5;
const windSpeed = 20;

// Display weather values
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;


// WIND CHILL CALCULATION
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Check if wind chill conditions are met
let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
    windChill = "N/A";
}

// Display wind chill
document.querySelector("#wind-chill").textContent = windChill;