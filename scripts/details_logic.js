// This script defines a function `openDetails(id)` that takes a product ID as an argument. It finds the corresponding product from the `products` array, stores the selected product's details in localStorage, and then redirects the user to the product details page (details.html) where the stored product information can be accessed and displayed.
function openDetails(id) {
    const product = products.find(p => p.id === id);

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "details.html";
}