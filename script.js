/* ============================================
   LISTA DE MERCADO PERUANA - Lógica
   ============================================ */

// Catálogo de productos típicos peruanos
const CATEGORIES = [
    {
        id: 'frutas',
        name: 'Frutas',
        emoji: '🍎',
        products: [
            { name: 'Manzana', emoji: '🍎', unit: 'unidad' },
            { name: 'Plátano', emoji: '🍌', unit: 'unidad' },
            { name: 'Naranja', emoji: '🍊', unit: 'unidad' },
            { name: 'Mandarina', emoji: '🍊', unit: 'unidad' },
            { name: 'Limón', emoji: '🍋', unit: 'unidad' },
            { name: 'Papaya', emoji: '🟠', unit: 'unidad' },
            { name: 'Piña', emoji: '🍍', unit: 'unidad' },
            { name: 'Sandía', emoji: '🍉', unit: 'unidad' },
            { name: 'Melón', emoji: '🍈', unit: 'unidad' },
            { name: 'Uva', emoji: '🍇', unit: 'unidad' },
            { name: 'Fresa', emoji: '🍓', unit: 'unidad' },
            { name: 'Pera', emoji: '🍐', unit: 'unidad' },
            { name: 'Durazno', emoji: '🍑', unit: 'unidad' },
            { name: 'Mango', emoji: '🥭', unit: 'unidad' },
            { name: 'Chirimoya', emoji: '🟢', unit: 'unidad' },
            { name: 'Lúcuma', emoji: '🟡', unit: 'unidad' },
            { name: 'Tuna', emoji: '🟣', unit: 'unidad' },
            { name: 'Granadilla', emoji: '🟠', unit: 'unidad' },
            { name: 'Maracuyá', emoji: '🟡', unit: 'unidad' },
            { name: 'Carambola', emoji: '⭐', unit: 'unidad' },
            { name: 'Coco', emoji: '🥥', unit: 'unidad' },
        ]
    },
    {
        id: 'verduras',
        name: 'Verduras y Hortalizas',
        emoji: '🥦',
        products: [
            { name: 'Papa', emoji: '🥔', unit: 'kg' },
            { name: 'Camote', emoji: '🍠', unit: 'kg' },
            { name: 'Yuca', emoji: '🥔', unit: 'kg' },
            { name: 'Oca', emoji: '🥔', unit: 'kg' },
            { name: 'Olluco', emoji: '🥔', unit: 'kg' },
            { name: 'Cebolla', emoji: '🧅', unit: 'kg' },
            { name: 'Cebolla china', emoji: '🧅', unit: 'atado' },
            { name: 'Ajo', emoji: '🧄', unit: 'kg' },
            { name: 'Tomate', emoji: '🍅', unit: 'kg' },
            { name: 'Zanahoria', emoji: '🥕', unit: 'kg' },
            { name: 'Betarraga', emoji: '🟣', unit: 'kg' },
            { name: 'Lechuga', emoji: '🥬', unit: 'unidad' },
            { name: 'Repollo', emoji: '🥬', unit: 'unidad' },
            { name: 'Col', emoji: '🥬', unit: 'unidad' },
            { name: 'Brócoli', emoji: '🥦', unit: 'unidad' },
            { name: 'Coliflor', emoji: '🥦', unit: 'unidad' },
            { name: 'Espinaca', emoji: '🌿', unit: 'atado' },
            { name: 'Acelga', emoji: '🌿', unit: 'atado' },
            { name: 'Pepino', emoji: '🥒', unit: 'unidad' },
            { name: 'Zapallo', emoji: '🎃', unit: 'kg' },
            { name: 'Calabaza', emoji: '🎃', unit: 'kg' },
            { name: 'Caigua', emoji: '🟢', unit: 'kg' },
            { name: 'Vainita', emoji: '🫛', unit: 'kg' },
            { name: 'Arveja', emoji: '🫛', unit: 'kg' },
            { name: 'Haba', emoji: '🫛', unit: 'kg' },
            { name: 'Pimiento', emoji: '🫑', unit: 'unidad' },
            { name: 'Ají amarillo', emoji: '🌶️', unit: 'kg' },
            { name: 'Ají panca', emoji: '🌶️', unit: 'kg' },
            { name: 'Rocoto', emoji: '🌶️', unit: 'kg' },
            { name: 'Perejil', emoji: '🌿', unit: 'atado' },
            { name: 'Culantro', emoji: '🌿', unit: 'atado' },
            { name: 'Huacatay', emoji: '🌿', unit: 'atado' },
        ]
    },
    {
        id: 'carnes',
        name: 'Carnes',
        emoji: '🥩',
        products: [
            { name: 'Pollo entero', emoji: '🍗', unit: 'kg' },
            { name: 'Pechuga de pollo', emoji: '🍗', unit: 'kg' },
            { name: 'Pierna de pollo', emoji: '🍗', unit: 'kg' },
            { name: 'Menudencia de pollo', emoji: '🍗', unit: 'kg' },
            { name: 'Pata de pollo', emoji: '🍗', unit: 'kg' },
            { name: 'Carne molida', emoji: '🥩', unit: 'kg' },
            { name: 'Carne de res', emoji: '🥩', unit: 'kg' },
            { name: 'Bisteck', emoji: '🥩', unit: 'kg' },
            { name: 'Lomo de res', emoji: '🥩', unit: 'kg' },
            { name: 'Costilla de res', emoji: '🍖', unit: 'kg' },
            { name: 'Churrasco', emoji: '🥩', unit: 'kg' },
            { name: 'Cerdo (chuleta)', emoji: '🥩', unit: 'kg' },
            { name: 'Cerdo (bisteck)', emoji: '🥩', unit: 'kg' },
            { name: 'Cañón de chancho', emoji: '🥩', unit: 'kg' },
            { name: 'Panceta', emoji: '🥓', unit: 'kg' },
            { name: 'Tocino', emoji: '🥓', unit: 'kg' },
            { name: 'Cordero', emoji: '🍖', unit: 'kg' },
            { name: 'Pavo', emoji: '🦃', unit: 'kg' },
            { name: 'Conejo', emoji: '🐰', unit: 'kg' },
            { name: 'Hígado', emoji: '🥩', unit: 'kg' },
            { name: 'Corazón', emoji: '❤️', unit: 'kg' },
            { name: 'Mondongo', emoji: '🥩', unit: 'kg' },
            { name: 'Pescado', emoji: '🐟', unit: 'kg' },
        ]
    },
    {
        id: 'lacteos',
        name: 'Lácteos y Huevos',
        emoji: '🥛',
        products: [
            { name: 'Leche Gloria', emoji: '🥛', unit: 'litro' },
            { name: 'Leche evaporada', emoji: '🥫', unit: 'lata' },
            { name: 'Leche fresca', emoji: '🥛', unit: 'litro' },
            { name: 'Yogurt Gloria', emoji: '🥛', unit: 'litro' },
            { name: 'Yogurt Laive', emoji: '🥛', unit: 'litro' },
            { name: 'Queso fresco', emoji: '🧀', unit: 'kg' },
            { name: 'Queso mantecoso', emoji: '🧀', unit: 'kg' },
            { name: 'Queso paria', emoji: '🧀', unit: 'kg' },
            { name: 'Mantequilla', emoji: '🧈', unit: 'unidad' },
            { name: 'Crema de leche', emoji: '🥛', unit: 'unidad' },
            { name: 'Huevos', emoji: '🥚', unit: 'unidad' },
            { name: 'Manjar blanco', emoji: '🥫', unit: 'unidad' },
        ]
    },
    {
        id: 'panaderia',
        name: 'Panadería y Pastas',
        emoji: '🍞',
        products: [
            { name: 'Pan francés', emoji: '🥖', unit: 'unidad' },
            { name: 'Pan de molde', emoji: '🍞', unit: 'unidad' },
            { name: 'Pan integral', emoji: '🍞', unit: 'unidad' },
            { name: 'Pan ciabatta', emoji: '🥖', unit: 'unidad' },
            { name: 'Paneton', emoji: '🎂', unit: 'unidad' },
            { name: 'Galletas Soda', emoji: '🍪', unit: 'paquete' },
            { name: 'Galletas animalitos', emoji: '🍪', unit: 'paquete' },
            { name: 'Tostadas', emoji: '🍞', unit: 'paquete' },
        ]
    },
    {
        id: 'abarrotes',
        name: 'Abarrotes',
        emoji: '🍚',
        products: [
            { name: 'Arroz', emoji: '🍚', unit: 'kg' },
            { name: 'Fideos', emoji: '🍝', unit: 'paquete' },
            { name: 'Fideos tallarín', emoji: '🍝', unit: 'paquete' },
            { name: 'Fideos spaguetti', emoji: '🍝', unit: 'paquete' },
            { name: 'Canelones', emoji: '🍝', unit: 'paquete' },
            { name: 'Lentejas', emoji: '🫘', unit: 'kg' },
            { name: 'Frijoles', emoji: '🫘', unit: 'kg' },
            { name: 'Pallares', emoji: '🫘', unit: 'kg' },
            { name: 'Garbanzos', emoji: '🫘', unit: 'kg' },
            { name: 'Quinua', emoji: '🌾', unit: 'kg' },
            { name: 'Kiwicha', emoji: '🌾', unit: 'kg' },
            { name: 'Chía', emoji: '🌱', unit: 'kg' },
            { name: 'Azúcar', emoji: '🍬', unit: 'kg' },
            { name: 'Sal', emoji: '🧂', unit: 'kg' },
            { name: 'Aceite vegetal', emoji: '🫒', unit: 'litro' },
            { name: 'Aceite de oliva', emoji: '🫒', unit: 'litro' },
            { name: 'Avena', emoji: '🌾', unit: 'kg' },
            { name: 'Harina', emoji: '🌾', unit: 'kg' },
            { name: 'Café', emoji: '☕', unit: 'paquete' },
            { name: 'Té', emoji: '🍵', unit: 'caja' },
            { name: 'Manzanilla', emoji: '🌼', unit: 'caja' },
            { name: 'Chocolate', emoji: '🍫', unit: 'barra' },
            { name: 'Milo', emoji: '🥤', unit: 'caja' },
            { name: 'Chocolatada', emoji: '🥤', unit: 'unidad' },
        ]
    },
    {
        id: 'conservas',
        name: 'Conservas y Enlatados',
        emoji: '🥫',
        products: [
            { name: 'Atún en lata', emoji: '🥫', unit: 'lata' },
            { name: 'Sardina en lata', emoji: '🥫', unit: 'lata' },
            { name: 'Champiñones', emoji: '🥫', unit: 'lata' },
            { name: 'Alcachofas', emoji: '🥫', unit: 'lata' },
            { name: 'Espárragos', emoji: '🥫', unit: 'lata' },
            { name: 'Choclo en lata', emoji: '🥫', unit: 'lata' },
            { name: 'Pimientos en lata', emoji: '🥫', unit: 'lata' },
            { name: 'Aceitunas', emoji: '🫒', unit: 'frasco' },
            { name: 'Pasta de tomate', emoji: '🍅', unit: 'unidad' },
            { name: 'Salsa de tomate', emoji: '🍅', unit: 'frasco' },
            { name: 'Ají en lata', emoji: '🌶️', unit: 'lata' },
        ]
    },
    {
        id: 'condimentos',
        name: 'Condimentos y Especias',
        emoji: '🧂',
        products: [
            { name: 'Comino', emoji: '🌶️', unit: 'sobre' },
            { name: 'Pimienta', emoji: '🌶️', unit: 'sobre' },
            { name: 'Orégano', emoji: '🌿', unit: 'sobre' },
            { name: 'Palillo', emoji: '🟡', unit: 'sobre' },
            { name: 'Canela', emoji: '🟤', unit: 'sobre' },
            { name: 'Clavo de olor', emoji: '🌰', unit: 'sobre' },
            { name: 'Vinagre', emoji: '🍶', unit: 'botella' },
            { name: 'Sillao', emoji: '🍶', unit: 'botella' },
            { name: 'Salsa inglesa', emoji: '🍶', unit: 'botella' },
            { name: 'Mostaza', emoji: '🟡', unit: 'frasco' },
            { name: 'Mayonesa', emoji: '⚪', unit: 'frasco' },
            { name: 'Ketchup', emoji: '🍅', unit: 'frasco' },
            { name: 'Ajinomoto', emoji: '⚪', unit: 'sobre' },
        ]
    },
    {
        id: 'bebidas',
        name: 'Bebidas',
        emoji: '🥤',
        products: [
            { name: 'Agua mineral', emoji: '💧', unit: 'botella' },
            { name: 'Gaseosa Coca Cola', emoji: '🥤', unit: 'botella' },
            { name: 'Gaseosa Inca Kola', emoji: '🥤', unit: 'botella' },
            { name: 'Gaseosa Pepsi', emoji: '🥤', unit: 'botella' },
            { name: 'Sprite', emoji: '🥤', unit: 'botella' },
            { name: 'Fanta', emoji: '🥤', unit: 'botella' },
            { name: 'Cerveza', emoji: '🍺', unit: 'unidad' },
            { name: 'Vino', emoji: '🍷', unit: 'botella' },
            { name: 'Pisco', emoji: '🍾', unit: 'botella' },
            { name: 'Chicha morada', emoji: '🟣', unit: 'litro' },
            { name: 'Jugo de naranja', emoji: '🧃', unit: 'litro' },
            { name: 'Bebida isotónica', emoji: '🥤', unit: 'botella' },
        ]
    },
    {
        id: 'limpieza',
        name: 'Limpieza del Hogar',
        emoji: '🧹',
        products: [
            { name: 'Detergente', emoji: '🧴', unit: 'bolsa' },
            { name: 'Lejía', emoji: '🧴', unit: 'botella' },
            { name: 'Lavavajillas', emoji: '🧽', unit: 'unidad' },
            { name: 'Suavizante', emoji: '🧴', unit: 'botella' },
            { name: 'Jabón de ropa', emoji: '🧼', unit: 'barra' },
            { name: 'Jabón de tocador', emoji: '🧼', unit: 'unidad' },
            { name: 'Shampoo', emoji: '🧴', unit: 'botella' },
            { name: 'Acondicionador', emoji: '🧴', unit: 'botella' },
            { name: 'Papel higiénico', emoji: '🧻', unit: 'paquete' },
            { name: 'Papel toalla', emoji: '🧻', unit: 'rollo' },
            { name: 'Servilletas', emoji: '🧻', unit: 'paquete' },
            { name: 'Bolsas de basura', emoji: '🗑️', unit: 'paquete' },
            { name: 'Esponja', emoji: '🧽', unit: 'unidad' },
            { name: 'Desinfectante', emoji: '🧴', unit: 'botella' },
            { name: 'Limpiavidrios', emoji: '🪟', unit: 'botella' },
        ]
    },
    {
        id: 'bano',
        name: 'Cuidado Personal',
        emoji: '🧴',
        products: [
            { name: 'Pasta dental', emoji: '🪥', unit: 'unidad' },
            { name: 'Cepillo de dientes', emoji: '🪥', unit: 'unidad' },
            { name: 'Desodorante', emoji: '🧴', unit: 'unidad' },
            { name: 'Crema facial', emoji: '🧴', unit: 'unidad' },
            { name: 'Crema corporal', emoji: '🧴', unit: 'unidad' },
            { name: 'Protector solar', emoji: '☀️', unit: 'unidad' },
            { name: 'Rastrillo', emoji: '🪒', unit: 'unidad' },
            { name: 'Espuma de afeitar', emoji: '🧴', unit: 'unidad' },
            { name: 'Colonia', emoji: '🧴', unit: 'unidad' },
            { name: 'Toallas higiénicas', emoji: '🩸', unit: 'paquete' },
        ]
    }
];

// ===== Estado de la app =====
const state = {
    list: [], // {id, name, emoji, unit, qty, categoryId, checked, note}
    notes: '',
    customProducts: {}, // productos personalizados por categoría
    templates: [], // {id, name, items: [{name, emoji, unit, qty, categoryId}], createdAt}
    lastList: null, // snapshot de la lista anterior para "Repetir última"
    collapsedCats: [] // ids de categorías colapsadas
};

const STORAGE_KEY = 'mercado-peruano-list';

// ===== Inicialización =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderCategories();
    renderSidebar();
    updateStats();
    bindEvents();
    fillCustomCategorySelect();
});

function bindEvents() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        searchClear.classList.toggle('visible', value.length > 0);
        filterCategories(value);
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        filterCategories('');
        searchInput.focus();
    });

    // Botones principales
    document.getElementById('clearAllBtn').addEventListener('click', clearAllList);
    document.getElementById('printBtn').addEventListener('click', printList);
    document.getElementById('whatsappBtn').addEventListener('click', shareByWhatsApp);
    document.getElementById('addCustomBtn').addEventListener('click', openCustomModal);

    // Modal
    document.getElementById('cancelCustom').addEventListener('click', closeCustomModal);
    document.getElementById('saveCustom').addEventListener('click', saveCustomProduct);
    document.getElementById('customModal').addEventListener('click', (e) => {
        if (e.target.id === 'customModal') closeCustomModal();
    });

    // Modal de notas
    document.getElementById('cancelNoteBtn').addEventListener('click', closeNoteModal);
    document.getElementById('saveNoteBtn').addEventListener('click', saveNote);
    document.getElementById('removeNoteBtn').addEventListener('click', removeNote);
    document.getElementById('noteModal').addEventListener('click', (e) => {
        if (e.target.id === 'noteModal') closeNoteModal();
    });
    document.getElementById('noteText').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveNote();
    });

    // Templates
    document.getElementById('saveAsTemplateBtn').addEventListener('click', openTemplateModal);
    document.getElementById('cancelTemplateBtn').addEventListener('click', closeTemplateModal);
    document.getElementById('saveTemplateBtn').addEventListener('click', saveTemplate);
    document.getElementById('templateModal').addEventListener('click', (e) => {
        if (e.target.id === 'templateModal') closeTemplateModal();
    });
    document.getElementById('openTemplatesBtn').addEventListener('click', openLoadTemplateModal);
    document.getElementById('closeLoadTemplateBtn').addEventListener('click', closeLoadTemplateModal);
    document.getElementById('loadTemplateModal').addEventListener('click', (e) => {
        if (e.target.id === 'loadTemplateModal') closeLoadTemplateModal();
    });
    document.getElementById('templateName').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveTemplate();
    });

    // Repetir última lista
    document.getElementById('repeatLastBtn').addEventListener('click', repeatLastList);

    // Limpiar items marcados
    document.getElementById('clearCheckedBtn').addEventListener('click', clearCheckedItems);

    // Notas
    document.getElementById('notesInput').addEventListener('input', (e) => {
        state.notes = e.target.value;
        saveState();
    });

    // Tecla Escape cierra el modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCustomModal();
    });
}

// ===== Renderizado de categorías =====
function renderCategories(filter = '') {
    const container = document.getElementById('categoriesContainer');
    const noResults = document.getElementById('noResults');
    container.innerHTML = '';

    let totalShown = 0;

    CATEGORIES.forEach(cat => {
        // Combinar productos del catálogo con personalizados
        const customProds = state.customProducts[cat.id] || [];
        const allProducts = [...cat.products, ...customProds];

        // Filtrar
        const filtered = filter
            ? allProducts.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
            : allProducts;

        if (filtered.length === 0) return;

        totalShown += filtered.length;

        const section = document.createElement('div');
        section.className = 'category';
        section.dataset.categoryId = cat.id;

        section.innerHTML = `
            <div class="category-header" data-toggle="${cat.id}">
                <span class="category-emoji">${cat.emoji}</span>
                <h3 class="category-title">${cat.name}</h3>
                <span class="category-count">${filtered.length}</span>
                <span class="category-chevron">▼</span>
            </div>
            <div class="products-grid"></div>
        `;

        // Si estaba colapsada, restaurar
        if (state.collapsedCats && state.collapsedCats.includes(cat.id)) {
            section.classList.add('collapsed');
        }

        // Toggle al hacer click en el header
        section.querySelector('.category-header').addEventListener('click', () => {
            section.classList.toggle('collapsed');
            const collapsed = document.querySelectorAll('.category.collapsed');
            state.collapsedCats = Array.from(collapsed).map(c => c.dataset.categoryId);
            saveState();
        });

        const grid = section.querySelector('.products-grid');
        filtered.forEach(product => {
            const card = createProductCard(product, cat.id);
            grid.appendChild(card);
        });

        container.appendChild(section);
    });

    noResults.classList.toggle('hidden', totalShown > 0);
    updateStats();
}

function createProductCard(product, categoryId) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id || `${categoryId}-${product.name}`;
    card.dataset.categoryId = categoryId;

    const inList = state.list.find(item =>
        item.name === product.name && item.categoryId === categoryId
    );
    if (inList) card.classList.add('in-list');

    const isCustom = !!product.id;
    const removeBtn = isCustom
        ? `<button class="product-remove" data-product-id="${product.id}" title="Eliminar producto personalizado">✕</button>`
        : '';

    card.innerHTML = `
        <span class="product-emoji">${product.emoji}</span>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-unit">${product.unit}</div>
        </div>
        <span class="product-qty">${inList ? inList.qty : ''}</span>
        ${removeBtn}
    `;

    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-remove')) {
            e.stopPropagation();
            removeCustomProduct(product.id);
            return;
        }
        addToList(product, categoryId);
    });

    return card;
}

function filterCategories(query) {
    renderCategories(query);
}

// ===== Gestión de la lista =====
function addToList(product, categoryId) {
    const existing = state.list.find(item =>
        item.name === product.name && item.categoryId === categoryId
    );

    if (existing) {
        existing.qty += 1;
        showToast(`+1 ${product.name}`, 'success');
    } else {
        state.list.push({
            id: product.id || `${categoryId}-${product.name}`,
            name: product.name,
            emoji: product.emoji,
            unit: product.unit,
            qty: 1,
            categoryId: categoryId,
            checked: false,
            note: ''
        });
        showToast(`✓ ${product.name} agregado`, 'success');
    }

    saveState();
    updateProductCardQty(product, categoryId);
    renderSidebar();
    updateStats();
}

function updateProductCardQty(product, categoryId) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (card.dataset.categoryId === categoryId) {
            const name = card.querySelector('.product-name').textContent;
            if (name === product.name) {
                const item = state.list.find(i =>
                    i.name === product.name && i.categoryId === categoryId
                );
                card.classList.toggle('in-list', !!item);
                card.querySelector('.product-qty').textContent = item ? item.qty : '';
            }
        }
    });
}

function changeQty(productId, delta) {
    const item = state.list.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromList(productId);
        return;
    }

    saveState();
    renderSidebar();
    updateProductCardQty(item, item.categoryId);
    updateStats();
}

function removeFromList(productId) {
    const item = state.list.find(i => i.id === productId);
    state.list = state.list.filter(i => i.id !== productId);
    if (item) showToast(`🗑️ ${item.name} eliminado`, 'error');
    saveState();
    renderSidebar();
    if (item) updateProductCardQty(item, item.categoryId);
    updateStats();
}

function clearAllList() {
    if (state.list.length === 0) return;
    if (!confirm('¿Vaciar toda la lista?')) return;
    snapshotLastList();
    state.list = [];
    saveState();
    renderSidebar();
    renderCategories(document.getElementById('searchInput').value);
    showToast('🧺 Lista vaciada', 'success');
    updateStats();
}

function renderSidebar() {
    const listEl = document.getElementById('sidebarList');
    const countEl = document.getElementById('listCount');
    const clearCheckedBtn = document.getElementById('clearCheckedBtn');
    const checkedCountEl = document.getElementById('checkedCount');

    const pendingCount = state.list.filter(i => !i.checked).length;
    const checkedCount = state.list.filter(i => i.checked).length;

    countEl.textContent = `${pendingCount} ${pendingCount === 1 ? 'producto' : 'productos'}`;

    if (clearCheckedBtn) {
        clearCheckedBtn.classList.toggle('hidden', checkedCount === 0);
        if (checkedCountEl) checkedCountEl.textContent = checkedCount;
    }

    if (state.list.length === 0) {
        listEl.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🧺</span>
                <p>Tu lista está vacía</p>
                <p class="empty-hint">Agrega productos desde la izquierda</p>
            </div>
        `;
        return;
    }

    // Agrupar por categoría
    const grouped = {};
    state.list.forEach(item => {
        if (!grouped[item.categoryId]) grouped[item.categoryId] = [];
        grouped[item.categoryId].push(item);
    });

    let html = '';
    Object.keys(grouped).forEach(catId => {
        const cat = CATEGORIES.find(c => c.id === catId);
        if (!cat) return;
        html += `<div class="list-group-title" style="font-size:0.75rem;color:var(--color-text-light);margin:0.5rem 0 0.3rem;font-weight:600;">${cat.emoji} ${cat.name}</div>`;
        grouped[catId].forEach(item => {
            const checkedClass = item.checked ? 'checked' : '';
            const noteClass = item.note ? 'has-note' : '';
            const noteBtnClass = item.note ? 'has-note' : '';
            const notePreview = item.note ? `<span class="list-item-note-preview">📝 ${escapeHtml(item.note)}</span>` : '';
            html += `
                <div class="list-item ${checkedClass} ${noteClass}" data-id="${item.id}">
                    <div class="list-item-checkbox" onclick="toggleChecked('${item.id}')" title="Marcar como comprado">${item.checked ? '✓' : ''}</div>
                    <span class="list-item-emoji">${item.emoji}</span>
                    <div class="list-item-name-wrap" style="flex:1; min-width:0;">
                        <span class="list-item-name">${item.name}</span>
                        ${notePreview}
                    </div>
                    <button class="list-item-note-btn ${noteBtnClass}" onclick="openNoteModal('${item.id}')" title="${item.note ? 'Editar nota' : 'Agregar nota'}">📝</button>
                    <div class="list-item-controls">
                        <button class="qty-btn" onclick="changeQty('${item.id}', -1)" title="Quitar uno">−</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty('${item.id}', 1)" title="Agregar uno">+</button>
                        <button class="list-item-remove" onclick="removeFromList('${item.id}')" title="Eliminar">✕</button>
                    </div>
                </div>
            `;
        });
    });

    listEl.innerHTML = html;
}

function toggleChecked(productId) {
    const item = state.list.find(i => i.id === productId);
    if (!item) return;
    item.checked = !item.checked;
    saveState();
    renderSidebar();
}

function clearCheckedItems() {
    const checkedCount = state.list.filter(i => i.checked).length;
    if (checkedCount === 0) return;
    state.list = state.list.filter(i => !i.checked);
    saveState();
    renderSidebar();
    updateStats();
    showToast(`✅ ${checkedCount} ${checkedCount === 1 ? 'producto' : 'productos'} removidos`, 'success');
}

function updateStats() {
    const totalItems = state.list.reduce((sum, item) => sum + item.qty, 0);
    const totalCats = new Set(state.list.map(i => i.categoryId)).size;
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalCategories').textContent = totalCats;
}

// ===== Notas por producto =====
let currentNoteId = null;

function openNoteModal(productId) {
    const item = state.list.find(i => i.id === productId);
    if (!item) return;
    currentNoteId = productId;
    document.getElementById('noteModalTitle').textContent = `📝 Nota para ${item.name}`;
    document.getElementById('noteText').value = item.note || '';
    document.getElementById('noteModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('noteText').focus(), 100);
}

function closeNoteModal() {
    document.getElementById('noteModal').classList.add('hidden');
    currentNoteId = null;
    document.getElementById('noteText').value = '';
}

function saveNote() {
    if (!currentNoteId) return;
    const item = state.list.find(i => i.id === currentNoteId);
    if (!item) return;
    const text = document.getElementById('noteText').value.trim();
    item.note = text;
    saveState();
    renderSidebar();
    closeNoteModal();
    showToast(text ? `📝 Nota guardada` : '📝 Nota eliminada', 'success');
}

function removeNote() {
    if (!currentNoteId) return;
    const item = state.list.find(i => i.id === currentNoteId);
    if (item) item.note = '';
    saveState();
    renderSidebar();
    closeNoteModal();
}

// ===== Productos personalizados =====
function openCustomModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('hidden');
    setTimeout(() => document.getElementById('customName').focus(), 100);
}

function closeCustomModal() {
    document.getElementById('customModal').classList.add('hidden');
    document.getElementById('customName').value = '';
    document.getElementById('customUnit').value = '';
}

function fillCustomCategorySelect() {
    const select = document.getElementById('customCategory');
    select.innerHTML = CATEGORIES.map(c =>
        `<option value="${c.id}">${c.emoji} ${c.name}</option>`
    ).join('');
}

function saveCustomProduct() {
    const name = document.getElementById('customName').value.trim();
    const categoryId = document.getElementById('customCategory').value;
    const unit = document.getElementById('customUnit').value.trim() || 'unidad';

    if (!name) {
        showToast('⚠️ Ingresa un nombre', 'error');
        return;
    }

    const cat = CATEGORIES.find(c => c.id === categoryId);
    const product = {
        id: 'custom-' + Date.now(),
        name,
        emoji: cat.emoji,
        unit
    };

    if (!state.customProducts[categoryId]) state.customProducts[categoryId] = [];
    state.customProducts[categoryId].push(product);

    // Agregarlo también a la lista
    addToList(product, categoryId);

    saveState();
    renderCategories(document.getElementById('searchInput').value);
    closeCustomModal();
    showToast(`✓ ${name} agregado`, 'success');
}

function removeCustomProduct(productId) {
    if (!confirm('¿Eliminar este producto personalizado?')) return;
    Object.keys(state.customProducts).forEach(catId => {
        state.customProducts[catId] = state.customProducts[catId].filter(p => p.id !== productId);
    });
    // Quitar también de la lista si está
    state.list = state.list.filter(item => item.id !== productId);
    saveState();
    renderCategories(document.getElementById('searchInput').value);
    renderSidebar();
    updateStats();
    showToast('🗑️ Producto personalizado eliminado', 'success');
}

// ===== Plantillas guardadas =====
function openTemplateModal() {
    if (state.list.length === 0) {
        showToast('⚠️ La lista está vacía, agrega productos primero', 'error');
        return;
    }
    document.getElementById('templateModal').classList.remove('hidden');
    document.getElementById('templateName').value = '';
    setTimeout(() => document.getElementById('templateName').focus(), 100);
}

function closeTemplateModal() {
    document.getElementById('templateModal').classList.add('hidden');
    document.getElementById('templateName').value = '';
}

function saveTemplate() {
    const name = document.getElementById('templateName').value.trim();
    if (!name) {
        showToast('⚠️ Ingresa un nombre para la plantilla', 'error');
        return;
    }

    // Guardar snapshot de items con sus contenidos (sin checked/note)
    const items = state.list.map(item => ({
        name: item.name,
        emoji: item.emoji,
        unit: item.unit,
        qty: item.qty,
        categoryId: item.categoryId
    }));

    const template = {
        id: 'tpl-' + Date.now(),
        name,
        items,
        createdAt: new Date().toISOString()
    };

    state.templates.push(template);
    saveState();
    closeTemplateModal();
    showToast(`💾 Plantilla "${name}" guardada (${items.length} productos)`, 'success');
}

function openLoadTemplateModal() {
    renderTemplatesList();
    document.getElementById('loadTemplateModal').classList.remove('hidden');
}

function closeLoadTemplateModal() {
    document.getElementById('loadTemplateModal').classList.add('hidden');
}

function renderTemplatesList() {
    const container = document.getElementById('templatesList');
    if (state.templates.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = state.templates
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(tpl => {
            const date = new Date(tpl.createdAt).toLocaleDateString('es-PE', {
                day: '2-digit', month: 'short', year: 'numeric'
            });
            const catCount = new Set(tpl.items.map(i => i.categoryId)).size;
            return `
                <div class="template-item" data-id="${tpl.id}">
                    <div class="template-item-info">
                        <div class="template-item-name">📋 ${escapeHtml(tpl.name)}</div>
                        <div class="template-item-meta">${tpl.items.length} productos · ${catCount} categorías · ${date}</div>
                    </div>
                    <div class="template-item-actions">
                        <button class="template-btn load" onclick="loadTemplate('${tpl.id}')">Cargar</button>
                        <button class="template-btn delete" onclick="deleteTemplate('${tpl.id}')">Eliminar</button>
                    </div>
                </div>
            `;
        }).join('');
}

function loadTemplate(templateId) {
    const tpl = state.templates.find(t => t.id === templateId);
    if (!tpl) return;

    if (state.list.length > 0 && !confirm('¿Cargar esta plantilla reemplazará tu lista actual. Continuar?')) {
        return;
    }

    // Snapshot de la lista actual antes de reemplazarla (para "Repetir última")
    snapshotLastList();

    state.list = tpl.items.map(item => ({
        id: `${item.categoryId}-${item.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name: item.name,
        emoji: item.emoji,
        unit: item.unit,
        qty: item.qty,
        categoryId: item.categoryId,
        checked: false,
        note: ''
    }));

    saveState();
    renderSidebar();
    renderCategories(document.getElementById('searchInput').value);
    updateStats();
    closeLoadTemplateModal();
    showToast(`✅ Plantilla "${tpl.name}" cargada`, 'success');
}

function deleteTemplate(templateId) {
    const tpl = state.templates.find(t => t.id === templateId);
    if (!tpl) return;
    if (!confirm(`¿Eliminar la plantilla "${tpl.name}"?`)) return;
    state.templates = state.templates.filter(t => t.id !== templateId);
    saveState();
    renderTemplatesList();
    showToast(`🗑️ Plantilla "${tpl.name}" eliminada`, 'success');
}

// ===== Repetir última lista =====
function snapshotLastList() {
    if (state.list.length === 0) return;
    state.lastList = state.list.map(item => ({
        name: item.name,
        emoji: item.emoji,
        unit: item.unit,
        qty: item.qty,
        categoryId: item.categoryId
    }));
    saveState();
}

function repeatLastList() {
    if (!state.lastList || state.lastList.length === 0) {
        showToast('⚠️ No hay una lista previa para repetir', 'error');
        return;
    }

    if (state.list.length > 0 && !confirm('¿Reemplazar la lista actual con la anterior?')) {
        return;
    }

    // Antes de sobreescribir, guardar la actual como nuevo "lastList"
    snapshotLastList();

    state.list = state.lastList.map(item => ({
        id: `${item.categoryId}-${item.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name: item.name,
        emoji: item.emoji,
        unit: item.unit,
        qty: item.qty,
        categoryId: item.categoryId,
        checked: false,
        note: ''
    }));

    saveState();
    renderSidebar();
    renderCategories(document.getElementById('searchInput').value);
    updateStats();
    showToast(`🔁 Lista repetida (${state.list.length} productos)`, 'success');
}

// ===== Impresión =====
function printList() {
    if (state.list.length === 0) {
        showToast('⚠️ La lista está vacía', 'error');
        return;
    }

    // Construir vista de impresión
    const printCategories = document.getElementById('printCategories');
    const printDate = document.getElementById('printDate');
    const printNotesSection = document.getElementById('printNotesSection');

    const now = new Date();
    const dateStr = now.toLocaleDateString('es-PE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    printDate.textContent = `📅 ${dateStr} — ⏰ ${now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}`;

    // Agrupar por categoría
    const grouped = {};
    state.list.forEach(item => {
        if (!grouped[item.categoryId]) grouped[item.categoryId] = [];
        grouped[item.categoryId].push(item);
    });

    let html = '';
    Object.keys(grouped).forEach(catId => {
        const cat = CATEGORIES.find(c => c.id === catId);
        if (!cat) return;
        html += `<div class="print-category">`;
        html += `<h2 class="print-category-title"><span>${cat.emoji}</span> ${cat.name}</h2>`;
        grouped[catId].forEach(item => {
            const noteHtml = item.note
                ? `<div class="print-item-note">📝 ${escapeHtml(item.note)}</div>`
                : '';
            html += `
                <div class="print-item ${item.checked ? 'print-item-checked' : ''}">
                    <div class="print-checkbox${item.checked ? ' print-checkbox-checked' : ''}">${item.checked ? '✓' : ''}</div>
                    <div class="print-item-info">
                        <span class="print-item-name">${item.name}</span>
                        ${noteHtml}
                    </div>
                    <span class="print-item-unit">${item.unit}</span>
                    <span class="print-item-qty">${item.qty}</span>
                </div>
            `;
        });
        html += `</div>`;
    });

    printCategories.innerHTML = html;

    if (state.notes.trim()) {
        printNotesSection.innerHTML = `
            <h3>📝 Notas</h3>
            <p>${escapeHtml(state.notes)}</p>
        `;
        printNotesSection.style.display = 'block';
    } else {
        printNotesSection.style.display = 'none';
    }

    // Esperar un tick para que el DOM actualice
    setTimeout(() => {
        window.print();
    }, 100);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Compartir por WhatsApp =====
function shareByWhatsApp() {
    if (state.list.length === 0) {
        showToast('⚠️ La lista está vacía', 'error');
        return;
    }

    const pendingItems = state.list.filter(i => !i.checked);

    // Si todo está marcado, avisar y permitir compartir de todos modos
    if (pendingItems.length === 0) {
        if (!confirm('Todos los productos están marcados como comprados. ¿Enviar la lista de todas formas?')) {
            return;
        }
    }

    // Agrupar por categoría
    const grouped = {};
    state.list.forEach(item => {
        if (!grouped[item.categoryId]) grouped[item.categoryId] = [];
        grouped[item.categoryId].push(item);
    });

    // Construir el mensaje
    const lines = [];
    lines.push('🛒 *MI LISTA DE MERCADO* 🛒');
    lines.push('─────────────────────');

    const now = new Date();
    const dateStr = now.toLocaleDateString('es-PE', {
        weekday: 'long', day: 'numeric', month: 'long'
    });
    lines.push(`📅 ${dateStr}`);
    lines.push('');

    let totalQty = 0;
    Object.keys(grouped).forEach(catId => {
        const cat = CATEGORIES.find(c => c.id === catId);
        if (!cat) return;
        lines.push(`${cat.emoji} *${cat.name.toUpperCase()}*`);

        grouped[catId].forEach(item => {
            const checked = item.checked ? '✅ ' : '• ';
            const qtyStr = item.qty > 1 ? ` (${item.qty})` : '';
            const unitStr = item.qty > 1
                ? pluralUnit(item.unit, item.qty)
                : item.unit;
            lines.push(`${checked}${item.name}${qtyStr} ${unitStr}`);

            if (item.note) {
                lines.push(`   📝 _${item.note}_`);
            }
            totalQty += item.qty;
        });
        lines.push('');
    });

    lines.push('─────────────────────');
    lines.push(`📦 *Total: ${totalQty} ${totalQty === 1 ? 'producto' : 'productos'}*`);

    if (state.notes.trim()) {
        lines.push('');
        lines.push('📝 *Notas:*');
        lines.push(state.notes);
    }

    lines.push('');
    lines.push('_Enviado desde Mi Lista de Mercado_ 🥑🇵🇪');

    const message = lines.join('\n');

    // Codificar para URL
    const encoded = encodeURIComponent(message);
    // wa.me funciona en móvil y desktop con WhatsApp Web
    const url = `https://wa.me/?text=${encoded}`;

    window.open(url, '_blank');
    showToast('📱 Abriendo WhatsApp...', 'success');
}

// Pluraliza unidades simples en español
function pluralUnit(unit, qty) {
    if (qty === 1) return unit;
    const irregular = {
        'kg': 'kilos',
        'litro': 'litros',
        'unidad': 'unidades',
        'atado': 'atados',
        'paquete': 'paquetes',
        'botella': 'botellas',
        'lata': 'latas',
        'frasco': 'frascos',
        'caja': 'cajas',
        'barra': 'barras',
        'sobre': 'sobres',
        'bolsa': 'bolsas',
        'rollo': 'rollos'
    };
    return irregular[unit] || `${unit}s`;
}

// ===== Toast =====
function showToast(message, type = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// ===== Persistencia =====
function saveState() {
    try {
        const data = {
            list: state.list,
            notes: state.notes,
            customProducts: state.customProducts,
            templates: state.templates,
            lastList: state.lastList,
            collapsedCats: state.collapsedCats
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('No se pudo guardar el estado', e);
    }
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        state.list = data.list || [];
        state.notes = data.notes || '';
        state.customProducts = data.customProducts || {};
        state.templates = data.templates || [];
        state.lastList = data.lastList || null;
        state.collapsedCats = data.collapsedCats || [];
        document.getElementById('notesInput').value = state.notes;
    } catch (e) {
        console.warn('No se pudo cargar el estado', e);
    }
}
