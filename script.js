let language = 'pl';
let currentCategory = 'all';

function renderCategories() {
    const categories = ['all', 'vodka', 'whiskey', 'rum', 'liqueur', 'gin', 'non_alcoholic'];
    const labels = {
        pl: ['Wszystkie', 'Wódka', 'Whiskey & Bourbon', 'Rum', 'Likier', 'Gin', 'Bezalkoholowe'],
        en: ['All', 'Vodka', 'Whiskey & Bourbon', 'Rum', 'Liqueur', 'Gin', 'Non-alcoholic']
    };
    const container = document.getElementById('category-buttons');
    container.innerHTML = '';
    categories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.textContent = labels[language][i];
        btn.onclick = () => {
            currentCategory = cat;
            renderCocktails();
        };
        container.appendChild(btn);
    });
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
            const p = document.createElement('p');
            p.textContent = ing;
            div.appendChild(p);
        });
        container.appendChild(div);
    });
}

function setLanguage(lang) {
    language = lang;
    renderCategories();
    renderCocktails();
    document.getElementById("footer-text").textContent = 
        lang === 'pl' ? "Najlepszym podziękowaniem będzie Twoja opinia." : 
                        "The best thank you is your feedback.";
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCocktails();
    setLanguage('pl');
});
