/* Mobile Toggle Button */
const menuBtn = document.querySelector(".toggle-mobile-text");
const mobileNav = document.querySelector(".mobile-wrapper");

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

/* Copyright Year */
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

/* Cart Functionality */

// 1. THE ADD TO CART LOGIC
function addToCart(button) {
    let card = button.closest(".arrival-card");
    let name = card.querySelector(".arrival-name").textContent;
    let priceText = card.querySelector(".arrival-price").textContent;
    let image = card.querySelector("img").src;

    // Clean price string to number
    let price = parseInt(priceText.replace(/[^0-9]/g, ""));

    let product = {
        name: name,
        price: price,
        image: image,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // NO ALERT HERE - just update the badge
    updateCartBadge();
}

// 2. THE BADGE UPDATE LOGIC
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    
    let cartContainer = document.querySelector(".home-cart-link"); 
    if (!cartContainer) return;

    let badge = cartContainer.querySelector(".js-cart-badge");
    
    if (!badge) {
        badge = document.createElement("span");
        badge.className = "js-cart-badge";
        
        // Inline styling as requested
        Object.assign(badge.style, {
            backgroundColor: "#ffa500", // Using your Orange palette
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            padding: "2px 6px",
            borderRadius: "50%",
            marginLeft: "8px",
            display: "inline-block"
        });
        
        cartContainer.appendChild(badge);
    }

    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
}

// Run on load to show existing items
window.onload = updateCartBadge;


/* Cart Display Logic */

// 1. INITIALIZE: Load cart items as soon as page opens
document.addEventListener('DOMContentLoaded', displayCart);

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items-container");
    let subtotalDisplay = document.getElementById("cart-subtotal");
    let totalDisplay = document.getElementById("cart-total");

    // Clear container first
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px;">
            <p>Your cart is empty!</p>
            <a href="products.html" style="color: var(--color-blue); font-weight:bold;">Go back to Shop</a>
        </div>`;
        updateTotals(0);
        return;
    }

    let grandTotal = 0;

    // 2. LOOP: Create HTML for each saved product
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>UGX ${item.price.toLocaleString()}</p>
                </div>
                <div class="cart-item-actions">
                    <input type="number" class="cart-qty-input" value="${item.quantity}" min="1" 
                            onchange="updateQuantity(${index}, this.value)">
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    updateTotals(grandTotal);
}

// 3. MATH: Update the Grand Total display
function updateTotals(total) {
    document.getElementById("cart-subtotal").textContent = "UGX " + total.toLocaleString();
    document.getElementById("cart-total").textContent = "UGX " + total.toLocaleString();
}

// 4. INTERACTIVITY: Handle Quantity Changes
window.updateQuantity = function(index, newQty) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (newQty < 1) newQty = 1;
    
    cart[index].quantity = parseInt(newQty);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Refresh the list and totals
}

// 5. INTERACTIVITY: Remove Items
window.removeItem = function(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1); // Delete that item from array
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Refresh
}

/* WhatsApp Integration */

function sendToWhatsApp() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let phoneNumber = "256726110100"; 
    let message = "*New Order from UniEssentials*%0A%0A";
    let grandTotal = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        message += `• ${item.quantity}x ${item.name} - UGX ${itemTotal.toLocaleString()}%0A`;
    });

    message += `%0A*Grand Total: UGX ${grandTotal.toLocaleString()}*%0A%0A_Please confirm my delivery to Nkumba University._`;

    // Generate the URL
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
}

/* Search Bar and Cards Filtering */

/**
 * Filters .arrival-card elements based on the text entered in #searchInput.
 * Uses a case-insensitive comparison and toggles display between "" and "none".
 */
function searchProduct() {
    // 1. Get the text from the search input and make it lowercase
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    // 2. Select all the arrival cards
    let cards = document.querySelectorAll(".arrival-card");

    cards.forEach(card => {
        // 3. Find the product name within this specific card
        let name = card.querySelector(".arrival-name").textContent.toLowerCase();

        // 4. Compare name with input
        if (name.includes(input)) {
            // If it matches, show the card (restores original grid layout)
            card.style.display = "";
        } else {
            // If no match, hide the card
            card.style.display = "none";
        }
    });
}

