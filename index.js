document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre
    const heroTitle = document.querySelector('.hero-title');
    const titleText = "Make Your Interior More Minimalistic & Modern";
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < titleText.length) {
            heroTitle.textContent += titleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
    
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('fa-times');
    });
    
    // Changement de header au scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Filtrage des produits
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Ici vous ajouteriez la logique de filtrage des produits
        });
    });
    
    // Ajout au panier
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Animation
            this.textContent = '✓';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = '+';
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
    
    // Recherche
    const searchBtn = document.querySelector('.search-button');
    
    searchBtn.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-input');
        alert(`Recherche pour: ${searchInput.value}`);
        // Ici vous ajouteriez la logique de recherche
    });
});