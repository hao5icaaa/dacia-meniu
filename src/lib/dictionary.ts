// UI strings + category names + allergen names + landing copy
// Hand-translated for quality (RO is the source).

import type { Locale } from "./i18n";

type Tx = Record<Locale, string>;

export const t: Record<string, Tx> = {
  // Landing page
  landing_food: {
    ro: "MÂNCARE", en: "FOOD", es: "COMIDA", ru: "ЕДА", ar: "طعام", it: "CIBO", fr: "CUISINE",
  },
  landing_food_subtitle: {
    ro: "Bistro Gourmet", en: "Gourmet Bistro", es: "Bistró Gourmet", ru: "Гурмэ Бистро", ar: "بيسترو غورميه", it: "Bistrot Gourmet", fr: "Bistrot Gourmet",
  },
  landing_drinks: {
    ro: "BĂUTURĂ", en: "DRINKS", es: "BEBIDAS", ru: "НАПИТКИ", ar: "مشروبات", it: "BEVANDE", fr: "BOISSONS",
  },
  landing_drinks_subtitle: {
    ro: "Carte de Băuturi", en: "Drinks Menu", es: "Carta de Bebidas", ru: "Карта напитков", ar: "قائمة المشروبات", it: "Carta delle Bevande", fr: "Carte des Boissons",
  },
  landing_hero: {
    ro: "Inspirați de Tezaurul de la Pietroasele, descoperit în 1837, meniul nostru împletește tradiția culinară românească cu rafinamentul bucătăriei moderne.",
    en: "Inspired by the Pietroasele Treasure, discovered in 1837, our menu weaves Romanian culinary tradition with the refinement of modern cuisine.",
    es: "Inspirados en el Tesoro de Pietroasele, descubierto en 1837, nuestro menú entrelaza la tradición culinaria rumana con el refinamiento de la cocina moderna.",
    ru: "Вдохновлённое сокровищем Пьетроасе, обнаруженным в 1837 году, наше меню сочетает румынские кулинарные традиции с изяществом современной кухни.",
    ar: "مستوحاة من كنز بيتروازيلي، الذي اكتُشف عام 1837، تجمع قائمتنا بين التقاليد الطهوية الرومانية ورقي المطبخ الحديث.",
    it: "Ispirati dal Tesoro di Pietroasele, scoperto nel 1837, il nostro menù intreccia la tradizione culinaria rumena con la raffinatezza della cucina moderna.",
    fr: "Inspirés par le Trésor de Pietroasele, découvert en 1837, notre menu entrelace la tradition culinaire roumaine au raffinement de la cuisine moderne.",
  },
  landing_subhero: {
    ro: "Geoparcul UNESCO — Ținutul Buzăului",
    en: "UNESCO Geopark — Buzău Land",
    es: "Geoparque UNESCO — Tierra de Buzău",
    ru: "Геопарк ЮНЕСКО — Земля Бузэу",
    ar: "حديقة اليونسكو الجيولوجية — أرض بوزاو",
    it: "Geoparco UNESCO — Terra di Buzău",
    fr: "Géoparc UNESCO — Pays de Buzău",
  },
  tagline: {
    ro: "Gourmet experience & Life Style",
    en: "Gourmet experience & Life Style",
    es: "Experiencia gourmet & Estilo de vida",
    ru: "Гурмэ опыт и стиль жизни",
    ar: "تجربة طعام راقية ونمط حياة",
    it: "Esperienza gourmet & Stile di vita",
    fr: "Expérience gourmet & Art de vivre",
  },

  // Search & filter
  search_placeholder: {
    ro: "Caută preparat...", en: "Search dish...", es: "Buscar plato...", ru: "Поиск блюда...", ar: "ابحث عن طبق...", it: "Cerca piatto...", fr: "Rechercher un plat...",
  },
  exclude_allergens: {
    ro: "Exclude alergeni (apasă pentru a filtra):",
    en: "Exclude allergens (tap to filter):",
    es: "Excluir alérgenos (pulsa para filtrar):",
    ru: "Исключить аллергены (нажмите для фильтрации):",
    ar: "استبعاد المواد المسببة للحساسية (اضغط للتصفية):",
    it: "Escludi allergeni (tocca per filtrare):",
    fr: "Exclure les allergènes (appuyer pour filtrer) :",
  },
  no_results_filtered: {
    ro: "Niciun preparat găsit cu filtrele selectate.",
    en: "No dishes found with the selected filters.",
    es: "No se encontraron platos con los filtros seleccionados.",
    ru: "По выбранным фильтрам ничего не найдено.",
    ar: "لم يتم العثور على أطباق بالفلاتر المحددة.",
    it: "Nessun piatto trovato con i filtri selezionati.",
    fr: "Aucun plat trouvé avec les filtres sélectionnés.",
  },
  no_items: {
    ro: "Meniul nu conține preparate.", en: "The menu has no items.", es: "El menú no contiene platos.", ru: "В меню нет позиций.", ar: "القائمة لا تحتوي على أطباق.", it: "Il menù non contiene piatti.", fr: "Le menu ne contient aucun plat.",
  },
  load_error: {
    ro: "Nu am putut încărca meniul.", en: "Could not load the menu.", es: "No se pudo cargar el menú.", ru: "Не удалось загрузить меню.", ar: "تعذّر تحميل القائمة.", it: "Impossibile caricare il menù.", fr: "Impossible de charger le menu.",
  },

  // Item card
  ingredients: {
    ro: "Ingrediente", en: "Ingredients", es: "Ingredientes", ru: "Ингредиенты", ar: "المكوّنات", it: "Ingredienti", fr: "Ingrédients",
  },
  allergens: {
    ro: "Alergeni", en: "Allergens", es: "Alérgenos", ru: "Аллергены", ar: "مسببات الحساسية", it: "Allergeni", fr: "Allergènes",
  },
  topping: {
    ro: "Topping", en: "Toppings", es: "Aderezos", ru: "Топпинги", ar: "إضافات", it: "Aggiunte", fr: "Suppléments",
  },

  // Nutrition
  nutrition_title: {
    ro: "Valori Nutriționale", en: "Nutritional Values", es: "Valores Nutricionales", ru: "Пищевая ценность", ar: "القيم الغذائية", it: "Valori Nutrizionali", fr: "Valeurs Nutritionnelles",
  },
  nutrition_per_portion: {
    ro: "Per porție", en: "Per portion", es: "Por porción", ru: "На порцию", ar: "لكل حصة", it: "Per porzione", fr: "Par portion",
  },
  nutrition_per_100g: {
    ro: "Per 100g", en: "Per 100g", es: "Por 100g", ru: "На 100 г", ar: "لكل 100 غ", it: "Per 100g", fr: "Pour 100g",
  },
  nutrition_unavailable: {
    ro: "Valori nutriționale indisponibile pentru acest preparat.",
    en: "Nutritional values unavailable for this dish.",
    es: "Valores nutricionales no disponibles para este plato.",
    ru: "Пищевая ценность для этого блюда недоступна.",
    ar: "القيم الغذائية غير متوفرة لهذا الطبق.",
    it: "Valori nutrizionali non disponibili per questo piatto.",
    fr: "Valeurs nutritionnelles indisponibles pour ce plat.",
  },
  nut_energy: { ro: "Energie", en: "Energy", es: "Energía", ru: "Энергия", ar: "الطاقة", it: "Energia", fr: "Énergie" },
  nut_fat: { ro: "Grăsimi", en: "Fat", es: "Grasas", ru: "Жиры", ar: "الدهون", it: "Grassi", fr: "Lipides" },
  nut_saturated: { ro: "din care saturate", en: "of which saturated", es: "de las cuales saturadas", ru: "в т. ч. насыщенные", ar: "منها مشبعة", it: "di cui saturi", fr: "dont saturés" },
  nut_carbs: { ro: "Glucide", en: "Carbohydrates", es: "Hidratos de carbono", ru: "Углеводы", ar: "الكربوهيدرات", it: "Carboidrati", fr: "Glucides" },
  nut_sugars: { ro: "din care zaharuri", en: "of which sugars", es: "de los cuales azúcares", ru: "в т. ч. сахара", ar: "منها سكريات", it: "di cui zuccheri", fr: "dont sucres" },
  nut_protein: { ro: "Proteine", en: "Protein", es: "Proteínas", ru: "Белки", ar: "البروتين", it: "Proteine", fr: "Protéines" },
  nut_salt: { ro: "Sare", en: "Salt", es: "Sal", ru: "Соль", ar: "الملح", it: "Sale", fr: "Sel" },
  nut_fiber: { ro: "Fibre", en: "Fiber", es: "Fibra", ru: "Клетчатка", ar: "الألياف", it: "Fibre", fr: "Fibres" },

  // Footer
  house_creation_legend: {
    ro: "★ = Creația casei", en: "★ = House creation", es: "★ = Creación de la casa", ru: "★ = Авторское блюдо", ar: "★ = إبداع البيت", it: "★ = Creazione della casa", fr: "★ = Création maison",
  },
  disclaimer_water: {
    ro: "La prepararea deliciilor se folosește apa alcalină",
    en: "Alkaline water is used in preparing our dishes",
    es: "Se utiliza agua alcalina en la preparación de nuestros platos",
    ru: "При приготовлении блюд используется щелочная вода",
    ar: "يُستخدم الماء القلوي في تحضير أطباقنا",
    it: "Per la preparazione dei piatti viene usata acqua alcalina",
    fr: "De l'eau alcaline est utilisée dans la préparation de nos plats",
  },
  footer_drinks_disclaimer: {
    ro: "Aceste produse pot conține alergeni. Întrebați personalul.",
    en: "These products may contain allergens. Please ask our staff.",
    es: "Estos productos pueden contener alérgenos. Pregunte al personal.",
    ru: "Эти продукты могут содержать аллергены. Уточняйте у персонала.",
    ar: "قد تحتوي هذه المنتجات على مسببات حساسية. يرجى سؤال الموظفين.",
    it: "Questi prodotti possono contenere allergeni. Chiedere al personale.",
    fr: "Ces produits peuvent contenir des allergènes. Demandez au personnel.",
  },
  footer_food_note: {
    ro: "Preparatele marcate cu ★ sunt creațiile casei",
    en: "Dishes marked with ★ are house creations",
    es: "Los platos marcados con ★ son creaciones de la casa",
    ru: "Блюда, отмеченные ★, — авторские творения шеф-повара",
    ar: "الأطباق المعلَّمة بـ★ هي من إبداعات البيت",
    it: "I piatti contrassegnati con ★ sono creazioni della casa",
    fr: "Les plats marqués d'un ★ sont des créations maison",
  },
  footer_drinks_note: {
    ro: "Carte de băuturi — Dacia Romanian Dining",
    en: "Drinks list — Dacia Romanian Dining",
    es: "Carta de bebidas — Dacia Romanian Dining",
    ru: "Карта напитков — Dacia Romanian Dining",
    ar: "قائمة المشروبات — Dacia Romanian Dining",
    it: "Carta delle bevande — Dacia Romanian Dining",
    fr: "Carte des boissons — Dacia Romanian Dining",
  },

  // Page titles
  meta_food_title: { ro: "Meniu Mâncare — Dacia Romanian Dining", en: "Food Menu — Dacia Romanian Dining", es: "Menú de Comida — Dacia Romanian Dining", ru: "Меню еды — Dacia Romanian Dining", ar: "قائمة الطعام — Dacia Romanian Dining", it: "Menù Cibo — Dacia Romanian Dining", fr: "Menu Cuisine — Dacia Romanian Dining" },
  meta_drinks_title: { ro: "Carte de Băuturi — Dacia Romanian Dining", en: "Drinks Menu — Dacia Romanian Dining", es: "Carta de Bebidas — Dacia Romanian Dining", ru: "Карта напитков — Dacia Romanian Dining", ar: "قائمة المشروبات — Dacia Romanian Dining", it: "Carta delle Bevande — Dacia Romanian Dining", fr: "Carte des Boissons — Dacia Romanian Dining" },
};

export const ALLERGEN_TX: Record<string, Tx> = {
  Gluten: { ro: "Gluten", en: "Gluten", es: "Gluten", ru: "Глютен", ar: "غلوتين", it: "Glutine", fr: "Gluten" },
  Crustacee: { ro: "Crustacee", en: "Crustaceans", es: "Crustáceos", ru: "Ракообразные", ar: "قشريات", it: "Crostacei", fr: "Crustacés" },
  "Ouă": { ro: "Ouă", en: "Eggs", es: "Huevos", ru: "Яйца", ar: "بيض", it: "Uova", fr: "Œufs" },
  "Pește": { ro: "Pește", en: "Fish", es: "Pescado", ru: "Рыба", ar: "سمك", it: "Pesce", fr: "Poisson" },
  Arahide: { ro: "Arahide", en: "Peanuts", es: "Cacahuetes", ru: "Арахис", ar: "فول سوداني", it: "Arachidi", fr: "Arachides" },
  Soia: { ro: "Soia", en: "Soy", es: "Soja", ru: "Соя", ar: "صويا", it: "Soia", fr: "Soja" },
  Lapte: { ro: "Lapte", en: "Milk", es: "Leche", ru: "Молоко", ar: "حليب", it: "Latte", fr: "Lait" },
  "Fructe cu coajă": { ro: "Fructe cu coajă", en: "Tree nuts", es: "Frutos de cáscara", ru: "Орехи", ar: "مكسرات", it: "Frutta a guscio", fr: "Fruits à coque" },
  "Țelină": { ro: "Țelină", en: "Celery", es: "Apio", ru: "Сельдерей", ar: "كرفس", it: "Sedano", fr: "Céleri" },
  "Muștar": { ro: "Muștar", en: "Mustard", es: "Mostaza", ru: "Горчица", ar: "خردل", it: "Senape", fr: "Moutarde" },
  Susan: { ro: "Susan", en: "Sesame", es: "Sésamo", ru: "Кунжут", ar: "سمسم", it: "Sesamo", fr: "Sésame" },
  "Sulfiți": { ro: "Sulfiți", en: "Sulphites", es: "Sulfitos", ru: "Сульфиты", ar: "كبريتات", it: "Solfiti", fr: "Sulfites" },
  Lupin: { ro: "Lupin", en: "Lupin", es: "Altramuces", ru: "Люпин", ar: "ترمس", it: "Lupini", fr: "Lupin" },
  "Moluște": { ro: "Moluște", en: "Molluscs", es: "Moluscos", ru: "Моллюски", ar: "رخويات", it: "Molluschi", fr: "Mollusques" },
};

// Category name translations (RO key -> per-locale name)
export const CATEGORY_TX: Record<string, Tx> = {
  // Food
  "Geo-Produse": { ro: "Geo-Produse", en: "Geo Products", es: "Geo-Productos", ru: "Гео-продукты", ar: "منتجات جغرافية", it: "Geo-Prodotti", fr: "Géo-Produits" },
  "Dacia Dishes": { ro: "Dacia Dishes", en: "Dacia Dishes", es: "Platos Dacia", ru: "Блюда Dacia", ar: "أطباق داتشيا", it: "Piatti Dacia", fr: "Plats Dacia" },
  "Bistro Gourmet — Antreuri": { ro: "Bistro Gourmet — Antreuri", en: "Bistro Gourmet — Starters", es: "Bistró Gourmet — Entrantes", ru: "Бистро Гурмэ — Закуски", ar: "بيسترو غورميه — مقبلات", it: "Bistrot Gourmet — Antipasti", fr: "Bistrot Gourmet — Entrées" },
  "Supe / Creme": { ro: "Supe / Creme", en: "Soups / Creams", es: "Sopas / Cremas", ru: "Супы / Кремы", ar: "حساء / كريمات", it: "Zuppe / Vellutate", fr: "Soupes / Crèmes" },
  "Salate": { ro: "Salate", en: "Salads", es: "Ensaladas", ru: "Салаты", ar: "سلطات", it: "Insalate", fr: "Salades" },
  "Paste": { ro: "Paste", en: "Pasta", es: "Pasta", ru: "Паста", ar: "معكرونة", it: "Pasta", fr: "Pâtes" },
  "Pizza": { ro: "Pizza", en: "Pizza", es: "Pizza", ru: "Пицца", ar: "بيتزا", it: "Pizza", fr: "Pizza" },
  "Pește": { ro: "Pește", en: "Fish", es: "Pescado", ru: "Рыба", ar: "أسماك", it: "Pesce", fr: "Poisson" },
  "Vită": { ro: "Vită", en: "Beef", es: "Ternera", ru: "Говядина", ar: "لحم بقر", it: "Manzo", fr: "Bœuf" },
  "Porc": { ro: "Porc", en: "Pork", es: "Cerdo", ru: "Свинина", ar: "لحم خنزير", it: "Maiale", fr: "Porc" },
  "Pasăre": { ro: "Pasăre", en: "Poultry", es: "Aves", ru: "Птица", ar: "دواجن", it: "Pollame", fr: "Volaille" },
  "Oaie / Miel": { ro: "Oaie / Miel", en: "Sheep / Lamb", es: "Oveja / Cordero", ru: "Овца / Ягнёнок", ar: "غنم / حَمَل", it: "Pecora / Agnello", fr: "Mouton / Agneau" },
  "Platouri": { ro: "Platouri", en: "Platters", es: "Tablas", ru: "Платтеры", ar: "أطباق مشكّلة", it: "Taglieri", fr: "Plateaux" },
  "Preparate Vegetariene": { ro: "Preparate Vegetariene", en: "Vegetarian Dishes", es: "Platos Vegetarianos", ru: "Вегетарианские блюда", ar: "أطباق نباتية", it: "Piatti Vegetariani", fr: "Plats Végétariens" },
  "Garnituri": { ro: "Garnituri", en: "Sides", es: "Guarniciones", ru: "Гарниры", ar: "أطباق جانبية", it: "Contorni", fr: "Accompagnements" },
  "Meniu copii": { ro: "Meniu copii", en: "Kids Menu", es: "Menú Infantil", ru: "Детское меню", ar: "قائمة الأطفال", it: "Menù Bambini", fr: "Menu Enfants" },
  "Desert": { ro: "Desert", en: "Desserts", es: "Postres", ru: "Десерты", ar: "حلويات", it: "Dessert", fr: "Desserts" },
  "Info alergeni": { ro: "Info alergeni", en: "Allergen Info", es: "Info Alérgenos", ru: "Информация об аллергенах", ar: "معلومات الحساسية", it: "Info Allergeni", fr: "Info Allergènes" },

  // Drinks
  "Cafea de Specialitate Dropshot & Ceaiuri": { ro: "Cafea de Specialitate Dropshot & Ceaiuri", en: "Dropshot Specialty Coffee & Teas", es: "Café de Especialidad Dropshot & Tés", ru: "Спешелти кофе Dropshot и чаи", ar: "قهوة دروبشوت المختصة والشاي", it: "Caffè Specialty Dropshot & Tè", fr: "Café de Spécialité Dropshot & Thés" },
  "Frappé": { ro: "Frappé", en: "Frappé", es: "Frappé", ru: "Фраппе", ar: "فرابيه", it: "Frappé", fr: "Frappé" },
  "Healthy Option LifeCare": { ro: "Healthy Option LifeCare", en: "Healthy Option LifeCare", es: "Opción Saludable LifeCare", ru: "Здоровый выбор LifeCare", ar: "خيار صحي LifeCare", it: "Opzione Salute LifeCare", fr: "Option Santé LifeCare" },
  "Limonadă și Fresh-uri": { ro: "Limonadă și Fresh-uri", en: "Lemonades & Fresh Juices", es: "Limonadas y Zumos Frescos", ru: "Лимонады и фреши", ar: "ليموناضة وعصائر طازجة", it: "Limonate e Spremute", fr: "Limonades et Jus Frais" },
  "Specialități sănătoase Dacia": { ro: "Specialități sănătoase Dacia", en: "Dacia Healthy Specialties", es: "Especialidades Saludables Dacia", ru: "Полезные фирменные напитки Dacia", ar: "تخصصات داتشيا الصحية", it: "Specialità Salutari Dacia", fr: "Spécialités Santé Dacia" },
  "Băuturi Interbelice": { ro: "Băuturi Interbelice", en: "Interwar Cocktails", es: "Cócteles de Entreguerras", ru: "Коктейли межвоенной эпохи", ar: "كوكتيلات ما بين الحربين", it: "Cocktail Tra le Due Guerre", fr: "Cocktails de l'Entre-deux-guerres" },
  "Cocktailuri DACIA – Botanice": { ro: "Cocktailuri DACIA – Botanice", en: "DACIA Botanical Cocktails", es: "Cócteles Botánicos DACIA", ru: "Ботанические коктейли DACIA", ar: "كوكتيلات داتشيا النباتية", it: "Cocktail DACIA Botanici", fr: "Cocktails DACIA Botaniques" },
  "Cocktailuri Clasice": { ro: "Cocktailuri Clasice", en: "Classic Cocktails", es: "Cócteles Clásicos", ru: "Классические коктейли", ar: "كوكتيلات كلاسيكية", it: "Cocktail Classici", fr: "Cocktails Classiques" },
  "Cocktail fără alcool": { ro: "Cocktail fără alcool", en: "Non-Alcoholic Cocktails", es: "Cócteles sin Alcohol", ru: "Безалкогольные коктейли", ar: "كوكتيلات بدون كحول", it: "Cocktail Analcolici", fr: "Cocktails Sans Alcool" },
  "Băuturi Tradiționale din România & Licori fierbinți": { ro: "Băuturi Tradiționale din România & Licori fierbinți", en: "Traditional Romanian Spirits & Hot Liqueurs", es: "Licores Tradicionales Rumanos y Licores Calientes", ru: "Традиционные румынские напитки и горячие ликёры", ar: "مشروبات رومانية تقليدية ومشروبات ساخنة", it: "Distillati Tradizionali Romeni & Liquori Caldi", fr: "Spiritueux Traditionnels Roumains & Liqueurs Chaudes" },
  "Bitter & Vermout": { ro: "Bitter & Vermout", en: "Bitters & Vermouth", es: "Bitter y Vermut", ru: "Биттеры и вермут", ar: "بيتر وفيرموث", it: "Bitter & Vermouth", fr: "Bitter & Vermouth" },
  "Gin": { ro: "Gin", en: "Gin", es: "Ginebra", ru: "Джин", ar: "جن", it: "Gin", fr: "Gin" },
  "Whisky": { ro: "Whisky", en: "Whisky", es: "Whisky", ru: "Виски", ar: "ويسكي", it: "Whisky", fr: "Whisky" },
  "Rom": { ro: "Rom", en: "Rum", es: "Ron", ru: "Ром", ar: "روم", it: "Rum", fr: "Rhum" },
  "Tequila": { ro: "Tequila", en: "Tequila", es: "Tequila", ru: "Текила", ar: "تكيلا", it: "Tequila", fr: "Tequila" },
  "Vodka": { ro: "Vodka", en: "Vodka", es: "Vodka", ru: "Водка", ar: "فودكا", it: "Vodka", fr: "Vodka" },
  "Cognac": { ro: "Cognac", en: "Cognac", es: "Coñac", ru: "Коньяк", ar: "كونياك", it: "Cognac", fr: "Cognac" },
  "Digestive & Lichior": { ro: "Digestive & Lichior", en: "Digestifs & Liqueurs", es: "Digestivos y Licores", ru: "Дижестивы и ликёры", ar: "مشروبات هاضمة وليكور", it: "Digestivi & Liquori", fr: "Digestifs & Liqueurs" },
  "Bere": { ro: "Bere", en: "Beer", es: "Cerveza", ru: "Пиво", ar: "بيرة", it: "Birra", fr: "Bière" },
  "Bere artizanală din Geoparcul Buzău": { ro: "Bere artizanală din Geoparcul Buzău", en: "Craft Beer from Buzău Geopark", es: "Cerveza artesanal del Geoparque Buzău", ru: "Крафтовое пиво из Геопарка Бузэу", ar: "بيرة حرفية من حديقة بوزاو الجيولوجية", it: "Birra Artigianale dal Geoparco Buzău", fr: "Bière Artisanale du Géoparc Buzău" },
  "Vinuri Albe - România": { ro: "Vinuri Albe - România", en: "White Wines - Romania", es: "Vinos Blancos - Rumanía", ru: "Белые вина — Румыния", ar: "نبيذ أبيض — رومانيا", it: "Vini Bianchi - Romania", fr: "Vins Blancs - Roumanie" },
  "Vinuri Albe - Internaționale": { ro: "Vinuri Albe - Internaționale", en: "White Wines - International", es: "Vinos Blancos - Internacionales", ru: "Белые вина — международные", ar: "نبيذ أبيض — عالمي", it: "Vini Bianchi - Internazionali", fr: "Vins Blancs - Internationaux" },
  "Vinuri Rosé România": { ro: "Vinuri Rosé România", en: "Rosé Wines - Romania", es: "Vinos Rosados - Rumanía", ru: "Розовые вина — Румыния", ar: "نبيذ روزيه — رومانيا", it: "Vini Rosati - Romania", fr: "Vins Rosés - Roumanie" },
  "Vinuri Rosé Internaționale": { ro: "Vinuri Rosé Internaționale", en: "Rosé Wines - International", es: "Vinos Rosados - Internacionales", ru: "Розовые вина — международные", ar: "نبيذ روزيه — عالمي", it: "Vini Rosati - Internazionali", fr: "Vins Rosés - Internationaux" },
  "Vinuri Roșii – România": { ro: "Vinuri Roșii – România", en: "Red Wines - Romania", es: "Vinos Tintos - Rumanía", ru: "Красные вина — Румыния", ar: "نبيذ أحمر — رومانيا", it: "Vini Rossi - Romania", fr: "Vins Rouges - Roumanie" },
  "Vinuri Roșii Internaționale": { ro: "Vinuri Roșii Internaționale", en: "Red Wines - International", es: "Vinos Tintos - Internacionales", ru: "Красные вина — международные", ar: "نبيذ أحمر — عالمي", it: "Vini Rossi - Internazionali", fr: "Vins Rouges - Internationaux" },
  "Vinuri Speciale fără alcool": { ro: "Vinuri Speciale fără alcool", en: "Special Non-Alcoholic Wines", es: "Vinos Especiales sin Alcohol", ru: "Особые безалкогольные вина", ar: "نبيذ خاص بدون كحول", it: "Vini Speciali Analcolici", fr: "Vins Spéciaux Sans Alcool" },
  "Spumante Speciale fără Alcool": { ro: "Spumante Speciale fără Alcool", en: "Special Non-Alcoholic Sparkling Wines", es: "Espumosos Especiales sin Alcohol", ru: "Особые безалкогольные игристые", ar: "نبيذ فوار خاص بدون كحول", it: "Spumanti Speciali Analcolici", fr: "Mousseux Spéciaux Sans Alcool" },
  "Porție individuală": { ro: "Porție individuală", en: "Single Serving", es: "Porción individual", ru: "Индивидуальная порция", ar: "حصة فردية", it: "Porzione singola", fr: "Portion individuelle" },
  "Champagne & Spumante": { ro: "Champagne & Spumante", en: "Champagne & Sparkling", es: "Champán y Espumosos", ru: "Шампанское и игристые", ar: "شامبانيا ونبيذ فوار", it: "Champagne & Spumanti", fr: "Champagne & Mousseux" },
  "Băuturi Răcoritoare": { ro: "Băuturi Răcoritoare", en: "Soft Drinks", es: "Refrescos", ru: "Прохладительные напитки", ar: "مشروبات منعشة", it: "Bibite", fr: "Boissons Rafraîchissantes" },
  "Kombucha & Cocos Natural": { ro: "Kombucha & Cocos Natural", en: "Kombucha & Natural Coconut", es: "Kombucha y Coco Natural", ru: "Комбуча и натуральный кокос", ar: "كومبوتشا وجوز هند طبيعي", it: "Kombucha & Cocco Naturale", fr: "Kombucha & Coco Naturel" },
  "Băuturi Energizante": { ro: "Băuturi Energizante", en: "Energy Drinks", es: "Bebidas Energéticas", ru: "Энергетические напитки", ar: "مشروبات الطاقة", it: "Energy Drink", fr: "Boissons Énergisantes" },
  "Țigări": { ro: "Țigări", en: "Cigarettes", es: "Cigarrillos", ru: "Сигареты", ar: "سجائر", it: "Sigarette", fr: "Cigarettes" },
  "Narghilea": { ro: "Narghilea", en: "Hookah", es: "Cachimba", ru: "Кальян", ar: "نرجيلة", it: "Narghilè", fr: "Chicha" },
};

export function tx(key: string, locale: Locale): string {
  const entry = t[key];
  if (!entry) return key;
  return entry[locale] || entry.ro || key;
}

export function txCategory(name: string, locale: Locale): string {
  const entry = CATEGORY_TX[name];
  if (entry) return entry[locale] || entry.ro || name;
  return name;
}

export function txAllergen(name: string, locale: Locale): string {
  const entry = ALLERGEN_TX[name];
  if (entry) return entry[locale] || entry.ro || name;
  return name;
}
