# LojaOnline - Site de Loja Virtual Completa

## Descrição
Site de loja online completo desenvolvido com HTML, CSS e JavaScript puros. O site apresenta um design moderno e responsivo com **bordas estilizadas em todas as imagens** conforme solicitado.

## Características Principais

### ✨ Design e Visual
- **Bordas estilizadas em todas as imagens** - Todas as imagens de produtos, categorias e carrinho possuem bordas coloridas
- Design responsivo para desktop, tablet e mobile
- Gradientes modernos e cores vibrantes
- Animações suaves e efeitos de hover
- Ícones Font Awesome para melhor experiência visual

### 🛍️ Funcionalidades de E-commerce
- **Catálogo de produtos** com 12 produtos em 4 categorias
- **Carrinho de compras** lateral com funcionalidades completas
- **Modal de detalhes** do produto com informações completas
- **Sistema de filtros** por categoria
- **Busca de produtos** em tempo real
- **Notificações** de ações do usuário

### 📱 Responsividade
- Layout adaptável para diferentes tamanhos de tela
- Menu mobile com hamburger
- Carrinho lateral que se adapta ao mobile
- Imagens otimizadas para diferentes dispositivos

### 🎨 Bordas Estilizadas (Conforme Solicitado)
- **Imagens de produtos**: Bordas azuis (#667eea) que mudam para dourado no hover
- **Imagens do carrinho**: Bordas azuis menores para melhor visualização
- **Imagens do modal**: Bordas azuis destacadas
- **Ícones de categoria**: Bordas douradas (#ffd700)
- **Cards de categoria**: Bordas que aparecem no hover

## Estrutura do Projeto

```
loja-html/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais com bordas
├── js/
│   ├── products.js     # Dados e renderização de produtos
│   ├── cart.js         # Funcionalidades do carrinho
│   └── main.js         # Funcionalidades gerais
├── assets/             # Imagens dos produtos
└── README.md           # Esta documentação
```

## Produtos Incluídos

### Eletrônicos
1. **Smartphone Premium** - R$ 1.299,99
2. **Notebook Gamer** - R$ 2.499,99
3. **Estúdio Fotográfico Portátil** - R$ 899,99

### Roupas
4. **Conjunto Casual Masculino** - R$ 189,99
5. **Tênis Esportivo** - R$ 249,99
6. **Conjunto Masculino Elegante** - R$ 399,99

### Acessórios
7. **Kit Acessórios Premium** - R$ 299,99
8. **Kit Lifestyle Colorido** - R$ 159,99
9. **Joia Feminina Elegante** - R$ 349,99

### Casa
10. **Decoração para Casa** - R$ 199,99
11. **Utensílios de Cozinha** - R$ 149,99
12. **Organizador de Casa** - R$ 79,99

## Como Usar

### Navegação
- Use o menu superior para navegar entre seções
- Clique nas categorias para filtrar produtos
- Use a barra de busca para encontrar produtos específicos

### Carrinho de Compras
- Clique em "Adicionar" para adicionar produtos ao carrinho
- Clique no ícone do carrinho para ver os itens
- Use os botões + e - para alterar quantidades
- Clique em "Finalizar Compra" para simular o checkout

### Detalhes do Produto
- Clique em "Ver Mais" para abrir o modal com detalhes completos
- Veja características, avaliações e descrição detalhada
- Adicione ao carrinho diretamente do modal

## Tecnologias Utilizadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com bordas personalizadas
- **JavaScript ES6** - Funcionalidades interativas
- **Font Awesome** - Ícones profissionais
- **LocalStorage** - Persistência do carrinho

## Recursos Especiais

### Bordas Personalizadas
Todas as imagens possuem bordas estilizadas conforme solicitado:
- Produtos: Bordas azuis que ficam douradas no hover
- Carrinho: Bordas azuis menores
- Modal: Bordas azuis destacadas
- Categorias: Bordas douradas nos ícones

### Animações
- Efeitos de hover nos cards
- Transições suaves
- Animações de entrada
- Notificações animadas

### Acessibilidade
- Navegação por teclado
- Atalhos (Ctrl+K para busca, ESC para fechar)
- Textos alternativos em imagens
- Contraste adequado

## Personalização

### Adicionar Novos Produtos
Edite o arquivo `js/products.js` e adicione novos objetos ao array `products`:

```javascript
{
    id: 13,
    title: "Novo Produto",
    category: "categoria",
    price: 99.99,
    image: "assets/nova-imagem.jpg",
    description: "Descrição do produto...",
    features: ["Característica 1", "Característica 2"],
    inStock: true,
    rating: 4.5,
    reviews: 50
}
```

### Modificar Cores das Bordas
No arquivo `css/style.css`, procure por:
- `.product-image` - Para bordas dos produtos
- `.cart-item-image` - Para bordas do carrinho
- `.modal-product-image` - Para bordas do modal
- `.category-icon` - Para bordas das categorias

### Adicionar Novas Categorias
1. Adicione a categoria no array `categories` em `js/products.js`
2. Adicione um botão de filtro no HTML
3. Crie um card de categoria na seção correspondente

## Compatibilidade
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers

## Autor
Desenvolvido com HTML, CSS e JavaScript puros para máxima compatibilidade e performance.

---

**Nota**: Este site foi desenvolvido especificamente com bordas estilizadas em todas as imagens conforme solicitado pelo usuário.



ao vivo

Pular para ao vivo
