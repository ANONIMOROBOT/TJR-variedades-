// Dados dos produtos
const products = [
    {
        id: 1,
        title: "Smartphone Premium",
        category: "eletronicos",
        price: 1299.99,
        image: "assets/TPeGJhsikrsx.jpg",
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
        image: "assets/tPB180KHaF2W.jpg",
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
        image: "assets/DQbTIhqwicKy.jpg",
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
        image: "assets/nycZmeOYNJPQ.jpg",
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
        image: "assets/wiR6B0ERrr3u.jpg",
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
        image: "assets/vRyFN54BJgVv.jpg",
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
        image: "assets/qsmDhdOydpj2.webp",
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
        image: "assets/oHqmVURU57P4.jpg",
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
        image: "assets/TPeGJhsikrsx.jpg",
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
        image: "assets/tPB180KHaF2W.jpg",
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
        image: "assets/DQbTIhqwicKy.jpg",
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
        image: "assets/nycZmeOYNJPQ.jpg",
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
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-actions">
                    <button class="btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                    <button class="btn-secondary" onclick="showProductModal(${product.id})">
                        <i class="fas fa-eye"></i> Ver Mais
                    </button>
                </div>
            </div>
        `;
        
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
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
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
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="modal-product-image">
        <h2 class="modal-product-title">${product.title}</h2>
        <div class="modal-product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
        <p class="modal-product-description">${product.description}</p>
        
        <div class="product-features">
            <h4>Características:</h4>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="product-rating">
            <div class="stars">
                ${generateStars(product.rating)}
            </div>
            <span>${product.rating} (${product.reviews} avaliações)</span>
        </div>
        
        <div class="modal-actions">
            <button class="btn-primary" onclick="addToCart(${product.id}); closeModal();">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
            <button class="btn-secondary" onclick="closeModal()">
                <i class="fas fa-times"></i> Fechar
            </button>
        </div>
    `;
    
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

