// Data for all products, categorized
const allProducts = {
    affordable: [
        { id: 'eccentric', name: 'Eccentric Grip', price: 639.00, description: 'Strengthen your forearms and grip with adjustable resistance.', images: ['eccentric1.jpg', 'eccemtric2.jpg', 'eccentric3.jpg'] },
        { id: 'ultra', name: 'Ultra Grip', price: 689.00, description: 'Improves strength', images: ['ultra1.jpg', 'ultra2.jpg', 'ultra3.jpg'] },
        { id: 'cone_60mm', name: '60mm Cone Grip', price: 589.00, description: 'Versatile 60mm cone grip for diverse resistance workouts.', images: ['cone1.jpg', 'cone2.jpg'] },
        { id: 'cone_70mm', name: '70mm Cone Grip', price: 639.00, description: 'Larger 70mm cone grip for advanced grip training and endurance.', images: ['cone1.jpg', 'cone2.jpg'] },
        { id: 'cupping_50mm', name: '50mm Cupping Grip', price: 589.00, description: 'Cylindrical 50mm cupping grip to train forearms and fingers.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'cupping_60mm', name: '60mm Cupping Grip', price: 639.00, description: 'Standard 60mm cupping grip for balanced forearm and finger development.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'cupping_70mm', name: '70mm Cupping Grip', price: 689.00, description: 'Larger 70mm cupping grip for enhanced forearm and finger strength.', images: ['50cupping1.jpg', '50cupping2.jpg', '50cupping3.jpg'] },
        { id: 'offset_60mm', name: '60mm Offset Grip', price: 589.00, description: '60mm offset grip designed for maximum tension resistance.', images: ['of1.jpg', 'of2.jpg'] },
        { id: 'offset_70mm', name: '70mm Offset Grip', price: 689.00, description: '70mm offset grip for advanced resistance training and grip strength.', images: ['of1.jpg', 'of2.jpg'] },
        { id: 'pns', name: 'Pronation and Supination Grip', price: 379.00, description: 'Lightweight and portable grip trainer for rotation exercises.', images: ['ps1.jpg', 'ps2.jpg', 'ps3.jpg'] },
        { id: 'ygrip', name: 'Y-Grip', price: 549.00, description: 'Dynamic grip trainer for improving grip strength and endurance.', images: ['y1.jpg', 'y2.jpg', 'y3.jpg'] },
        { id: 'antitoproll', name: 'Anti-Toproll', price: 629.00, description: 'Strengthens Pronation and Wrist control.', images: ['at1.jpg', 'at2.jpg'] },
        { id: 'wristwrench', name: 'Wrist Wrench', price: 739.00, description: 'Improves Cupping.', images: ['wr1.jpg', 'wr2.jpg', 'wr3.jpg'] },
    ],
    premium: [
        { id: 'standard_hand_grip', name: 'Standard Hand Grip', price: 789.00, description: 'Essential for building foundational crushing grip strength, vital for arm wrestling.', images: ['shg1.jpg', 'shg2.jpg','shg3.jpg'] },
        { id: 'lh_rh_combo_grip', name: 'Left & Right Hand Grip Combo', price: 1379.00, description: 'A set of grips designed for balanced training of both left and right-hand crushing and static grip strength.', images: ['cshg.jpg', 'shg1.jpg', 'shg2.jpg'] },
        { id: 'egg_shape_grip', name: 'Egg Shape Grip', price: 539.00, description: 'Ergonomically designed egg-shaped grip to target and improve pinch grip and finger strength.', images: ['esg1.jpg'] },
        { id: 'monster_grip', name: 'Monster Grip', price: 789.00, description: 'An extra-thick and heavy-duty grip designed for advanced arm wrestling training, focusing on extreme crushing power.', images: ['mg1.jpg', 'mg2.jpg', 'mg3.jpg']},
        { id: 'grip_cone_strap', name: 'Cone with Strap', price: 729.00, description: 'A versatile cone grip with an adjustable strap for targeted forearm and grip strength development.', images: ['cp1.jpg', 'cp2.jpg', 'cp3.jpg']},
        {
            id: 'dropz_grip',
            name: 'Dropz Grip',
            price: 789.00,
            description: 'An innovative grip trainer designed to enhance finger and overall grip strength, ideal for climbers and athletes.',
            images: ['drp3.JPG', 'drp2.JPG', 'drp1.JPG']
        }
    ], 
    combo: [
        {
            id: 'strength_trio_pack',
            name: 'Strength Trio Pack',
            price: 1499.00, // Placeholder
            originalPrice: 2199.00, // Placeholder
            description: 'Eccentric + Cone + Cupping', // Placeholder, you will list grips here
            images: ['st.jpg','eccentric1.jpg','cone1.jpg','50cupping1.jpg'] // Placeholder
        },
        {
            id: 'iron_hand_trio_pack',
            name: 'Iron Hand Trio Pack',
            price: 1799.00, // Placeholder
            originalPrice: 2500.00, // Placeholder
            description: 'Eccentric + Wrist-Wrench + Off-Set', // Placeholder, you will list grips here
            images: ['iron.jpg','eccentric1.jpg','wr1.jpg','of1.jpg'] // Placeholder
        },
        {
            id: 'ultimate_toproll',
            name: 'The Ultimate Toproll',
            price: 1999.00, // Placeholder
            originalPrice: 2150.00, // Placeholder
            description: 'Eccentric + Y-grip + Anti-Toproll + Cone', // Placeholder, you will list grips here
            images: ['top.jpg','eccentric1.jpg','cone1.jpg','at1.jpg','y1.jpg'] // Placeholder
        },
        {
            id: 'ultimate_hooker_pack',
            name: 'Ultimate Hooker Pack',
            price: 2299.00, // Placeholder
            originalPrice: 2999.00, // Placeholder
            description: 'Eccentric + Wrist-Wrench + Off-Set + Cone', // Placeholder, you will list grips here
            images: ['hooker.jpg','eccentric1.jpg','wr1.jpg','of1.jpg','cone1.jpg'] // Placeholder
        },
        { id: 'powerpack', name: 'NavX Power Pack', price: 2299.00, originalPrice: 2999, description: 'Unleash raw strength with the essential arsenal for every armwrestler. hello', images: ['pro.jpg','eccentric1.jpg','cone1.jpg','50cupping1.jpg','ultra1.jpg' ] },
        { id: 'propack', name: 'NavX Pro Pack', price: 3199.00, originalPrice: 4400, description: 'Engineered for competitors—built to elevate your grip game.', images: ['power.jpg', 'eccentric1.jpg','cone1.jpg','50cupping1.jpg','ultra1.jpg','of1.jpg','ps1.jpg'] },
        { id: 'ultimatepack', name: 'NavX Ultimate Pack', price: 3399.00, originalPrice: 4500, description: 'The complete domination kit—no compromises, Just Victory.', images: ['ultimate.jpg','eccentric1.jpg','cone1.jpg','ultra1.jpg','of1.jpg','wr1.jpg','y1.jpg'] },
    ],
    navxhandle: [ // New section for handles
        {
            id: 'affordable_navx_handle',
            name: 'Affordable NavX Handle',
            price: 0.00,
            description: 'An entry-level handle designed for beginners to build foundational grip strength.\n Load Capacity: 120kg',
            images: ['cm.png']
        },
        {
            id: 'pro_navx_handle',
            name: 'NavX Pro Handle',
            price: 699.00,
            description: 'Enhanced grip and durability for intermediate armwrestlers seeking to improve their technique.\n Load Capacity: 120kg',
            images:['pro1.jpg','pro3.jpg']
        },
        {
            id: 'power_navx_handle',
            name: 'NavX Power Handle',
            price: 899.00,
            description: 'Built for raw power and advanced training, offering superior feel and control.\n Load Capacity: 120kg',
            images: ['po1.jpg','po2.jpg']
        },
        {
            id: 'ultimate_navx_handle',
            name: 'NavX Ultimate Handle',
            price: 1289.00,
            description: 'The pinnacle of armwrestling handles, engineered for peak performance and elite athletes.\n Load Capacity: 120kg',
            images: ['ultimate1.jpg','ultimate2.jpg']
        },
    ]
};

// --- IMPORTANT: Initialize cart from localStorage IMMEDIATELY ---
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// --- Constants for delivery charges ---
const COD_DELIVERY_CHARGE = 150.00;
const PREPAID_DELIVERY_CHARGE = 100.00;

/**
 * Renders product cards for a given category into their respective grid.
 * This function will be called by the individual HTML pages.
 * @param {string} category - The category of products to render ('affordable', 'premium', 'combo', 'navxhandle').
 */
window.renderProducts = function(category) {
    const productsToRender = allProducts[category]; 
    // Targets the container with class "products-grid" which MUST be present on the product pages.
    const targetGrid = document.querySelector('.products-grid'); 

    if (!targetGrid) {
        console.error(`Target grid for category '${category}' not found. Ensure your HTML has a div with class 'products-grid'.`);
        return;
    }

    if (!productsToRender || productsToRender.length === 0) {
        targetGrid.innerHTML = `<p style="text-align:center; padding: 50px;">No products found in the ${category} section.</p>`;
        return;
    }

    targetGrid.innerHTML = ''; // Clear any existing products in the grid

    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productPrice = product.price.toFixed(2); 
        const sliderId = product.id; 
        let imageHtml = '';
        
        product.images.forEach((imgSrc, idx) => {
            imageHtml += `<img src="${imgSrc}" alt="${product.name} ${idx + 1}" class="${idx === 0 ? 'active' : ''}" onerror="this.onerror=null;this.src='https://placehold.co/400x375/CCCCCC/666666?text=Image+Missing';">`;
        });

        // Populate the product card HTML
        productElement.innerHTML = `
            <div class="product-slider" data-slider-id="${sliderId}">
                ${imageHtml}
                <div class="slider-controls">
                    <button class="prev-btn" aria-label="Previous Image">&lt;</button>
                    <button class="next-btn" aria-label="Next Image">&gt;</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price-info">
                    ${product.originalPrice ? `<span style="text-decoration: line-through; color: #888;">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                    <strong>₹${productPrice}</strong>
                </div>
                <button class="btn-add" onclick="addToCart('${product.name}', ${productPrice})">Add to Cart</button>
            </div>
        `;
        targetGrid.appendChild(productElement);
    });

    // Re-initialize image sliders for the newly added products
    initializeProductSliders(targetGrid);
}

/**
 * Initializes image slider functionality for products within a given container.
 */
function initializeProductSliders(container) {
    const productSliders = container.querySelectorAll('.product-slider');

    productSliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            if (images[index]) {
                images[index].classList.add('active');
            }
        }

        showImage(currentIndex);

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }
    });
}

/**
 * Shows a temporary notification popup.
 */
function showNotification(message) {
    const notificationPopup = document.getElementById('notification-popup');
    if (notificationPopup) {
        notificationPopup.textContent = message;
        notificationPopup.classList.add('show');

        setTimeout(() => {
            notificationPopup.classList.remove('show');
        }, 3000);
    }
}

/**
 * Adds an item to the shopping cart.
 */
window.addToCart = function(name, price) {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
        console.error("Invalid price passed to addToCart:", price);
        return;
    }
    cart.push({ name, price: numericPrice });
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${name} added to cart!`);
}

/**
 * Clears all items from the shopping cart.
 */
window.clearCart = function() {
    cart = [];
    localStorage.removeItem('shoppingCart');
    updateCartDisplay();
    showNotification("Cart cleared!");
}

/**
 * Updates the display of the shopping cart, including totals and WhatsApp link.
 */
window.updateCartDisplay = function() {
    const cartItemsList = document.getElementById('cartItems');
    const cartSubtotalElement = document.getElementById('cartSubtotal');
    const deliveryChargeDisplay = document.getElementById('deliveryChargeDisplay');
    const cartTotalElement = document.getElementById('cartTotal');
    const whatsappLink = document.getElementById('whatsappLink');
    const referralCodeInput = document.getElementById('referralInput');
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    // Basic element check
    if (!cartItemsList || !cartSubtotalElement || !deliveryChargeDisplay || !cartTotalElement || !whatsappLink || !referralCodeInput) {
         return; 
    }

    cartItemsList.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Your cart is empty.';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.color = '#B3B3B3';
        cartItemsList.appendChild(emptyMessage);
    } else {
        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} - ₹${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">&times;</button>
            `;
            cartItemsList.appendChild(listItem);
            subtotal += item.price;
        });

        cartItemsList.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const indexToRemove = parseInt(event.target.dataset.index);
                const removedItemName = cart[indexToRemove].name;
                cart.splice(indexToRemove, 1);
                localStorage.setItem('shoppingCart', JSON.stringify(cart));
                updateCartDisplay();
                showNotification(`${removedItemName} removed from cart.`);
            });
        });
    }

    // --- Dynamic Delivery Charge Logic ---
    let currentDeliveryCharge = COD_DELIVERY_CHARGE;
    let paymentMethodText = 'Cash on Delivery';

    if (selectedPaymentMethod && selectedPaymentMethod.value === 'prepaid') {
        currentDeliveryCharge = PREPAID_DELIVERY_CHARGE;
        paymentMethodText = 'Prepaid (Online Payment)';
    }

    let finalTotal = subtotal + currentDeliveryCharge;

    // Update the display elements
    cartSubtotalElement.textContent = subtotal.toFixed(2);
    deliveryChargeDisplay.textContent = currentDeliveryCharge.toFixed(2);
    cartTotalElement.textContent = `Total: ₹${finalTotal.toFixed(2)}`;

    // Prepare and update WhatsApp message
    const phoneNumber = "9235698833";
    let message = `Hello, I would like to order the following items from NavXgrips:\n`;

    if (cart.length === 0) {
        message = "Hello, I'm interested in products from NavXgrips.";
    } else {
        cart.forEach(item => {
            message += `- ${item.name} - ₹${item.price.toFixed(2)}\n`;
        });
        message += `Subtotal: ₹${subtotal.toFixed(2)}\n`;
        message += `Delivery Charge: ₹${currentDeliveryCharge.toFixed(2)}\n`;
        message += `Total: ₹${finalTotal.toFixed(2)}\n`;
        message += `Payment Method: ${paymentMethodText}`;
    }

    const referralCode = referralCodeInput.value;
    if (referralCode) {
        message += `\nReferral Code: ${referralCode}`;
    }
    const encodedMessage = encodeURIComponent(message);
    whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// --- NEW LOGIC: Determine and Render Products on Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the current file name (e.g., "affordable.html")
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);

    // 2. Map the file name to the product category key
    const categoryMap = {
        'affordable.html': 'affordable',
        'premium.html': 'premium',
        'combo.html': 'combo',
        'navxhandle.html': 'navxhandle'
    };

    const currentCategory = categoryMap[fileName];

    if (currentCategory) {
        // Only call renderProducts if we are on a known product category page
        window.renderProducts(currentCategory);
    }
    
    // --- Existing Event Listeners for Cart ---
    updateCartDisplay();

    // Attach event listeners to payment method radios
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', updateCartDisplay);
    });

    // Also update WhatsApp link when referral code changes
    const referralCodeInput = document.getElementById('referralInput');
    if (referralCodeInput) {
        referralCodeInput.addEventListener('input', updateCartDisplay);
    }

    // Event listener for the clear cart button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', window.clearCart);
    }
});