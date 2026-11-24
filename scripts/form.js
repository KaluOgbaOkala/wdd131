// Product array provided by the assignment
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Select the product dropdown from HTML
const productSelect = document.querySelector("#productName");

// Loop through the products array
products.forEach((product) => {

    // Create a new option element
    const option = document.createElement("option");

    // Use the product name as the displayed text
    option.textContent = product.name;

    // Use the product ID as the option value
    option.value = product.id;

    // Add the option to the dropdown
    productSelect.appendChild(option);

});