// Funcionalidades principais do site

// Navegação suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Menu mobile
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileBtn = document.querySelector('.mobile-menu-btn i');
    
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        mobileBtn.className = 'fas fa-bars';
    } else {
        navMenu.style.display = 'block';
        mobileBtn.className = 'fas fa-times';
    }
}

// Busca de produtos
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.trim();
                if (searchTerm.length >= 2) {
                    searchProducts(searchTerm);
                    scrollToSection('produtos');
                } else if (searchTerm.length === 0) {
                    renderProducts();
                }
            }, 300);
        });
        
        // Busca ao pressionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                if (searchTerm.length >= 2) {
                    searchProducts(searchTerm);
                    scrollToSection('produtos');
                }
            }
        });
    }
    
    // Botão de busca
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length >= 2) {
                searchProducts(searchTerm);
                scrollToSection('produtos');
            }
        });
    }
}

// Configurar filtros de categoria
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Filtros de categoria na seção de categorias
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
            scrollToSection('produtos');
        });
    });
}

// Navegação ativa
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Configurar navegação
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Animações ao scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem animar
    const animatedElements = document.querySelectorAll('.product-card, .category-card, .footer-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Configurar newsletter
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input');
        const button = newsletterForm.querySelector('button');
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const email = input.value.trim();
            
            if (email && isValidEmail(email)) {
                showNotification('E-mail cadastrado com sucesso!', 'success');
                input.value = '';
            } else {
                showNotification('Por favor, insira um e-mail válido!', 'error');
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                button.click();
            }
        });
    }
}

// Validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Configurar botão de voltar ao topo
function setupBackToTop() {
    // Criar botão de voltar ao topo
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Mostrar/ocultar botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Ação do botão
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

// Configurar lazy loading para imagens
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Configurar responsividade do menu
function setupResponsiveMenu() {
    window.addEventListener('resize', function() {
        const navMenu = document.getElementById('navMenu');
        const mobileBtn = document.querySelector('.mobile-menu-btn i');
        
        if (window.innerWidth > 768) {
            navMenu.style.display = '';
            mobileBtn.className = 'fas fa-bars';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// Configurar efeitos de hover nos cards
function setupCardEffects() {
    const cards = document.querySelectorAll('.product-card, .category-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Configurar teclas de atalho
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // ESC para fechar modal/carrinho
        if (e.key === 'Escape') {
            closeModal();
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
        
        // Ctrl + K para focar na busca
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Configurar todas as funcionalidades
    setupSearch();
    setupFilters();
    setupNavigation();
    updateActiveNavigation();
    setupScrollAnimations();
    setupNewsletter();
    setupBackToTop();
    setupLazyLoading();
    setupResponsiveMenu();
    setupCardEffects();
    setupKeyboardShortcuts();
    
    // Adicionar classe de carregamento concluído
    document.body.classList.add('loaded');
    
    console.log('LojaOnline carregada com sucesso!');
});

// Configurar loading inicial
window.addEventListener('load', function() {
    // Remover qualquer loader se existir
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
    
    // Animar entrada dos elementos
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }
});

ubuntu@sandbox:~/loja-html/assets $ cd /home/ubuntu/loja-html && cd /home/ubuntu/loja-html && cat > generate_embedded.sh << 'EOF'
#!/bin/bash

# Lê os arquivos base64
TPeGJhsikrsx=$(cat assets/TPeGJhsikrsx.jpg.base64)
tPB180KHaF2W=$(cat assets/tPB180KHaF2W.jpg.base64)
DQbTIhqwicKy=$(cat assets/DQbTIhqwicKy.jpg.base64)
nycZmeOYNJPQ=$(cat assets/nycZmeOYNJPQ.jpg.base64)
wiR6B0ERrr3u=$(cat assets/wiR6B0ERrr3u.jpg.base64)
vRyFN54BJgVv=$(cat assets/vRyFN54BJgVv.jpg.base64)
qsmDhdOydpj2=$(cat assets/qsmDhdOydpj2.webp.base64)
oHqmVURU57P4=$(cat assets/oHqmVURU57P4.jpg.base64)

# Cria o novo arquivo products.js com imagens incorporadas
cat > js/products_embedded.js << JSEOF
// Dados dos produtos com imagens incorporadas
const products = [
    {
        id: 1,
        title: "Smartphone Premium",
        category: "eletronicos",
        price: 1299.99,
        image: "data:image/jpeg;base64,$TPeGJhsikrsx",
        description: "Smartphone de última geração com câmera profissional, processador avançado e design elegante. Ideal para quem busca tecnologia e qualidade.",
        features: ["Câmera 108MP", "Processador Octa-core", "128GB de armazenamento", "Tela AMOLED 6.7\""],
        inStock: true,
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        title: "Notebook Gamer",
        category: "eletronicos",
        price: 2499.99,
        image: "data:image/jpeg;base64,$tPB180KHaF2W",
        description: "Notebook gamer com placa de vídeo dedicada, ideal para jogos e trabalho pesado. Performance excepcional garantida.",
        features: ["Intel i7", "16GB RAM", "RTX 3060", "SSD 512GB"],
        inStock: true,
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        title: "Conjunto Casual Masculino",
        category: "roupas",
        price: 189.99,
        image: "data:image/jpeg;base64,$DQbTIhqwicKy",
        description: "Conjunto masculino casual composto por calça, camisa e acessórios. Perfeito para o dia a dia com muito estilo.",
        features: ["100% algodão", "Corte moderno", "Várias cores", "Tamanhos P ao GG"],
        inStock: true,
        rating: 4.5,
        reviews: 156
    },
    {
        id: 4,
        title: "Kit Acessórios Premium",
        category: "acessorios",
        price: 299.99,
        image: "data:image/jpeg;base64,$nycZmeOYNJPQ",
        description: "Kit completo de acessórios premium incluindo relógio, óculos, carteira e outros itens essenciais para o homem moderno.",
        features: ["Relógio automático", "Óculos UV400", "Carteira de couro", "Embalagem premium"],
        inStock: true,
        rating: 4.7,
        reviews: 203
    },
    {
        id: 5,
        title: "Tênis Esportivo",
        category: "roupas",
        price: 249.99,
        image: "data:image/jpeg;base64,$wiR6B0ERrr3u",
        description: "Tênis esportivo de alta performance com tecnologia de amortecimento avançada. Ideal para corridas e atividades físicas.",
        features: ["Amortecimento gel", "Material respirável", "Solado antiderrapante", "Design moderno"],
        inStock: true,
        rating: 4.6,
        reviews: 94
    },
    {
        id: 6,
        title: "Conjunto Masculino Elegante",
        category: "roupas",
        price: 399.99,
        image: "data:image/jpeg;base64,$vRyFN54BJgVv",
        description: "Conjunto masculino elegante com camisa, calça, cinto e acessórios. Perfeito para ocasiões especiais e trabalho.",
        features: ["Tecido premium", "Corte slim", "Acessórios inclusos", "Várias cores"],
        inStock: false,
        rating: 4.8,
        reviews: 78
    },
    {
        id: 7,
        title: "Kit Lifestyle Colorido",
        category: "acessorios",
        price: 159.99,
        image: "data:image/webp;base64,$qsmDhdOydpj2",
        description: "Kit lifestyle com acessórios coloridos e modernos. Inclui óculos, fones, relógio e outros itens para um visual único.",
        features: ["Design colorido", "Múltiplos acessórios", "Qualidade premium", "Estilo jovem"],
        inStock: true,
        rating: 4.4,
        reviews: 112
    },
    {
        id: 8,
        title: "Estúdio Fotográfico Portátil",
        category: "eletronicos",
        price: 899.99,
        image: "data:image/jpeg;base64,$oHqmVURU57P4",
        description: "Kit completo de estúdio fotográfico portátil para produtos e retratos profissionais. Inclui iluminação, fundos e tripés.",
        features: ["Iluminação LED", "Fundos profissionais", "Tripés ajustáveis", "Controle remoto"],
        inStock: true,
        rating: 4.9,
        reviews: 145
    },
    {
        id: 9,
        title: "Decoração para Casa",
        category: "casa",
        price: 199.99,
        image: "data:image/jpeg;base64,$TPeGJhsikrsx",
        description: "Kit de decoração para casa com vasos, quadros e objetos decorativos modernos. Transforme seu ambiente.",
        features: ["Design moderno", "Materiais duráveis", "Fácil instalação", "Múltiplas peças"],
        inStock: true,
        rating: 4.3,
        reviews: 67
    },
    {
        id: 10,
        title: "Utensílios de Cozinha",
        category: "casa",
        price: 149.99,
        image: "data:image/jpeg;base64,$tPB180KHaF2W",
        description: "Conjunto completo de utensílios de cozinha em aço inox. Qualidade profissional para sua casa.",
        features: ["Aço inoxidável", "Cabo ergonômico", "Fácil limpeza", "Kit completo"],
        inStock: true,
        rating: 4.5,
        reviews: 89
    },
    {
        id: 11,
        title: "Organizador de Casa",
        category: "casa",
        price: 79.99,
        image: "data:image/jpeg;base64,$DQbTIhqwicKy",
        description: "Sistema de organização para casa com caixas, divisórias e etiquetas. Mantenha tudo no lugar.",
        features: ["Múltiplos tamanhos", "Material resistente", "Etiquetas incluídas", "Empilhável"],
        inStock: true,
        rating: 4.2,
        reviews: 134
    },
    {
        id: 12,
        title: "Joia Feminina Elegante",
        category: "acessorios",
        price: 349.99,
        image: "data:image/jpeg;base64,$nycZmeOYNJPQ",
        description: "Conjunto de joias femininas elegantes com colar, brincos e pulseira. Banhado a ouro com pedras preciosas.",
        features: ["Banhado a ouro", "Pedras naturais", "Hipoalergênico", "Estojo incluso"],
        inStock: true,
        rating: 4.7,
        reviews: 98
    }
];

// Função para renderizar produtos
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = \`
            <img src="\${product.image}" alt="\${product.title}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">\${getCategoryName(product.category)}</div>
                <h3 class="product-title">\${product.title}</h3>
                <p class="product-description">\${product.description.substring(0, 100)}...</p>
                <div class="product-price">R$ \${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-actions">
                    <button class="btn-primary" onclick="addToCart(\${product.id})">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                    <button class="btn-secondary" onclick="showProductModal(\${product.id})">
                        <i class="fas fa-eye"></i> Ver Mais
                    </button>
                </div>
            </div>
        \`;
        
        productsGrid.appendChild(productCard);
    });
}

// Função para obter nome da categoria
function getCategoryName(category) {
    const categories = {
        'eletronicos': 'Eletrônicos',
        'roupas': 'Roupas',
        'acessorios': 'Acessórios',
        'casa': 'Casa'
    };
    return categories[category] || category;
}

// Função para filtrar produtos
function filterProducts(category) {
    const filteredProducts = category === 'todos' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
    
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(\`[data-category="\${category}"]\`).classList.add('active');
}

// Função para buscar produtos
function searchProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getCategoryName(product.category).toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    renderProducts(filteredProducts);
}

// Função para mostrar modal do produto
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = \`
        <img src="\${product.image}" alt="\${product.title}" class="modal-product-image">
        <h2 class="modal-product-title">\${product.title}</h2>
        <div class="modal-product-price">R$ \${product.price.toFixed(2).replace('.', ',')}</div>
        <p class="modal-product-description">\${product.description}</p>
        
        <div class="product-features">
            <h4>Características:</h4>
            <ul>
                \${product.features.map(feature => \`<li>\${feature}</li>\`).join('')}
            </ul>
        </div>
        
        <div class="product-rating">
            <div class="stars">
                \${generateStars(product.rating)}
            </div>
            <span>\${product.rating} (\${product.reviews} avaliações)</span>
        </div>
        
        <div class="modal-actions">
            <button class="btn-primary" onclick="addToCart(\${product.id}); closeModal();">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
            <button class="btn-secondary" onclick="closeModal()">
                <i class="fas fa-times"></i> Fechar
            </button>
        </div>
    \`;
    
    document.getElementById('productModal').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para gerar estrelas de avaliação
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Função para fechar modal
function closeModal() {
    document.getElementById('productModal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Inicializar produtos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});
JSEOF

echo "Arquivo products_embedded.js criado com sucesso!"
EOF

ubuntu@sandbox:~/loja-html $


ubuntu@sandbox:~/loja-html $ cd /home/ubuntu/loja-html && chmod +x generate_embedded.sh && ./generate_embedded.sh
Arquivo products_embedded.js criado com sucesso!
ubuntu@sandbox:~/loja-html $


