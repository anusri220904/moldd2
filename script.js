// --- Moldd Product Data Configuration ---
const allProducts = {
    // 8 Products | Price 150-800
    affordable: [
        { id: 'h_aff_1', name: 'Slimline Wall Mount', price: 150.00, images: ['h1.jpg'] },
        { id: 'h_aff_2', name: 'Eco-Grip Desk Stand', price: 240.00, images: ['h2.jpg'] },
        { id: 'h_aff_3', name: 'Ventilated Pro Base', price: 330.00, images: ['h3.jpg'] },
        { id: 'h_aff_4', name: 'Soft-Touch Cradle', price: 420.00, images: ['h4.jpg'] },
        { id: 'h_aff_5', name: 'Jacket-Hook Combo', price: 510.00, images: ['h5.jpg'] },
        { id: 'h_aff_6', name: 'Angle-View Display', price: 600.00, images: ['h6.jpg'] },
        { id: 'h_aff_7', name: 'Heavy-Duty Pillar', price: 710.00, images: ['h7.jpg'] },
        { id: 'h_aff_8', name: 'Modular Desk Unit', price: 800.00, images: ['h8.jpg'] },
    ],
    // 5 Products | Polished Wood + Powder Coated Metal
    premium: [
        { id: 'p_st_1', name: 'Oak & Iron Heritage', price: 1200.00, images: ['p1.jpg'] },
        { id: 'p_st_2', name: 'Walnut Stealth', price: 1550.00, images: ['p2.jpg'] },
        { id: 'p_st_3', name: 'Cherrywood Apex', price: 1800.00, images: ['p3.jpg'] },
        { id: 'p_st_4', name: 'Mahogany Industrial', price: 2100.00, images: ['p4.jpg'] },
        { id: 'p_st_5', name: 'Teak Signature', price: 2500.00, images: ['p5.jpg'] },
    ], 
    // 5 Keyring Combos | Price 150-300
    combo: [
        { id: 'k_com_1', name: 'Minimalist Duo', price: 150.00, images: ['k1.jpg'] },
        { id: 'k_com_2', name: 'Urban Explorer Pack', price: 185.00, images: ['k2.jpg'] },
        { id: 'k_com_3', name: 'Tech Trio', price: 220.00, images: ['k3.jpg'] },
        { id: 'k_com_4', name: 'Vanguard Bundle', price: 260.00, images: ['k4.jpg'] },
        { id: 'k_com_5', name: 'Master Collector Set', price: 300.00, images: ['k5.jpg'] },
    ],
    // 5 Anime Decor | Price 150-500
    navxhandle: [ 
        { id: 'a_dec_1', name: 'Chibi Desk Pal', price: 150.00, images: ['a1.jpg'] },
        { id: 'a_dec_2', name: 'Katana Mini Stand', price: 240.00, images: ['a2.jpg'] },
        { id: 'a_dec_3', name: 'Acrylic Scene Plaque', price: 330.00, images: ['a3.jpg'] },
        { id: 'a_dec_4', name: 'Neon Silhouette Stand', price: 415.00, images: ['a4.jpg'] },
        { id: 'a_dec_5', name: 'Diorama Base Kit', price: 500.00, images: ['a5.jpg'] },
    ]
};

// --- Initialization ---
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
const COD_DELIVERY_CHARGE = 150.00;
const PREPAID_DELIVERY_CHARGE = 100.00;

// --- Rendering Logic ---
window.renderProducts = function(category) {
    const productsToRender = allProducts[category]; 
    const targetGrid = document.querySelector('.products-grid'); 

    if (!targetGrid) return;
    targetGrid.innerHTML = ''; 

    if (!productsToRender || productsToRender.length === 0) {
        targetGrid.innerHTML = `<p style="text-align:center; padding: 50px;">No products found.</p>`;
        return;
    }

    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        const productPrice = product.price.toFixed(2); 
        
        let imageHtml = '';
        product.images.forEach((imgSrc, idx) => {
            imageHtml += `<img src="${imgSrc}" alt="${product.name}" class="${idx === 0 ? 'active' : ''}" onerror="this.src='https://placehold.co/400x375?text=Image+Coming';">`;
        });

        productElement.innerHTML = `
            <div class="product-slider" data-slider-id="${product.id}">
                ${imageHtml}
                <div class="slider-controls">
                    <button class="prev-btn" aria-label="Previous">&lt;</button>
                    <button class="next-btn" aria-label="Next">&gt;</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price-info">
                    <strong>₹${productPrice}</strong>
                </div>
                <button class="btn-add" onclick="addToCart('${product.name}', ${productPrice})">Add to Cart</button>
            </div>
        `;
        targetGrid.appendChild(productElement);
    });

    initializeProductSliders(targetGrid);
};

function initializeProductSliders(container) {
    const productSliders = container.querySelectorAll('.product-slider');
    productSliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            if (images[index]) images[index].classList.add('active');
        }

        if (prevBtn) prevBtn.onclick = () => { currentIndex = (currentIndex - 1 + images.length) % images.length; showImage(currentIndex); };
        if (nextBtn) nextBtn.onclick = () => { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); };
    });
}

// --- Cart Functionality ---
window.addToCart = function(name, price) {
    cart.push({ name, price: parseFloat(price) });
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${name} added to cart!`);
};

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
};

window.clearCart = function() {
    cart = [];
    localStorage.removeItem('shoppingCart');
    updateCartDisplay();
};

window.updateCartDisplay = function() {
    const cartItemsList = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const whatsappLink = document.getElementById('whatsappLink');
    const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');

    if (!cartItemsList) return;

    cartItemsList.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - ₹${item.price.toFixed(2)} <button onclick="removeItem(${index})">&times;</button>`;
            cartItemsList.appendChild(li);
            subtotal += item.price;
        });
    }

    let deliveryCharge = (selectedPayment && selectedPayment.value === 'prepaid') ? PREPAID_DELIVERY_CHARGE : COD_DELIVERY_CHARGE;
    let finalTotal = subtotal + (cart.length > 0 ? deliveryCharge : 0);

    if (cartTotalElement) cartTotalElement.textContent = `Total: ₹${finalTotal.toFixed(2)}`;

    let msg = `New Order from Moldd:\n` + cart.map(i => `- ${i.name}`).join('\n') + `\nTotal: ₹${finalTotal.toFixed(2)}`;
    if (whatsappLink) whatsappLink.href = `https://wa.me/9235698833?text=${encodeURIComponent(msg)}`;
};

function showNotification(msg) {
    const popup = document.getElementById('notification-popup');
    if (popup) {
        popup.textContent = msg;
        popup.classList.add('show');
        setTimeout(() => popup.classList.remove('show'), 3000);
    }
}

// --- Page Load Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    const categoryMap = {
        'affordable.html': 'affordable',
        'premium.html': 'premium',
        'combo.html': 'combo',
        'navxhandle.html': 'navxhandle'
    };

    if (categoryMap[fileName]) window.renderProducts(categoryMap[fileName]);
    updateCartDisplay();

    document.querySelectorAll('input[name="paymentMethod"]').forEach(r => r.onchange = updateCartDisplay);
});
