// This script retrieves the selected product's details from localStorage and populates the product details page with the relevant information such as image, name, price, description, and features.
const product = JSON.parse(localStorage.getItem("selectedProduct"));

document.getElementById("d-image").src = product.image;
document.getElementById("d-name").innerText = product.name;
document.getElementById("d-price").innerText = product.price;
document.getElementById("d-desc").innerText = product.expandedDesc;

const list = document.getElementById("d-features");

product.features.forEach(f => {
    const li = document.createElement("li");
    li.innerText = f;
    list.appendChild(li);
});