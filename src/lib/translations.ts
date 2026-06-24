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
      "Fiple turns your iPhone into a launcher for your Mac. Open workspaces, apps, and shortcuts in one tap — without breaking focus.",
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See how it works",
    tags: ["Pairs in seconds", "No account to try", "Works over your network"],
  },
  demo: {
    beats: ["Tap on iPhone", "Mac launches instantly", "Back to your flow"],
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
        body: "Group the apps, sites, and shortcuts you open together. Run the whole set with one tap.",
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
      { title: "Shortcuts", body: "Fire macOS Shortcuts and custom workflows from your phone." },
      { title: "Workspaces", body: "Bundle apps, sites, and shortcuts together — then run the whole set at once." },
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
        body: "Design tools, assets, browser preview, and export shortcuts, lined up and ready to fire.",
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
    titleLine1: "Одним касанием —",
    titleLine2Pre: "снова в ",
    titleAccent: "потоке.",
    subtitle:
      "Fiple превращает ваш iPhone в пульт запуска для Mac. Открывайте рабочие пространства, приложения и шорткаты одним касанием — не отвлекаясь от дела.",
    ctaPrimary: "В список ожидания",
    ctaSecondary: "Как это работает",
    tags: ["Подключение за секунды", "Без регистрации", "Работает по вашей сети"],
  },
  demo: {
    beats: ["Тап на iPhone", "Mac запускает мгновенно", "Снова в потоке"],
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
        body: "Объедините приложения, сайты и шорткаты, которые открываете вместе. Запускайте весь набор одним тапом.",
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
    title: "Что угодно на вашем Mac — в одном тапе на iPhone.",
    features: [
      { title: "Приложения", body: "Запускайте любое приложение Mac в момент тапа — без дока и Cmd-Tab." },
      { title: "Сайты", body: "Открывайте сохранённые сайты и дашборды прямо в браузере." },
      { title: "Шорткаты", body: "Запускайте команды macOS и свои сценарии прямо с телефона." },
      { title: "Рабочие пространства", body: "Соберите приложения, сайты и шорткаты вместе — и запускайте весь набор сразу." },
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
        body: "Дизайн-инструменты, ассеты, превью в браузере и шорткаты экспорта — всё под рукой и готово к запуску.",
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

export type Messages = typeof en;

export const messages: Record<"en" | "ru", Messages> = { en, ru };
