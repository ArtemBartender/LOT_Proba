
let language = 'pl';
let currentCategory = 'all';

const translations = {
    pl: {
        title: "Menu drinków",
        footer: "Najlepszym podziękowaniem będzie Twoja opinia.",
        categories: {
            all: "Wszystkie",
            vodka: "Wódka",
            whiskey: "Whiskey & Bourbon",
            rum: "Rum",
            liqueur: "Likier",
            gin: "Gin",
            nonalcoholic: "Bezakoholowe"
        }
    },
    en: {
        title: "Cocktail Menu",
        footer: "The best thank you is your opinion.",
        categories: {
            all: "All",
            vodka: "Vodka",
            whiskey: "Whiskey & Bourbon",
            rum: "Rum",
            liqueur: "Liqueur",
            gin: "Gin",
            nonalcoholic: "Non-alcoholic"
        }
    }
};

function changeLanguage(lang) {
    language = lang;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('footer-text').textContent = translations[lang].footer;
    renderCategories();
    renderCocktails();
}

function changeCategory(category) {
    currentCategory = category;
    renderCocktails();
}

function renderCategories() {
    const container = document.getElementById('category-buttons');
    container.innerHTML = '';
    for (const [key, value] of Object.entries(translations[language].categories)) {
        const btn = document.createElement('button');
        btn.textContent = value;
        btn.onclick = () => changeCategory(key);
        container.appendChild(btn);
    }
}

function renderCocktails() {
    const container = document.getElementById('cocktail-list');
    container.innerHTML = '';
    const filtered = cocktails.filter(c => currentCategory === 'all' || c.category === currentCategory);
    filtered.forEach(c => {
        const div = document.createElement('div');
        div.className = 'cocktail-card';
        const name = document.createElement('h2');
        name.textContent = c.name[language];
        div.appendChild(name);
        c.ingredients[language].forEach(ing => {
    const p = document.createElement("p");
    p.textContent = ing;
    div.appendChild(p);
  });
        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderCocktails();
});
