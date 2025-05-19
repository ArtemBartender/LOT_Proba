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

  const filtered = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );

  filtered.forEach(c => {
    // карточка-контейнер с перспективой
    const card = document.createElement("div");
    card.className = "cocktail-card";

    // внутренняя область для 3D-вращения
    const inner = document.createElement("div");
    inner.className = "card-inner";

    // передняя сторона
    const front = document.createElement("div");
    front.className = "card-front";
    const nameEl = document.createElement("h2");
    nameEl.textContent = c.name[language];
    front.appendChild(nameEl);
    c.ingredients[language].forEach(ing => {
      const p = document.createElement("p");
      p.textContent = ing;
      front.appendChild(p);
    });

    // задняя сторона
    const back = document.createElement("div");
    back.className = "card-back";
    const desc = document.createElement("p");
    desc.textContent = c.description[language];
    back.appendChild(desc);

    // собираем структуру
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // кликом переворачиваем карточку
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    container.appendChild(card);
  });
}

// при загрузке сразу рендерим на текущем языке
window.onload = () => changeLanguage(language);
