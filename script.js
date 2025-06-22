let language = 'pl';
let currentCategory = 'all';

// Переводы
const translations = {
  pl: {
    header:      "",
    title:       "Menu drinków",
    footer:      "Najlepszym podziękowaniem będzie Twoja opinia.",
    surprise:    "Zaskocz mnie koktajlem",
    searchPlaceholder:   "🔍 Znajdź napój…",
    feedbackButton:      "Zaproponuj drink",
    feedbackTitle:       "Masz propozycję koktajlu?",
    feedbackPlaceholder: "Wpisz nazwę koktajlu lub swoje uwagi…",
    feedbackSend:        "Wyślij",
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
    searchPlaceholder:   "🔍 Find your drink…",
    feedbackButton:      "Suggest a drink",
    feedbackTitle:       "Have a cocktail suggestion?",
    feedbackPlaceholder: "Type the cocktail name or your note…",
    feedbackSend:        "Send",
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

// Элементы DOM, к которым обращаемся
const searchInput = document.getElementById('drink-search');
const surpriseBtn = document.getElementById('surprise-btn');
const fbBtn    = document.getElementById("feedback-btn");
const fbModal  = document.getElementById("feedback-modal");
const fbClose  = document.getElementById("feedback-close");
const fbInput  = document.getElementById("feedback-input");
const fbSend   = document.getElementById("feedback-send");

// Смена языка и обновление UI
function changeLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.getElementById("page-title").textContent = translations[lang].title;
  document.querySelector(".site-header h2").textContent = translations[lang].header;
  document.getElementById("footer-text").textContent = translations[lang].footer;
  document.getElementById("surprise-btn").textContent = translations[lang].surprise;
  searchInput.placeholder  = translations[lang].searchPlaceholder;
  fbBtn.textContent        = translations[lang].feedbackButton;
  document.getElementById("feedback-title").textContent = translations[lang].feedbackTitle;
  fbInput.placeholder      = translations[lang].feedbackPlaceholder;
  fbSend.textContent       = translations[lang].feedbackSend;

  renderCategories();
  renderCocktails();
}

// Кнопки категорий
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

// Отрисовка списка коктейлей (с учётом категории и поиска)
function renderCocktails() {
  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";

  // 1) Фильтр по категории
  let filtered = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );

  // 2) Фильтр по запросу
  const q = searchInput.value.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(c =>
      c.name[language].toLowerCase().includes(q) ||
      c.ingredients[language].some(ing => ing.toLowerCase().includes(q))
    );
  }

  // 3) Если пустой результат
  if (filtered.length === 0) {
    const msg = language === 'pl'
      ? 'Nic nie znaleziono 😕'
      : 'No results found 😕';
    container.innerHTML = `<p class="no-results">${msg}</p>`;
    return;
  }

  // 4) Рисуем карточки
  filtered.forEach(c => {
    const card  = document.createElement("div");
    card.className = "cocktail-card";
    const inner = document.createElement("div");
    inner.className = "card-inner";

    // лицевая сторона
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

    // обратная сторона
    const back = document.createElement("div");
    back.className = "card-back";
    const desc = document.createElement("p");
    desc.textContent = c.description[language];
    back.appendChild(desc);

    inner.append(front, back);
    card.appendChild(inner);
    container.appendChild(card);

    // переворот карточки
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

// Обработчик “Surprise me”
surpriseBtn.addEventListener('click', () => {
  const pool = cocktails.filter(c =>
    currentCategory === 'all' || c.category === currentCategory
  );
  const pick = pool[Math.floor(Math.random() * pool.length)];

  // сброс поиска/категорий
  searchInput.value = '';
  currentCategory = 'all';
  renderCategories();

  // показываем только pick
  const container = document.getElementById("cocktail-list");
  container.innerHTML = "";
  const card  = document.createElement("div");
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
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // analytics
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'surprise_button',
      'transport_type': 'beacon'
    });
  }

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Трек ссылок
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

// Открытие/закрытие модалки и отправка фидбека
fbBtn.addEventListener("click", () => {
  fbInput.value = "";
  fbModal.classList.remove("hidden");
});
fbClose.addEventListener("click", () => fbModal.classList.add("hidden"));
fbModal.addEventListener("click", e => {
  if (e.target === fbModal) fbModal.classList.add("hidden");
});
fbSend.addEventListener("click", () => {
  const text = fbInput.value.trim();
  if (!text) {
    alert(language === 'pl' ? 'Wpisz treść!' : 'Please enter something!');
    return;
  }
  const subject = encodeURIComponent(
    language === 'pl' ? 'Propozycja koktajlu' : 'Cocktail suggestion'
  );
  const body = encodeURIComponent(text);
  window.location.href = 
    `mailto:a.bilenko@lot.pl?subject=${subject}&body=${body}`;
  fbModal.classList.add("hidden");
});

// Инициализация
window.onload = () => {
  searchInput.addEventListener('input', renderCocktails);
  changeLanguage(language);
};
