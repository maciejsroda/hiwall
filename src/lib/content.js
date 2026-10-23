/**
 * Każde miejsce ze zdjęciem ma własny wpis i własny adres zdjęcia.
 * Dzięki temu podmiana jednego zdjęcia nie zmienia pozostałych.
 */
export const IMAGES = {
  // Logo marki — docelowy plik logo (podmień tutaj, aby zmienić logo w całym serwisie)
  logo: "https://media.base44.com/images/public/6ada23814ca191b088e6074c/0f0c6ee41_logo.webp",

  // Strona główna
  home_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/026caaf82_848933567_1650287800126582_433413749947085131_n.jpg",
  home_brand:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/442c3a7d1_697095009_1513825950439435_3990732475043632697_n.jpg",
  service_kitchen:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/17d0bd563_655127723_1469270118228352_4457180546474638118_n.jpg",
  service_wardrobe:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/fb924e034_773580838_1594556379033058_5476347865145775015_n.jpg",
  service_furniture:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/374abf11b_573052051_1362494178905947_7016794148815359697_n1.jpg",
  home_statement:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg",

  // Kuchnie na wymiar
  kuchnie_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/a12210257_697120413_1513825807106116_4691554920030265102_n__1_.jpg",
  kuchnie_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/1088bc40a_849059130_1650294100125952_1195815505646450953_n.jpg",

  // Meble na wymiar
  meble_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg",
  meble_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/275eb1db1_772495449_1594548362367193_1683082271444441166_n.jpg",

  // Realizacje
  realizacje_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/623cfa15b_697112549_1513825953772768_7416641211726081607_n.jpg",

  // O firmie
  ofirmie_hero:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/326a30c99_574345839_1362488268906538_5080107212770132872_n2.jpg",
  ofirmie_story:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/06e87a0ce_772889348_1594542979034398_2475049799088168571_n.jpg",

  // Portfolio (używane, gdy baza realizacji jest pusta)
  project_1:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/026caaf82_848933567_1650287800126582_433413749947085131_n.jpg",
  project_2:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/fb924e034_773580838_1594556379033058_5476347865145775015_n.jpg",
  project_3:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/1307dc55e_73286c9b-0afe-4a94-8a0e-cc191d5ebac6.jpeg",
  project_4:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/17d0bd563_655127723_1469270118228352_4457180546474638118_n.jpg",
  project_5:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/326a30c99_574345839_1362488268906538_5080107212770132872_n2.jpg",
  project_6:
    "https://media.base44.com/images/public/6ada23814ca191b088e6074c/275eb1db1_772495449_1594548362367193_1683082271444441166_n.jpg",
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
 * Realizacje HiWall. Ten zestaw jest pokazywany wtedy, gdy baza realizacji
 * jest pusta — na co dzień galeria korzysta z danych z panelu.
 */
export const DEMO_PROJECTS = [
  {
    id: "demo-1",
    title: "Kuchnia w dębie i matowej bieli",
    category: "Kuchnie",
    description: "Układ L z dębowymi frontami dolnymi, czarnymi uchwytami i podświetleniem blatu.",
    location: "Wrocław",
    image: IMAGES.project_1,
    alt: "Kuchnia na wymiar w dębie i matowej bieli z czarnymi uchwytami",
    featured: true,
    order: 1,
  },
  {
    id: "demo-2",
    title: "Garderoba z zabudową do sufitu",
    category: "Szafy i zabudowy",
    description: "Biała zabudowa z szufladami, drążkami i narożnym segmentem z półkami.",
    location: "Wrocław",
    image: IMAGES.project_2,
    alt: "Garderoba na wymiar z białą zabudową do sufitu i czarnymi uchwytami",
    featured: true,
    order: 2,
  },
  {
    id: "demo-3",
    title: "Ściana meblowa z podświetlaną niszą",
    category: "Meble na wymiar",
    description: "Zabudowa od podłogi do sufitu z ukrytym oświetleniem niszy i szufladami.",
    location: "Wrocław",
    image: IMAGES.project_3,
    alt: "Zabudowa ściany w salonie z podświetlaną niszą i szufladami",
    featured: true,
    order: 3,
  },
  {
    id: "demo-4",
    title: "Kuchnia z otwartą półką i zabudową AGD",
    category: "Kuchnie",
    description: "Dębowe półki, słup z zabudowanym piekarnikiem i biała strefa robocza.",
    location: "Wrocław",
    image: IMAGES.project_4,
    alt: "Kuchnia na wymiar z otwartymi dębowymi półkami i zabudowanym piekarnikiem",
    featured: false,
    order: 4,
  },
  {
    id: "demo-5",
    title: "Szafa w sypialni z otwartymi półkami",
    category: "Szafy i zabudowy",
    description: "Zamknięta zabudowa z szufladami i otwartymi regałami po bokach.",
    location: "Wrocław",
    image: IMAGES.project_5,
    alt: "Szafa na wymiar z otwartymi półkami w sypialni",
    featured: false,
    order: 5,
  },
  {
    id: "demo-6",
    title: "Meble łazienkowe na wymiar",
    category: "Meble na wymiar",
    description: "Szafki z dębowymi obrzeżami, otwarta nisza i zabudowa słupa.",
    location: "Wrocław",
    image: IMAGES.project_6,
    alt: "Meble łazienkowe na wymiar z dębowymi obrzeżami i otwartą półką",
    featured: false,
    order: 6,
  },
];

export const PROJECT_CATEGORIES = ["Kuchnie", "Szafy i zabudowy", "Meble na wymiar"];