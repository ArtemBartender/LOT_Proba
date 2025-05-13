const cocktails = [
  {
    name: { pl: "Mimosa", en: "Mimosa" },
    ingredients: {
      pl: ["Sok pomarańczowy", "Wermut"],
      en: ["Orange juice", "Vermouth"]
    },
    category: "liqueur"
  },
  {
    name: { pl: "Irishman", en: "Irishman" },
    ingredients: {
      pl: ["Irish Cream", "Whiskey"],
      en: ["Irish Cream", "Whiskey"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Gold Rush", en: "Gold Rush" },
    ingredients: {
      pl: ["Whiskey", "Likier miodowy", "Sok z cytryny"],
      en: ["Whiskey", "Honey liqueur", "Lemon juice"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Old Manhattan", en: "Old Manhattan" },
    ingredients: {
      pl: ["Bourbon", "Wermut", "Angostura"],
      en: ["Bourbon", "Vermouth", "Angostura"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Blue Orange Whiskey Sour", en: "Blue Orange Whiskey Sour" },
    ingredients: {
      pl: ["Whiskey", "Syrop blue curacao", "Syrop cukrowy", "Sok z cytryny"],
      en: ["Whiskey", "Blue curacao syrup", "Sugar syrup", "Lemon juice"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "The Curious Jackalope", en: "The Curious Jackalope" },
    ingredients: {
      pl: ["Gin", "Sok z limonki", "Sok grejpfrutowy", "Syrop cukrowy"],
      en: ["Gin", "Lime juice", "Grapefruit juice", "Sugar syrup"]
    },
    category: "gin"
  },
  {
    name: { pl: "Old Fashioned", en: "Old Fashioned" },
    ingredients: {
      pl: ["Bourbon", "Cukier", "Angostura"],
      en: ["Bourbon", "Sugar", "Angostura"]
    },
    category: "whiskey"
  },
  {
    name: { pl: "Szarlotka", en: "Sharlotka" },
    ingredients: {
      pl: ["Wódka", "Sok jabłkowy", "Syrop waniliowy", "Sok z cytryny"],
      en: ["Vodka", "Apple juice", "Vanilla syrup", "Lemon juice"]
    },
    category: "vodka"
  },
  {
    name: { pl: "Ginger Fresh", en: "Ginger Fresh" },
    ingredients: {
      pl: ["Syrop imbirowy", "Sok z cytryny", "Woda gazowana", "Mięta", "Lód"],
      en: ["Ginger syrup", "Lemon juice", "Sparkling water", "Mint", "Ice"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Berry Boost", en: "Berry Boost" },
    ingredients: {
      pl: ["Syrop malinowy", "Sok żurawinowy", "Sok z cytryny", "Woda gazowana", "Lód"],
      en: ["Raspberry syrup", "Cranberry juice", "Lemon juice", "Sparkling water", "Ice"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Pomegranate Sparkle", en: "Pomegranate Sparkle" },
    ingredients: {
      pl: ["Syrop z granatu", "Sok z cytryny", "Woda gazowana", "Lód"],
      en: ["Pomegranate syrup", "Lemon juice", "Sparkling water", "Ice"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Passion Fruit Punch", en: "Passion Fruit Punch" },
    ingredients: {
      pl: ["Syrop z marakui", "Sok pomarańczowy", "Woda sodowa", "Lód"],
      en: ["Passion fruit syrup", "Orange juice", "Soda water", "Ice"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Pineapple Mint Splash", en: "Pineapple Mint Splash" },
    ingredients: {
      pl: ["Sok ananasowy", "Syrop miętowy", "Sok z cytryny", "Lód"],
      en: ["Pineapple juice", "Mint syrup", "Lemon juice", "Ice"]
    },
    category: "non_alcoholic"
  }

,
  {
    name: { pl: "Mojito Truskawkowe", en: "Strawberry Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop truskawkowy", "Woda gazowana"],
      en: ["Mint", "Lime", "Strawberry syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Marakuja", en: "Passion Fruit Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop z marakui", "Woda gazowana"],
      en: ["Mint", "Lime", "Passion fruit syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Bzu", en: "Elderflower Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop bzu", "Woda gazowana"],
      en: ["Mint", "Lime", "Elderflower syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Granat", en: "Pomegranate Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop z granatu", "Woda gazowana"],
      en: ["Mint", "Lime", "Pomegranate syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Pomarańcza", en: "Orange Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop pomarańczowy", "Woda gazowana"],
      en: ["Mint", "Lime", "Orange syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Kokosowe", en: "Coconut Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop kokosowy", "Woda gazowana"],
      en: ["Mint", "Lime", "Coconut syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  },
  {
    name: { pl: "Mojito Mango", en: "Mango Mojito" },
    ingredients: {
      pl: ["Mięta", "Limonka", "Syrop mango", "Woda gazowana"],
      en: ["Mint", "Lime", "Mango syrup", "Sparkling water"]
    },
    category: "non_alcoholic"
  }
]
;
