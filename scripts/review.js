// Get the existing review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count by one
reviewCount++;

// Save the updated count
localStorage.setItem("reviewCount", reviewCount);

// Find the counter element in the HTML
const counter = document.querySelector("#reviewCount");

// Display the updated count
if (counter) {
    counter.textContent = reviewCount;
} else {
    console.error("Review counter element was not found!");
}

console.log("Total reviews:", reviewCount);