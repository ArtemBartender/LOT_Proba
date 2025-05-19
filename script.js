let language = 'pl';
let currentCategory = 'all';

const translations = {
  pl: {
    header:    "Ważne, z kim podróżujesz",           // Шапка
    title:     "Menu drinków",                       // <title> и #page-title
    footer:    "Najlepszym podziękowaniem będzie Twoja opinia.",
    categories: {
      all:             "Wszystkie",
      vodka:           "Wódka",
      whiskey:         "Whiskey & Bourbon",
      rum:             "Rum",
      liqueur:         "Likier",
      gin:             "Gin",
      non_alcoholic:   "Bezalkoholowe"
    }
  },
  en: {
    header:    "It matters who you’re traveling with.",
    title:     "Cocktail Menu",
    footer:    "The best thank you is your opinion.",
    categories: {
      all:             "All",
      vodka:           "Vodka",
      whiskey:         "Whiskey & Bourbon",
      rum:             "Rum",
      liqueur:         "Liqueur",
      gin:             "Gin",
      non_alcoholic:   "Non-alcoholic"
    }
  }
};

function changeLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;

  // заголовок вкладки и #page-title
  document.title = translations[lang].title;
  document.getElementById("page-title").textContent = translations[lang].title;

  // текст в шапке
  document.querySelector(".site-header h2").textContent = translations[lang].header;

  // футер
  document.getElementById("footer-text").textContent = translations[lang].footer;

  renderCategories();
  renderCocktails();
}

function renderCategories() {
  const container = document.getElementById("category-buttons");
  container.innerHTML = "";
  Object.entries(translations[language].categories).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = () => {
      currentCategory = key;
      renderCocktails();
    };
    container.appendChild(btn);
  });
}

function renderCocktails() {
  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";
  const filtered = cocktails.filter(c => currentCategory === 'all' || c.category === currentCategory);
  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "cocktail-card";

    // Название
    const nameEl = document.createElement("h2");
    nameEl.textContent = c.name[language];
    card.appendChild(nameEl);

    // Ингредиенты
    c.ingredients[language].forEach(ing => {
      const p = document.createElement("p");
      p.textContent = ing;
      card.appendChild(p);
    });

    // Краткое описание (скрыто по умолчанию)
    const desc = document.createElement("p");
    desc.className = "cocktail-desc";
    desc.textContent = c.description[language];
    card.appendChild(desc);

    // По клику раскрываем/скрываем описание
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });

    container.appendChild(card);
  });
}

// при загрузке сразу рендерим на текущем языке
window.onload = () => changeLanguage(language);
