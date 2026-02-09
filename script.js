const menuItems = [
    {
        id: 1,
        category: 'wraps',
        name: "Classic Chicken Shawarma",
        desc: "Marinated chicken, garlic sauce, pickles, fries wrapped in toasted pita.",
        price: "8.50",
        image: "https://images.unsplash.com/photo-1626804475297-411db8e3a479?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        category: 'wraps',
        name: "Beef Shawarma Wrap",
        desc: "Slow-roasted beef strips, tahini sauce, parsley mix, grilled tomatoes.",
        price: "9.50",
        image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        category: 'platters',
        name: "Mix Grill Platter",
        desc: "Chicken and beef shawarma, hummus, tabbouleh salad, served with rice.",
        price: "15.99",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        category: 'platters',
        name: "Falafel Platter",
        desc: "6 crispy falafel balls, hummus, babaganoush, salad, and fresh pita bread.",
        price: "12.99",
        image: "https://images.unsplash.com/photo-1593001872095-7d5b3eb21338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        category: 'sides',
        name: "Original Hummus",
        desc: "Creamy chickpeas, tahini, olive oil, served with 2 pita breads.",
        price: "5.50",
        image: "https://images.unsplash.com/photo-1577906096429-f739769fdb53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        category: 'sides',
        name: "Spicy Potatoes",
        desc: "Cubed potatoes tossed in cilantro, garlic, lemon, and chili paste.",
        price: "4.99",
        image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

function createMenuCard(item) {
    return `
        <div class="col-md-6 col-lg-4" data-category="${item.category}">
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title fw-bold mb-0">${item.name}</h5>
                        <span class="price">$${item.price}</span>
                    </div>
                    <p class="card-text text-muted small mb-3">${item.desc}</p>
                    <button class="btn btn-outline-dark btn-sm rounded-pill px-3 fw-semibold w-100">Add to Order</button>
                </div>
            </div>
        </div>
    `;
}

function renderMenu(filter = 'wraps') {
    const container = document.getElementById('menu-grid');
    const items = menuItems.filter(i => filter === 'all' || i.category === filter);
    container.innerHTML = items.map(createMenuCard).join('');
}

document.querySelectorAll('#menu-tabs .nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('#menu-tabs .nav-link').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMenu(e.target.dataset.category);
    });
});

document.addEventListener('DOMContentLoaded', () => renderMenu('wraps'));
