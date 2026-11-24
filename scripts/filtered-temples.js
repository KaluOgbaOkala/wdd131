// ==========================================
// 1. HAMBURGER MENU
// ==========================================

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

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


// ==========================================
// 2. TEMPLE ARRAY
// ==========================================

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Additional African temples

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://news-za.churchofjesuschrist.org/media/orig/Doc-Barton-Joburg-Temple-pic-1-.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://news-za.churchofjesuschrist.org/media/orig/Doc-Barton-Joburg-Temple-pic-1-.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Umhlanga, South Africa",
        dedicated: "2020, February, 16",
        area: 19859,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8/full/1200%2C630/0/default"
    }
];


// ==========================================
// 3. SELECT THE TEMPLE CONTAINER
// ==========================================

const templesContainer = document.querySelector("#temples-container");


// ==========================================
// 4. DISPLAY TEMPLE CARDS
// ==========================================

function displayTemples(templeList) {

    templesContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("section");

        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>

            <p><strong>Location:</strong> ${temple.location}</p>

            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>

            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} Temple"
                loading="lazy"
                width="400"
                height="250"
            >
        `;

        templesContainer.appendChild(card);

    });
}


// ==========================================
// 5. DISPLAY ALL TEMPLES ON PAGE LOAD
// ==========================================

displayTemples(temples);


// ==========================================
// 6. NAVIGATION FILTERING
// ==========================================

const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.textContent.trim().toLowerCase();

        let filteredTemples = [];

        switch (filter) {

            case "home":
                filteredTemples = temples;
                break;

            case "old":
                filteredTemples = temples.filter((temple) => {
                    const year = Number(temple.dedicated.split(",")[0]);
                    return year < 1900;
                });
                break;

            case "new":
                filteredTemples = temples.filter((temple) => {
                    const year = Number(temple.dedicated.split(",")[0]);
                    return year > 2000;
                });
                break;

            case "large":
                filteredTemples = temples.filter((temple) => {
                    return temple.area > 90000;
                });
                break;

            case "small":
                filteredTemples = temples.filter((temple) => {
                    return temple.area < 10000;
                });
                break;

            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);

        // Close mobile navigation after selecting a filter
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");

    });

});


// ==========================================
// 7. FOOTER COPYRIGHT YEAR
// ==========================================

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// ==========================================
// 8. FOOTER LAST MODIFIED DATE
// ==========================================

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;