// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Open and close the navigation menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");


    // Change hamburger symbol to X when menu is open
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }


});
// Display current year
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Display last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;