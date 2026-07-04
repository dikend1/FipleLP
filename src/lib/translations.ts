// Landing-page copy in both languages. `en` is the source of truth for the shape;
// `ru` is typed as `typeof en`, so the compiler flags any missing/extra key.

const en = {
  header: {
    navHow: "How it works",
    navProduct: "Product",
    navMac: "Mac app",
    waitlist: "Join waitlist",
  },
  hero: {
    badge: "Native Mac + iPhone app",
    titleLine1: "One tap back",
    titleLine2Pre: "into your ",
    titleAccent: "flow.",
    subtitle:
      "Fiple turns your iPhone into a launcher for your Mac. Open workspaces, apps, and sites in one tap — without breaking focus.",
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See how it works",
    tags: ["Pairs in seconds", "No account to try", "Works over your network"],
  },
  demo: {
    beats: ["Tap on iPhone", "Mac launches instantly", "Back to your flow"],
    nodes: ["iPhone", "Mac", "Connected"],
    aria: "How Fiple works in three beats",
  },
  how: {
    eyebrow: "Setup",
    titleLine1: "Download once. Pair once.",
    titleLine2: "Launch every day.",
    subtitle:
      "Pairing is the whole setup. With both devices on the same Wi-Fi, your iPhone finds your Mac and connects with a short code — no accounts, no cables.",
    steps: [
      {
        title: "Install Fiple for Mac",
        body: "The Mac app sits in your menu bar and does the launching. Set up your workspaces and Fiple Bar once.",
      },
      {
        title: "Pair your iPhone",
        body: "Open Fiple on your iPhone — it scans your local network for your Mac. Enter the 4-digit code to pair.",
      },
      {
        title: "Tap. Your Mac moves.",
        body: "Run a whole workspace or fire a single app from the Fiple Bar. No windows, docks, or Cmd-Tab.",
      },
    ],
  },
  mac: {
    eyebrow: "The Mac app",
    titleLine1: "Set it up on your Mac.",
    titleLine2: "Run it from your pocket.",
    subtitle:
      "Build your workspaces and Fiple Bar on the big screen. Everything you arrange here is instantly tappable on your iPhone.",
    callouts: [
      {
        title: "Workspaces",
        body: "Group the apps and sites you open together. Run the whole set with one tap.",
      },
      {
        title: "Fiple Bar",
        body: "Pin single apps — Telegram, VS Code, Claude, ChatGPT — for instant one-tap launches.",
      },
      {
        title: "Devices",
        body: "Your paired iPhone shows up live as Connected. Pair, unpair, and manage it from one place.",
      },
    ],
  },
  product: {
    eyebrow: "What you launch",
    title: "Anything on your Mac, one tap away on your iPhone.",
    features: [
      { title: "Apps", body: "Launch any Mac app the instant you tap it — no Dock, no Cmd-Tab." },
      { title: "Websites", body: "Open your saved sites and dashboards straight in your browser." },
      { title: "Workspaces", body: "Bundle apps and sites together — then run the whole set at once." },
      { title: "Fiple Bar", body: "Pin your most-used single apps for true one-tap launches." },
      { title: "Recent", body: "Jump right back to whatever you launched last." },
    ],
  },
  useCases: {
    eyebrow: "Why Fiple",
    title: "Not a remote desktop. Not another dock.",
    subtitle:
      "Fiple is a second command surface for your Mac — the fastest way to start what you were about to do, whoever you are.",
    cards: [
      {
        title: "For builders",
        body: "Editor, terminal, localhost, docs, and your AI assistant — the whole stack from one workspace.",
      },
      {
        title: "For creators",
        body: "Design tools, assets, browser preview, and exports, lined up and ready to fire.",
      },
      {
        title: "For focus",
        body: "Start your writing or study setup in one tap and stop hunting through windows.",
      },
    ],
  },
  download: {
    badge: "Coming soon",
    title: "Be first to get Fiple for Mac & iPhone.",
    subtitle: "Join the beta list now. When the apps ship, this becomes your direct download.",
    emailAria: "Email address",
    submitIdle: "Join waitlist",
    submitting: "Joining…",
    macSoon: "Download for Mac — soon",
    appStoreSoon: "App Store — soon",
    futureAria: "Future downloads",
    status: {
      default: "No spam — just beta access and launch updates.",
      emptyEmail: "Enter your email to join the waitlist.",
      adding: "Adding you to the waitlist…",
      already: "You're already on the list. We'll email you when beta access opens.",
      success: "You're on the list. We'll email you when beta access opens.",
      error: "Something went wrong. Try again, or email us directly.",
    },
  },
  footer: {
    tagline:
      "A native Mac + iPhone app that puts your workspaces one tap away. Built for people who switch context all day.",
    comingSoon: "Coming soon · macOS & iPhone",
    pagesHeading: "Pages",
    pageHome: "Home",
    getItHeading: "Get it",
    getWaitlist: "Join the waitlist",
    getMacSoon: "Mac app — soon",
    getAppStoreSoon: "App Store — soon",
    legalHeading: "Legal & support",
    legalSupport: "Help & Support",
    legalPrivacy: "Privacy Policy",
    legalTerms: "Terms of Service",
    copyright: "© 2026 Fiple. All rights reserved.",
    made: "Made for Mac · ⌘K speed, from your pocket",
  },
  legalPage: {
    back: "Back to home",
    updated: "Last updated",
  },
  langToggle: {
    aria: "Language",
  },
};

const ru: typeof en = {
  header: {
    navHow: "Как это работает",
    navProduct: "Возможности",
    navMac: "Приложение для Mac",
    waitlist: "В список ожидания",
  },
  hero: {
    badge: "Нативное приложение для Mac и iPhone",
    titleLine1: "Одним касанием ",
    titleLine2Pre: "снова в ",
    titleAccent: "потоке.",
    subtitle:
      "Fiple превращает ваш iPhone в пульт запуска для Mac. Открывайте рабочие пространства, приложения и сайты одним касанием — не отвлекаясь от дела.",
    ctaPrimary: "В список ожидания",
    ctaSecondary: "Как это работает",
    tags: ["Подключение за секунды", "Без регистрации", "Работает по вашей сети"],
  },
  demo: {
    beats: ["Тап на iPhone", "Mac запускает мгновенно", "Снова в потоке"],
    nodes: ["iPhone", "Mac", "Подключено"],
    aria: "Как Fiple работает в три шага",
  },
  how: {
    eyebrow: "Настройка",
    titleLine1: "Установите один раз. Подключите один раз.",
    titleLine2: "Запускайте каждый день.",
    subtitle:
      "Вся настройка — это сопряжение. Когда оба устройства в одной сети Wi-Fi, iPhone находит ваш Mac и подключается по короткому коду — без аккаунтов и кабелей.",
    steps: [
      {
        title: "Установите Fiple для Mac",
        body: "Приложение для Mac живёт в строке меню и выполняет запуск. Настройте рабочие пространства и Fiple Bar один раз.",
      },
      {
        title: "Подключите iPhone",
        body: "Откройте Fiple на iPhone — он найдёт ваш Mac в локальной сети. Введите 4-значный код для сопряжения.",
      },
      {
        title: "Тап — и Mac действует.",
        body: "Запустите целое рабочее пространство или одно приложение из Fiple Bar. Без окон, дока и Cmd-Tab.",
      },
    ],
  },
  mac: {
    eyebrow: "Приложение для Mac",
    titleLine1: "Настройте на Mac.",
    titleLine2: "Запускайте из кармана.",
    subtitle:
      "Собирайте рабочие пространства и Fiple Bar на большом экране. Всё, что вы здесь настроите, мгновенно доступно по тапу на iPhone.",
    callouts: [
      {
        title: "Рабочие пространства",
        body: "Объедините приложения и сайты, которые открываете вместе. Запускайте весь набор одним тапом.",
      },
      {
        title: "Fiple Bar",
        body: "Закрепите отдельные приложения — Telegram, VS Code, Claude, ChatGPT — для мгновенного запуска одним тапом.",
      },
      {
        title: "Устройства",
        body: "Подключённый iPhone отображается как Connected. Подключайте, отключайте и управляйте из одного места.",
      },
    ],
  },
  product: {
    eyebrow: "Что вы запускаете",
    title: "Что угодно на вашем Mac в одном тапе на iPhone.",
    features: [
      { title: "Приложения", body: "Запускайте любое приложение Mac в момент тапа — без дока и Cmd-Tab." },
      { title: "Сайты", body: "Открывайте сохранённые сайты и дашборды прямо в браузере." },
      { title: "Рабочие пространства", body: "Соберите приложения и сайты вместе — и запускайте весь набор сразу." },
      { title: "Fiple Bar", body: "Закрепите самые нужные приложения для запуска в один тап." },
      { title: "Недавние", body: "Мгновенно вернитесь к тому, что запускали последним." },
    ],
  },
  useCases: {
    eyebrow: "Почему Fiple",
    title: "Не удалённый рабочий стол. И не ещё один док.",
    subtitle:
      "Fiple — это вторая панель управления вашим Mac: самый быстрый способ начать то, что вы собирались сделать, кем бы вы ни были.",
    cards: [
      {
        title: "Для разработчиков",
        body: "Редактор, терминал, localhost, документация и AI-ассистент — весь стек из одного рабочего пространства.",
      },
      {
        title: "Для креаторов",
        body: "Дизайн-инструменты, ассеты, превью в браузере и экспорт — всё под рукой и готово к запуску.",
      },
      {
        title: "Для концентрации",
        body: "Запустите окружение для письма или учёбы одним тапом — и хватит искать по окнам.",
      },
    ],
  },
  download: {
    badge: "Скоро",
    title: "Получите Fiple для Mac и iPhone первыми.",
    subtitle: "Записывайтесь в бета-лист сейчас. Когда приложения выйдут, отсюда можно будет скачать напрямую.",
    emailAria: "Адрес эл. почты",
    submitIdle: "В список ожидания",
    submitting: "Добавляем…",
    macSoon: "Скачать для Mac — скоро",
    appStoreSoon: "App Store — скоро",
    futureAria: "Будущие загрузки",
    status: {
      default: "Без спама — только бета-доступ и новости о запуске.",
      emptyEmail: "Введите email, чтобы попасть в список ожидания.",
      adding: "Добавляем вас в список ожидания…",
      already: "Вы уже в списке. Мы напишем, когда откроется бета-доступ.",
      success: "Вы в списке. Мы напишем, когда откроется бета-доступ.",
      error: "Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.",
    },
  },
  footer: {
    tagline:
      "Нативное приложение для Mac и iPhone, которое держит ваши рабочие пространства в одном тапе. Для тех, кто весь день переключает контекст.",
    comingSoon: "Скоро · macOS и iPhone",
    pagesHeading: "Страницы",
    pageHome: "Главная",
    getItHeading: "Загрузка",
    getWaitlist: "Список ожидания",
    getMacSoon: "Mac — скоро",
    getAppStoreSoon: "App Store — скоро",
    legalHeading: "Правовое и поддержка",
    legalSupport: "Помощь и поддержка",
    legalPrivacy: "Политика конфиденциальности",
    legalTerms: "Условия использования",
    copyright: "© 2026 Fiple. Все права защищены.",
    made: "Сделано для Mac · скорость ⌘K из вашего кармана",
  },
  legalPage: {
    back: "На главную",
    updated: "Обновлено",
  },
  langToggle: {
    aria: "Язык",
  },
};

const kz: typeof en = {
  header: {
    navHow: "Қалай жұмыс істейді",
    navProduct: "Мүмкіндіктер",
    navMac: "Mac қосымшасы",
    waitlist: "Тізімге қосылу",
  },
  hero: {
    badge: "Mac пен iPhone-ға арналған нативті қосымша",
    titleLine1: "Бір түртумен ",
    titleLine2Pre: "қайта ",
    titleAccent: "ағыныңызда.",
    subtitle:
      "Fiple iPhone-ды Mac-ты іске қосу пультіне айналдырады. Жұмыс кеңістіктерін, қосымшаларды және сайттарды бір түртумен ашыңыз — назарыңызды бұзбай.",
    ctaPrimary: "Тізімге қосылу",
    ctaSecondary: "Қалай жұмыс істейтінін көру",
    tags: ["Секундтарда жұпталады", "Тіркелудің қажеті жоқ", "Сіздің желіңізде жұмыс істейді"],
  },
  demo: {
    beats: ["iPhone-да түртіңіз", "Mac бірден іске қосылады", "Қайта ағыныңызда"],
    nodes: ["iPhone", "Mac", "Connected"],
    aria: "Fiple үш қадаммен қалай жұмыс істейді",
  },
  how: {
    eyebrow: "Баптау",
    titleLine1: "Бір рет жүктеңіз. Бір рет жұптаңыз.",
    titleLine2: "Күн сайын іске қосыңыз.",
    subtitle:
      "Барлық баптау — бұл жұптау. Екі құрылғы бір Wi-Fi желісінде болғанда, iPhone сіздің Mac-ты тауып, қысқа код арқылы жалғанады — аккаунтсыз және кабельсіз.",
    steps: [
      {
        title: "Fiple-ды Mac-қа орнатыңыз",
        body: "Mac қосымшасы мәзір жолағында тұрып, іске қосуды атқарады. Жұмыс кеңістіктері мен Fiple Bar-ды бір рет баптаңыз.",
      },
      {
        title: "iPhone-ды жұптаңыз",
        body: "iPhone-да Fiple-ды ашыңыз — ол жергілікті желіден Mac-ты іздейді. Жұптау үшін 4 таңбалы кодты енгізіңіз.",
      },
      {
        title: "Түртіңіз. Mac әрекет етеді.",
        body: "Бүкіл жұмыс кеңістігін немесе Fiple Bar-дан бір қосымшаны іске қосыңыз. Терезесіз, доксыз, Cmd-Tab-сыз.",
      },
    ],
  },
  mac: {
    eyebrow: "Mac қосымшасы",
    titleLine1: "Mac-та баптаңыз.",
    titleLine2: "Қалтаңыздан іске қосыңыз.",
    subtitle:
      "Жұмыс кеңістіктері мен Fiple Bar-ды үлкен экранда жинаңыз. Мұнда баптағаныңыздың бәрі iPhone-да бір түртумен қолжетімді.",
    callouts: [
      {
        title: "Жұмыс кеңістіктері",
        body: "Бірге ашатын қосымшаларды және сайттарды топтаңыз. Бүкіл жиынтықты бір түртумен іске қосыңыз.",
      },
      {
        title: "Fiple Bar",
        body: "Жеке қосымшаларды бекітіңіз — Telegram, VS Code, Claude, ChatGPT — бір түртумен лезде іске қосу үшін.",
      },
      {
        title: "Құрылғылар",
        body: "Жұпталған iPhone тікелей Connected деп көрінеді. Бір жерден жұптаңыз, ажыратыңыз және басқарыңыз.",
      },
    ],
  },
  product: {
    eyebrow: "Не іске қосасыз",
    title: "Mac-тағы кез келген нәрсе iPhone-да бір түртуде.",
    features: [
      { title: "Қосымшалар", body: "Кез келген Mac қосымшасын түрткен сәтте іске қосыңыз — доксыз, Cmd-Tab-сыз." },
      { title: "Сайттар", body: "Сақталған сайттарыңыз бен дашбордтарды тікелей браузерде ашыңыз." },
      { title: "Жұмыс кеңістіктері", body: "Қосымшаларды және сайттарды біріктіріп — бүкіл жиынтықты бірден іске қосыңыз." },
      { title: "Fiple Bar", body: "Ең қажет қосымшаларды бекітіп, бір түртумен іске қосыңыз." },
      { title: "Соңғылар", body: "Ең соңғы іске қосқаныңызға лезде оралыңыз." },
    ],
  },
  useCases: {
    eyebrow: "Неге Fiple",
    title: "Қашықтағы жұмыс үстелі емес. Тағы бір док та емес.",
    subtitle:
      "Fiple — Mac-ыңыз үшін екінші басқару беті: кім болсаңыз да, жасамақ болған ісіңізді бастаудың ең жылдам жолы.",
    cards: [
      {
        title: "Құрастырушыларға",
        body: "Редактор, терминал, localhost, құжаттама және AI-көмекші — бүкіл стек бір жұмыс кеңістігінен.",
      },
      {
        title: "Креаторларға",
        body: "Дизайн құралдары, ассеттер, браузердегі превью және экспорт — бәрі қолжетімді әрі іске қосуға дайын.",
      },
      {
        title: "Шоғырлануға",
        body: "Жазу немесе оқу ортасын бір түртумен бастаңыз — терезелерден іздеуді доғарыңыз.",
      },
    ],
  },
  download: {
    badge: "Жақында",
    title: "Fiple-ды Mac пен iPhone-ға бірінші болып алыңыз.",
    subtitle: "Қазір бета-тізімге жазылыңыз. Қосымшалар шыққанда осы жерден тікелей жүктей аласыз.",
    emailAria: "Электрондық пошта",
    submitIdle: "Тізімге қосылу",
    submitting: "Қосылуда…",
    macSoon: "Mac-қа жүктеу — жақында",
    appStoreSoon: "App Store — жақында",
    futureAria: "Болашақ жүктеулер",
    status: {
      default: "Спамсыз — тек бета-қатынас пен шығарылым жаңалықтары.",
      emptyEmail: "Тізімге қосылу үшін email енгізіңіз.",
      adding: "Сізді тізімге қосудамыз…",
      already: "Сіз тізімдесіз. Бета-қатынас ашылғанда хат жібереміз.",
      success: "Сіз тізімдесіз. Бета-қатынас ашылғанда хат жібереміз.",
      error: "Бірдеңе дұрыс болмады. Қайта көріңіз немесе бізге тікелей жазыңыз.",
    },
  },
  footer: {
    tagline:
      "Жұмыс кеңістіктеріңізді бір түртуде ұстайтын Mac пен iPhone-ға арналған нативті қосымша. Күні бойы контекст ауыстыратындарға арналған.",
    comingSoon: "Жақында · macOS және iPhone",
    pagesHeading: "Беттер",
    pageHome: "Басты бет",
    getItHeading: "Жүктеу",
    getWaitlist: "Күту тізіміне",
    getMacSoon: "Mac қосымшасы — жақында",
    getAppStoreSoon: "App Store — жақында",
    legalHeading: "Құқық және қолдау",
    legalSupport: "Көмек және қолдау",
    legalPrivacy: "Құпиялылық саясаты",
    legalTerms: "Пайдалану шарттары",
    copyright: "© 2026 Fiple. Барлық құқық қорғалған.",
    made: "Mac үшін жасалған · қалтаңыздан ⌘K жылдамдығы",
  },
  legalPage: {
    back: "Басты бетке",
    updated: "Жаңартылды",
  },
  langToggle: {
    aria: "Тіл",
  },
};

export type Messages = typeof en;

export const messages: Record<"en" | "ru" | "kz", Messages> = { en, ru, kz };
