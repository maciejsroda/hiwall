/**
 * Każde miejsce ze zdjęciem ma własny wpis i własny adres zdjęcia.
 * Dzięki temu podmiana jednego zdjęcia nie zmienia pozostałych.
 */
export const IMAGES = {
  // Logo marki — podmień na docelowy plik logo
  logo: "https://media.base44.com/images/public/6ada23814ca191b088e6074c/f3d5a190c_generated_image.png",

  // Strona główna
  home_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/ba16f2471_792090277_1614687347019961_4250369707302175378_n.jpg",
  home_brand:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/c61af5d02_generated_80dd20bf.png",
  service_kitchen:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/6112f8b26_generated_c423a7b6.png",
  service_wardrobe:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/0b381dcc5_generated_4357670a.png",
  service_furniture:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/cb4a4bc4a_generated_1c0059e2.png",
  home_statement:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/40eb676d9_generated_cb0706f7.png",

  // Kuchnie na wymiar
  kuchnie_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/6112f8b26_generated_c423a7b6.png",
  kuchnie_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/22427b18d_generated_090da19e.png",

  // Meble na wymiar
  meble_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/0b381dcc5_generated_4357670a.png",
  meble_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/db4a58cd2_generated_2818944c.png",

  // Realizacje
  realizacje_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/40eb676d9_generated_cb0706f7.png",

  // O firmie
  ofirmie_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/7d7e79454_generated_c234e517.png",
  ofirmie_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/c61af5d02_generated_80dd20bf.png",

  // Portfolio demonstracyjne (używane, gdy baza realizacji jest pusta)
  project_1:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/22427b18d_generated_090da19e.png",
  project_2:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/f9ad19377_generated_cf26e49d.png",
  project_3:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/96dc64860_generated_63cd47b7.png",
  project_4:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/7d7e79454_generated_c234e517.png",
  project_5:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/6112f8b26_generated_c423a7b6.png",
  project_6:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/54d716454_generated_60f67ba1.png",
};

export const SERVICES = [
  {
    number: "01",
    title: "Kuchnie na wymiar",
    description:
      "Przemyślane układy, dopasowana zabudowa i estetyka, która współgra z całym wnętrzem. Kuchnie projektowane z myślą o komforcie codziennego użytkowania.",
  },
  {
    number: "02",
    title: "Szafy i zabudowy",
    description:
      "Indywidualne zabudowy pozwalające lepiej wykorzystać dostępną przestrzeń. Rozwiązania dopasowane do wymiarów pomieszczenia i potrzeb domowników.",
  },
  {
    number: "03",
    title: "Meble na wymiar",
    description:
      "Meble tworzone z myślą o konkretnej przestrzeni, funkcji i estetyce. Rozwiązania, które pomagają zachować spójny charakter wnętrza.",
  },
];

export const VALUES = [
  {
    title: "Indywidualne dopasowanie",
    description:
      "Każda przestrzeń i potrzeby użytkowników są inne. Projekt uwzględnia rzeczywiste wymiary i sposób korzystania z wnętrza.",
  },
  {
    title: "Funkcjonalność na co dzień",
    description:
      "Rozwiązania wspierają wygodę użytkowania i racjonalne zagospodarowanie dostępnego miejsca.",
  },
  {
    title: "Spójna estetyka",
    description:
      "Materiały, proporcje i wykończenia tworzą harmonijną całość z charakterem wnętrza.",
  },
  {
    title: "Dbałość o szczegóły",
    description:
      "Przemyślane detale wpływają na odbiór i codzienną funkcjonalność mebli.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Rozmowa",
    description: "Poznanie potrzeb, oczekiwań i charakteru wnętrza.",
  },
  {
    number: "02",
    title: "Ustalenia projektowe",
    description: "Omówienie rozwiązań, wymiarów, materiałów i zakresu zamówienia.",
  },
  {
    number: "03",
    title: "Realizacja",
    description: "Przygotowanie mebli zgodnie z uzgodnionymi ustaleniami.",
  },
  {
    number: "04",
    title: "Finalizacja",
    description: "Montaż i zakończenie prac, jeśli są częścią zamówienia.",
  },
];

export const HOME_FAQ = [
  {
    question: "Jak rozpocząć współpracę z HiWall?",
    answer:
      "Najprościej: wyślij zapytanie przez formularz kontaktowy lub zadzwoń. Opisz krótko swoje wnętrze i potrzeby — wrócimy do Ciebie, aby ustalić szczegóły i kolejne kroki.",
  },
  {
    question: "Jakie informacje przygotować przed zapytaniem o wycenę?",
    answer:
      "Rodzaj mebli, przybliżone wymiary pomieszczenia, miejsce realizacji oraz zdjęcia lub inspiracje. Jeśli nie masz wymiarów — to nie problem, sposób pomiaru ustalamy indywidualnie.",
  },
  {
    question: "Czy można zamówić meble do nietypowego pomieszczenia?",
    answer:
      "Tak. Meble na wymiar projektujemy właśnie po to, aby dopasować zabudowę do skosów, wnęk, słupów i ograniczonej przestrzeni. Każdy układ ustalamy indywidualnie.",
  },
  {
    question: "Jak wygląda ustalanie wymiarów i zakresu projektu?",
    answer:
      "Zakres prac, sposób pomiaru, materiały i montaż omawiamy bezpośrednio podczas rozmowy o projekcie. Szczegóły ustalamy indywidualnie dla każdego wnętrza.",
  },
  {
    question: "Czy HiWall realizuje zamówienia poza Wrocławiem?",
    answer:
      "Działamy na terenie Wrocławia i okolic. Jeśli Twoja inwestycja znajduje się dalej, napisz — potwierdzimy, czy realizacja jest możliwa.",
  },
  {
    question: "Od czego zależy koszt mebli na wymiar?",
    answer:
      "Na koszt wpływają wymiary i układ zabudowy, wybrane materiały i fronty, okucia oraz zakres prac. Konkretną wycenę ustalamy po poznaniu projektu — skontaktuj się z nami, aby omówić szczegóły.",
  },
];

export const KITCHEN_FAQ = [
  {
    question: "Jak projektowana jest kuchnia na wymiar?",
    answer:
      "Zaczynamy od rozmowy o potrzebach i sposobie gotowania, następnie ustalamy układ, wymiary i materiały. Projekt dopasowujemy do konkretnego pomieszczenia — jego proporcji, okien, przyłączy i wysokości.",
  },
  {
    question: "Czy zabudowa może sięgać sufitu?",
    answer:
      "Tak. Zabudowa do sufitu pozwala wykorzystać pełną wysokość pomieszczenia, ukryć instalacje i zachować spokojną, uporządkowaną linię frontów.",
  },
  {
    question: "Jakie materiały i fronty są dostępne?",
    answer:
      "Zakres materiałów, frontów i okuć ustalamy indywidualnie podczas rozmowy o projekcie — tak, aby wybór odpowiadał charakterowi wnętrza i sposobowi użytkowania kuchni.",
  },
  {
    question: "Czy pomagacie w doborze rozwiązań do wąskiej kuchni?",
    answer:
      "Tak. W małych i nietypowych kuchniach liczy się każdy centymetr — dobieramy układy, głębokości i rozwiązania przechowywania dopasowane do dostępnej przestrzeni.",
  },
  {
    question: "Ile trwa realizacja kuchni?",
    answer:
      "Terminy ustalamy indywidualnie na etapie rozmowy i potwierdzamy w ustaleniach projektowych. Nie podajemy sztywnych terminów, zanim nie poznamy zakresu prac.",
  },
];

export const FURNITURE_FAQ = [
  {
    question: "Jakie meble można wykonać na wymiar?",
    answer:
      "Szafy, garderoby, zabudowy wnęk, meble do salonu i jadalni, biurka, półki oraz inne rozwiązania dopasowane do konkretnego pomieszczenia.",
  },
  {
    question: "Czy meble można dopasować do skosów i wnęk?",
    answer:
      "Tak. Nietypowe kształty pomieszczeń są jednym z głównych powodów, dla których warto wybrać meble na wymiar — zabudowa powstaje dokładnie pod wymiary wnętrza.",
  },
  {
    question: "Czy istnieje możliwość zachowania spójności z istniejącymi meblami?",
    answer:
      "Tak. Kolorystykę, materiały i proporcje nowej zabudowy ustalamy tak, aby współgrały z tym, co już znajduje się we wnętrzu.",
  },
  {
    question: "Jak zamówić meble na wymiar?",
    answer:
      "Wyślij zapytanie przez formularz lub skontaktuj się telefonicznie. Opisz pomieszczenie i oczekiwania, a my wrócimy do Ciebie z kolejnymi krokami.",
  },
];

/**
 * Materiały demonstracyjne. Zdjęcia i opisy są tymczasowe — zostaną zastąpione
 * rzeczywistymi realizacjami HiWall (bez zmian w kodzie strony).
 */
export const DEMO_PROJECTS = [
  {
    id: "demo-1",
    title: "Kuchnia z wyspą w naturalnym dębie",
    category: "Kuchnie",
    description: "Zabudowa do sufitu, kamienny blat i spokojna linia frontów.",
    location: "Wrocław",
    image: IMAGES.project_1,
    alt: "Demonstracyjne zdjęcie kuchni z wyspą w naturalnym dębie",
    featured: true,
    order: 1,
  },
  {
    id: "demo-2",
    title: "Garderoba z zabudową do sufitu",
    category: "Szafy i zabudowy",
    description: "Wnętrze uporządkowane pod konkretny sposób przechowywania.",
    location: "Wrocław",
    image: IMAGES.project_2,
    alt: "Demonstracyjne zdjęcie garderoby z zabudową do sufitu",
    featured: true,
    order: 2,
  },
  {
    id: "demo-3",
    title: "Jadalnia z zabudową na wymiar",
    category: "Meble na wymiar",
    description: "Kredens i półki dopasowane do proporcji pomieszczenia.",
    location: "Wrocław",
    image: IMAGES.project_3,
    alt: "Demonstracyjne zdjęcie jadalni z zabudową na wymiar",
    featured: true,
    order: 3,
  },
  {
    id: "demo-4",
    title: "Zabudowa przedpokoju z siedziskiem",
    category: "Szafy i zabudowy",
    description: "Miejsce na kurtki, obuwie i codzienne drobiazgi.",
    location: "Wrocław",
    image: IMAGES.project_4,
    alt: "Demonstracyjne zdjęcie zabudowy przedpokoju z siedziskiem",
    featured: false,
    order: 4,
  },
  {
    id: "demo-5",
    title: "Kuchnia w ciepłych, matowych frontach",
    category: "Kuchnie",
    description: "Otwarta nisza w dębie i stonowana kolorystyka.",
    location: "Wrocław",
    image: IMAGES.project_5,
    alt: "Demonstracyjne zdjęcie kuchni w ciepłych matowych frontach",
    featured: false,
    order: 5,
  },
  {
    id: "demo-6",
    title: "Kącik do pracy w zabudowie",
    category: "Meble na wymiar",
    description: "Biurko i półki wbudowane w ścianę bez utraty przestrzeni.",
    location: "Wrocław",
    image: IMAGES.project_6,
    alt: "Demonstracyjne zdjęcie kącika do pracy w zabudowie",
    featured: false,
    order: 6,
  },
];

export const PROJECT_CATEGORIES = ["Kuchnie", "Szafy i zabudowy", "Meble na wymiar"];