let language = 'pl';
let currentCategory = 'all';

// Переводы
const translations = {
  pl: {
    header:      "",
    title:       "Menu drinków",
    footer:      "Najlepszym podziękowaniem będzie Twoja opinia.",
    surprise:    "Zaskocz mnie koktajlem",
    searchPlaceholder: "🔍 Znajdź napój…",
    feedbackButton:    "Zaproponuj drink",
    feedbackTitle:     "Masz propozycję koktajlu?",
    feedbackPlaceholder:"Wpisz nazwę koktajlu lub swoje uwagi…",
    feedbackSend:      "Wyślij",
    categories: {
      all:           "Wszystkie",
      vodka:         "Wódka",
      whiskey:       "Whiskey & Bourbon",
      rum:           "Rum",
      liqueur:       "Likier",
      gin:           "Gin",
      non_alcoholic: "Bezalkoholowe",
      beer:          "Piwo"
    }
  },
  en: {
    header:      "",
    title:       "Cocktail Menu",
    footer:      "The best thank you is your opinion.",
    surprise:    "Surprise me a cocktail",
    searchPlaceholder: "🔍 Find your drink…",
    searchPlaceholder: "🔍 Find your drink…",
    feedbackButton:    "Suggest a drink",
    feedbackTitle:     "Have a cocktail suggestion?",
    feedbackPlaceholder:"Type the cocktail name or your note…",
    feedbackSend:      "Send",
    categories: {
      all:           "All",
      vodka:         "Vodka",
      whiskey:       "Whiskey & Bourbon",
      rum:           "Rum",
      liqueur:       "Liqueur",
      gin:           "Gin",
      non_alcoholic: "Non-alcoholic",
      beer:          "Beer"
    }
  }
};

// Элемент поисковой строки
const searchInput = document.getElementById('drink-search');

// Смена языка
function changeLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.getElementById("page-title").textContent = translations[lang].title;
  document.querySelector(".site-header h2").textContent = translations[lang].header;
  document.getElementById("footer-text").textContent = translations[lang].footer;
  document.getElementById("surprise-btn").textContent = translations[lang].surprise;
  document.getElementById("drink-search").placeholder = translations[lang].searchPlaceholder;
  renderCategories();
  renderCocktails();
}

// Рендер кнопок категорий
function renderCategories() {
  const container = document.getElementById("category-buttons");
  container.innerHTML = "";
  Object.entries(translations[language].categories).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    if (key === currentCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentCategory = key;
      renderCategories();
      renderCocktails();
    });
    container.appendChild(btn);
  });
}

// Рендер карточек коктейлей с учётом категории + поиска
function renderCocktails() {
  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";

  // 1) Фильтрация по категории
  let filtered = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );

  // 2) Фильтрация по запросу в поиске
  const q = searchInput.value.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(c =>
      // по названию
      c.name[language].toLowerCase().includes(q)
      // или по любому ингредиенту
      || c.ingredients[language].some(ing => ing.toLowerCase().includes(q))
    );
  }

  // 3) Если ничего не найдено
  if (filtered.length === 0) {
    const msg = language === 'pl'
      ? 'Ничего не найдено 😕'
      : 'No results found 😕';
    container.innerHTML = `<p class="no-results">${msg}</p>`;
    return;
  }

  // 4) Отрисовка карточек
  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "cocktail-card";
    const inner = document.createElement("div");
    inner.className = "card-inner";

    // Front
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

    // Back
    const back = document.createElement("div");
    back.className = "card-back";
    const desc = document.createElement("p");
    desc.textContent = c.description[language];
    back.appendChild(desc);

    inner.append(front, back);
    card.appendChild(inner);
    container.appendChild(card);

    // Flip on click
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      if (typeof gtag === 'function') {
        gtag('event', 'flip_card', {
          'event_category': 'engagement',
          'event_label': c.name[language],
          'transport_type': 'beacon'
        });
      }
    });
  });
}

// Обработчик кнопки "Surprise"
const surpriseBtn = document.getElementById('surprise-btn');
surpriseBtn.addEventListener('click', () => {
  const pool = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );
  const pick = pool[Math.floor(Math.random() * pool.length)];
  // показываем только его
  searchInput.value = '';
  currentCategory = 'all';
  renderCategories();

  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "cocktail-card";
  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";
  const nameEl = document.createElement("h2");
  nameEl.textContent = pick.name[language];
  front.appendChild(nameEl);
  pick.ingredients[language].forEach(ing => {
    const p = document.createElement("p");
    p.textContent = ing;
    front.appendChild(p);
  });

  const back = document.createElement("div");
  back.className = "card-back";
  const desc = document.createElement("p");
  desc.textContent = pick.description[language];
  back.appendChild(desc);

  inner.append(front, back);
  card.appendChild(inner);
  container.appendChild(card);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if (typeof gtag === 'function') {
      gtag('event', 'flip_card', {
        'event_category': 'engagement',
        'event_label': pick.name[language],
        'transport_type': 'beacon'
      });
    }
  });

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // analytics
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'surprise_button',
      'transport_type': 'beacon'
    });
  }
});

// Трэк всех ссылок
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'click', {
        'event_category': 'navigation',
        'event_label': link.href,
        'transport_type': 'beacon'
      });
    }
  });
});

// Привязываем слушатель поиска и инициализируем
window.onload = () => {
  searchInput.addEventListener('input', renderCocktails);
  changeLanguage(language);
};
