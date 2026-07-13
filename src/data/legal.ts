export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type Section = { heading: string; blocks: Block[] };
export type LegalDoc = {
  eyebrow: string;
  title: string;
  tagline: string;
  updated?: string;
  sections: Section[];
};
export type LegalKey = "privacy" | "terms" | "support";
type Lang = "en" | "ru" | "kz";

export const SUPPORT_EMAIL = "support@fiple.app";
const UPDATED_EN = "July 14, 2026";
const UPDATED_RU = "14 июля 2026";
const UPDATED_KZ = "2026 жылғы 14 шілде";

const en: Record<LegalKey, LegalDoc> = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    tagline: "Fiple respects your privacy.",
    updated: UPDATED_EN,
    sections: [
      {
        heading: "Information stored on your devices",
        blocks: [
          { type: "p", text: "Fiple does not require an account." },
          { type: "p", text: "Your workspaces, selected apps, website links, launch history, preferences, and pairing information are stored locally on your iPhone and Mac." },
          { type: "p", text: "This information is exchanged directly between your paired devices when needed for Fiple to function. Fiple does not upload or store this information on Fiple servers." },
        ],
      },
      {
        heading: "Local network communication",
        blocks: [
          { type: "p", text: "Fiple uses your local network to communicate directly between your paired iPhone and Mac." },
          { type: "p", text: "This communication is used only to pair your devices, synchronize Fiple content, and send commands that you initiate." },
        ],
      },
      {
        heading: "Apps on your Mac",
        blocks: [
          { type: "p", text: "To let you build tiles, Fiple reads the list of applications installed on your Mac." },
          { type: "p", text: "This information stays on your Mac and is never sent anywhere." },
        ],
      },
      {
        heading: "Website icons",
        blocks: [
          { type: "p", text: "When displaying icons for websites, Fiple may request favicon images from Google's Favicon Service. This request is made directly from your device to Google, not through Fiple servers." },
          { type: "p", text: "As part of that request, Google may receive the website domain and standard network information, such as your IP address." },
          { type: "p", text: "Fiple does not store the website domain or network information from these requests. Google processes this information according to Google's Privacy Policy." },
        ],
      },
      {
        heading: "Files you review with Smart Trash",
        blocks: [
          { type: "p", text: "When you use Smart Trash, Fiple reads the files and folders you choose to review so you can see them on your iPhone and decide what to move to the Trash." },
          { type: "p", text: "This information is exchanged directly between your paired devices over your local network and stays on your Mac. Fiple does not upload your files or their contents to any server." },
        ],
      },
      {
        heading: "Terminal commands",
        blocks: [
          { type: "p", text: "In the direct-download Mac build, Fiple lets you run terminal commands on your Mac from your iPhone." },
          { type: "p", text: "The commands you type and their output travel directly between your paired devices over your local network. They are not sent to or stored on Fiple servers." },
        ],
      },
      {
        heading: "Purchases",
        blocks: [
          { type: "p", text: "Fiple Pro is purchased through Apple's App Store. Payments are processed by Apple in accordance with Apple's Privacy Policy." },
          { type: "p", text: "To validate and restore your purchase, Fiple uses RevenueCat as a service provider. RevenueCat receives a random, app-generated identifier and your App Store purchase information to manage your subscription status. This information is not linked to your name, and Fiple does not use it for advertising." },
        ],
      },
      {
        heading: "Analytics and tracking",
        blocks: [
          { type: "p", text: "Fiple does not use advertising, tracking technologies, or third-party analytics SDKs in its iPhone or Mac applications." },
        ],
      },
      {
        heading: "Email updates",
        blocks: [
          { type: "p", text: "The Fiple website may offer an optional email updates list." },
          { type: "p", text: "If you choose to subscribe, we collect your email address to send occasional product updates and announcements." },
          { type: "p", text: "Your email address is securely stored using Supabase, our service provider for operating the email list. We never sell or share your email address for advertising." },
          { type: "p", text: "You may unsubscribe at any time using the unsubscribe link included in our emails or by contacting us directly. Upon request, we will delete your email address from our records." },
        ],
      },
      {
        heading: "Your choices",
        blocks: [
          { type: "p", text: "You can disconnect paired devices within Fiple to remove pairing information." },
          { type: "p", text: "Because Fiple does not have access to your locally stored app data, you can manage or remove other local data using your device's standard app management tools." },
        ],
      },
      {
        heading: "Children",
        blocks: [
          { type: "p", text: "Fiple is not directed to children under 13 and does not knowingly collect personal information from them." },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          { type: "p", text: "For privacy-related questions or requests, contact:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Owner: Dias Maksatov, Kazakhstan" },
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    tagline: "The agreement for using the Fiple apps.",
    updated: UPDATED_EN,
    sections: [
      {
        heading: "Acceptance of terms",
        blocks: [
          { type: "p", text: "By downloading, installing, or using the Fiple applications, you agree to these Terms of Service." },
          { type: "p", text: "If you do not agree with these terms, please do not use Fiple." },
        ],
      },
      {
        heading: "Description of service",
        blocks: [
          { type: "p", text: "Fiple is a Mac and iPhone application that lets you use an iPhone to launch apps and open websites, restore user-configured workspaces, review files and move them to the Trash, and — in the direct-download Mac build — run terminal commands on a paired Mac over a local network." },
          { type: "p", text: "A workspace is a tile that performs one or more of these actions." },
        ],
      },
      {
        heading: "User responsibility",
        blocks: [
          { type: "p", text: "You are responsible for:" },
          {
            type: "ul",
            items: [
              "Maintaining access to devices you own or are authorized to control.",
              "Managing the apps, websites, and workspaces you configure.",
              "Using Fiple in compliance with applicable laws and regulations.",
              "Not attempting to disrupt, abuse, or gain unauthorized access to Fiple or another person's devices.",
            ],
          },
        ],
      },
      {
        heading: "Terminal use",
        blocks: [
          { type: "p", text: "The direct-download Mac build lets you run terminal commands on your Mac from your paired iPhone. These commands execute on your Mac with the privileges of your user account." },
          { type: "p", text: "You are solely responsible for the commands you run and their consequences. This feature is not included in the App Store version of Fiple for Mac." },
        ],
      },
      {
        heading: "Files and Smart Trash",
        blocks: [
          { type: "p", text: "Fiple lets you move files on your Mac to the Trash from your iPhone. You are responsible for the files you choose to move and for reviewing your Trash before emptying it." },
          { type: "p", text: "Fiple moves items to the macOS Trash and does not delete files permanently on your behalf." },
        ],
      },
      {
        heading: "Subscriptions and purchases",
        blocks: [
          { type: "p", text: "Fiple offers a free plan and a paid plan, Fiple Pro. Fiple Pro is available as an auto-renewing monthly subscription and as a one-time lifetime purchase. All payments are billed through your Apple Account." },
          { type: "p", text: "A monthly subscription automatically renews unless you cancel it at least 24 hours before the end of the current period. You can manage or cancel your subscription in your Apple Account settings." },
          { type: "p", text: "Prices are shown at the time of purchase. Refunds are handled by Apple in accordance with Apple's terms." },
        ],
      },
      {
        heading: "Availability",
        blocks: [
          { type: "p", text: "Fiple is provided on an \"as is\" and \"as available\" basis." },
          { type: "p", text: "We may update, modify, suspend, or discontinue features at any time without prior notice." },
        ],
      },
      {
        heading: "Limitation of liability",
        blocks: [
          { type: "p", text: "To the maximum extent permitted by applicable law, Fiple and its owner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of Fiple." },
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          { type: "p", text: "Fiple, its branding, design, and software are protected by applicable intellectual property laws and remain the property of Dias Maksatov or the relevant rights holders." },
          { type: "p", text: "Apple is a trademark of Apple Inc. Fiple is not affiliated with or endorsed by Apple Inc." },
        ],
      },
      {
        heading: "Governing law",
        blocks: [
          { type: "p", text: "These Terms are governed by the laws of the Republic of Kazakhstan, without regard to conflict-of-law principles." },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          { type: "p", text: "Questions regarding these Terms may be sent to:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Owner: Dias Maksatov" },
        ],
      },
    ],
  },

  support: {
    eyebrow: "Support",
    title: "Help & Support",
    tagline: "Thank you for using Fiple.",
    sections: [
      {
        heading: "How Fiple works",
        blocks: [
          { type: "p", text: "Fiple lets you use your iPhone to launch apps and open websites, and to instantly restore workspaces on your paired Mac over your local network." },
        ],
      },
      {
        heading: "Why can't Fiple find my Mac?",
        blocks: [
          { type: "p", text: "Make sure:" },
          {
            type: "ul",
            items: [
              "Fiple is open on your Mac and appears in the menu bar.",
              "Your iPhone and Mac are connected to the same local network.",
              "Local Network access is enabled for Fiple on your iPhone.",
            ],
          },
        ],
      },
      {
        heading: "How do I reconnect to my Mac?",
        blocks: [
          { type: "p", text: "Fiple normally reconnects automatically when both devices are back on the same local network." },
          { type: "p", text: "If you disconnected manually, open Fiple on your Mac, find the pairing code in the menu-bar app, and enter that code in Fiple on your iPhone." },
        ],
      },
      {
        heading: "Why won't an app or website open?",
        blocks: [
          { type: "p", text: "Make sure Fiple is open on your Mac and your iPhone shows that it is connected." },
          { type: "p", text: "Also check that selected apps are still installed." },
        ],
      },
      {
        heading: "Running a terminal on your Mac",
        blocks: [
          { type: "p", text: "The full Fiple for Mac (the version you download directly from fiple.app, not the App Store version) lets you open a real terminal on your Mac from your iPhone and run shell commands over your local network." },
          { type: "p", text: "Commands run on your Mac with your own user account — only run commands you understand and trust." },
        ],
      },
      {
        heading: "Clearing files with Smart Trash",
        blocks: [
          { type: "p", text: "Smart Trash lets you swipe through files on your Mac from your iPhone and send the ones you don't need to the Trash." },
          { type: "p", text: "Nothing is deleted permanently — items go to your Mac's Trash, and you can restore them from there or undo before you commit a batch." },
        ],
      },
      {
        heading: "Fiple Pro and the free plan",
        blocks: [
          { type: "p", text: "Fiple is free to use with a limited number of Fiple Bar items, workspaces, and terminal sessions. Fiple Pro unlocks unlimited use and is available as a monthly subscription or a one-time lifetime purchase." },
          { type: "p", text: "You can subscribe, manage, or cancel any time in your Apple Account settings on your iPhone. Purchases are handled by Apple." },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          { type: "p", text: "If you need help, have feedback, or found a bug, contact:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "We aim to respond as quickly as possible." },
        ],
      },
    ],
  },
};

const ru: Record<LegalKey, LegalDoc> = {
  privacy: {
    eyebrow: "Правовое",
    title: "Политика конфиденциальности",
    tagline: "Fiple уважает вашу приватность.",
    updated: UPDATED_RU,
    sections: [
      {
        heading: "Данные на ваших устройствах",
        blocks: [
          { type: "p", text: "Fiple не требует аккаунта." },
          { type: "p", text: "Ваши рабочие пространства, выбранные приложения, ссылки на сайты, история запусков, настройки и данные сопряжения хранятся локально на вашем iPhone и Mac." },
          { type: "p", text: "Эти данные передаются напрямую между сопряжёнными устройствами, когда это нужно для работы Fiple. Fiple не загружает и не хранит их на своих серверах." },
        ],
      },
      {
        heading: "Связь по локальной сети",
        blocks: [
          { type: "p", text: "Fiple использует вашу локальную сеть для прямого обмена данными между сопряжёнными iPhone и Mac." },
          { type: "p", text: "Эта связь используется только для сопряжения устройств, синхронизации содержимого Fiple и отправки команд, которые вы инициируете." },
        ],
      },
      {
        heading: "Приложения на вашем Mac",
        blocks: [
          { type: "p", text: "Чтобы вы могли создавать плитки, Fiple читает список приложений, установленных на вашем Mac." },
          { type: "p", text: "Эти данные остаются на вашем Mac и никуда не отправляются." },
        ],
      },
      {
        heading: "Иконки сайтов",
        blocks: [
          { type: "p", text: "Для отображения иконок сайтов Fiple может запрашивать изображения favicon у сервиса Google Favicon. Этот запрос отправляется напрямую с вашего устройства в Google, а не через серверы Fiple." },
          { type: "p", text: "В рамках такого запроса Google может получать домен сайта и стандартную сетевую информацию, например ваш IP-адрес." },
          { type: "p", text: "Fiple не хранит домен сайта или сетевую информацию из этих запросов. Google обрабатывает эти данные в соответствии с Политикой конфиденциальности Google." },
        ],
      },
      {
        heading: "Файлы, которые вы просматриваете в Smart Trash",
        blocks: [
          { type: "p", text: "Когда вы используете Smart Trash, Fiple читает файлы и папки, которые вы выбрали для просмотра, чтобы показать их на iPhone и дать вам решить, что отправить в Корзину." },
          { type: "p", text: "Эти данные передаются напрямую между сопряжёнными устройствами по локальной сети и остаются на вашем Mac. Fiple не загружает ваши файлы или их содержимое ни на какие серверы." },
        ],
      },
      {
        heading: "Команды терминала",
        blocks: [
          { type: "p", text: "В сборке для Mac, скачиваемой напрямую, Fiple позволяет выполнять команды терминала на Mac с вашего iPhone." },
          { type: "p", text: "Введённые вами команды и их вывод передаются напрямую между сопряжёнными устройствами по локальной сети. Они не отправляются на серверы Fiple и не хранятся на них." },
        ],
      },
      {
        heading: "Покупки",
        blocks: [
          { type: "p", text: "Fiple Pro приобретается через App Store компании Apple. Платежи обрабатывает Apple в соответствии с Политикой конфиденциальности Apple." },
          { type: "p", text: "Для проверки и восстановления покупки Fiple использует сервис-провайдера RevenueCat. RevenueCat получает случайный идентификатор, сгенерированный приложением, и данные о вашей покупке в App Store, чтобы управлять статусом подписки. Эти данные не связаны с вашим именем, и Fiple не использует их для рекламы." },
        ],
      },
      {
        heading: "Аналитика и отслеживание",
        blocks: [
          { type: "p", text: "Fiple не использует рекламу, технологии отслеживания или сторонние аналитические SDK в своих приложениях для iPhone и Mac." },
        ],
      },
      {
        heading: "Email-рассылка",
        blocks: [
          { type: "p", text: "На сайте Fiple может быть доступна необязательная email-рассылка." },
          { type: "p", text: "Если вы решите подписаться, мы собираем ваш email, чтобы иногда отправлять новости о продукте и анонсы." },
          { type: "p", text: "Ваш email безопасно хранится с помощью Supabase, нашего провайдера для работы рассылки. Мы никогда не продаём и не передаём ваш email для рекламы." },
          { type: "p", text: "Вы можете отписаться в любой момент по ссылке отписки в наших письмах или связавшись с нами напрямую. По запросу мы удалим ваш email из наших записей." },
        ],
      },
      {
        heading: "Ваш выбор",
        blocks: [
          { type: "p", text: "Вы можете отключить сопряжённые устройства в Fiple, чтобы удалить данные сопряжения." },
          { type: "p", text: "Поскольку у Fiple нет доступа к вашим локально хранимым данным приложения, остальные локальные данные вы можете контролировать или удалять стандартными средствами управления приложениями вашего устройства." },
        ],
      },
      {
        heading: "Дети",
        blocks: [
          { type: "p", text: "Fiple не предназначен для детей младше 13 лет и сознательно не собирает их персональные данные." },
        ],
      },
      {
        heading: "Контакты",
        blocks: [
          { type: "p", text: "По вопросам конфиденциальности или связанным запросам пишите:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Владелец: Диас Максатов, Казахстан" },
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Правовое",
    title: "Условия использования",
    tagline: "Соглашение об использовании приложений Fiple.",
    updated: UPDATED_RU,
    sections: [
      {
        heading: "Принятие условий",
        blocks: [
          { type: "p", text: "Скачивая, устанавливая или используя приложения Fiple, вы принимаете эти Условия использования." },
          { type: "p", text: "Если вы не согласны с этими условиями, пожалуйста, не используйте Fiple." },
        ],
      },
      {
        heading: "Описание сервиса",
        blocks: [
          { type: "p", text: "Fiple является приложением для Mac и iPhone, которое позволяет с помощью iPhone запускать приложения и открывать сайты, восстанавливать настроенные пользователем рабочие пространства, просматривать файлы и отправлять их в Корзину, а в сборке для Mac, скачиваемой напрямую, — выполнять команды терминала на сопряжённом Mac по локальной сети." },
          { type: "p", text: "Рабочее пространство представляет собой плитку, выполняющую одно или несколько таких действий." },
        ],
      },
      {
        heading: "Ответственность пользователя",
        blocks: [
          { type: "p", text: "Вы несёте ответственность за:" },
          {
            type: "ul",
            items: [
              "Сохранение доступа к устройствам, которыми вы владеете или которыми вправе управлять.",
              "Управление приложениями, сайтами и рабочими пространствами, которые вы настраиваете.",
              "Использование Fiple в соответствии с применимыми законами и нормами.",
              "Отказ от попыток нарушить работу Fiple, злоупотреблять им или получить несанкционированный доступ к Fiple либо к устройствам других людей.",
            ],
          },
        ],
      },
      {
        heading: "Использование терминала",
        blocks: [
          { type: "p", text: "Сборка для Mac, скачиваемая напрямую, позволяет выполнять команды терминала на вашем Mac с сопряжённого iPhone. Эти команды выполняются на вашем Mac с правами вашей учётной записи." },
          { type: "p", text: "Вы несёте единоличную ответственность за выполняемые команды и их последствия. Эта функция не входит в версию Fiple для Mac из App Store." },
        ],
      },
      {
        heading: "Файлы и Smart Trash",
        blocks: [
          { type: "p", text: "Fiple позволяет перемещать файлы на вашем Mac в Корзину с iPhone. Вы отвечаете за файлы, которые решаете переместить, и за проверку Корзины перед её очисткой." },
          { type: "p", text: "Fiple перемещает элементы в Корзину macOS и не удаляет файлы безвозвратно от вашего имени." },
        ],
      },
      {
        heading: "Подписки и покупки",
        blocks: [
          { type: "p", text: "Fiple предлагает бесплатный план и платный план Fiple Pro. Fiple Pro доступен как автоматически продлеваемая ежемесячная подписка и как разовая пожизненная покупка. Все платежи проводятся через ваш Apple Account." },
          { type: "p", text: "Ежемесячная подписка продлевается автоматически, если не отменить её минимум за 24 часа до конца текущего периода. Управлять подпиской или отменить её можно в настройках Apple Account." },
          { type: "p", text: "Цены отображаются в момент покупки. Возвраты обрабатывает Apple в соответствии с условиями Apple." },
        ],
      },
      {
        heading: "Доступность",
        blocks: [
          { type: "p", text: "Fiple предоставляется «как есть» и «по мере доступности»." },
          { type: "p", text: "Мы можем обновлять, изменять, приостанавливать или прекращать работу функций в любое время без предварительного уведомления." },
        ],
      },
      {
        heading: "Ограничение ответственности",
        blocks: [
          { type: "p", text: "В максимальной степени, допустимой применимым законом, Fiple и его владелец не несут ответственности за любые косвенные, случайные, специальные, последующие или штрафные убытки, возникшие из-за использования Fiple." },
        ],
      },
      {
        heading: "Интеллектуальная собственность",
        blocks: [
          { type: "p", text: "Fiple, его бренд, дизайн и программное обеспечение защищены применимым законодательством об интеллектуальной собственности и остаются собственностью Диаса Максатова или соответствующих правообладателей." },
          { type: "p", text: "Apple является товарным знаком Apple Inc. Fiple не связан с Apple Inc. и не одобрен ею." },
        ],
      },
      {
        heading: "Применимое право",
        blocks: [
          { type: "p", text: "Эти Условия регулируются законодательством Республики Казахстан без учёта коллизионных норм." },
        ],
      },
      {
        heading: "Контакты",
        blocks: [
          { type: "p", text: "Вопросы по этим Условиям можно отправлять на:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Владелец: Диас Максатов" },
        ],
      },
    ],
  },

  support: {
    eyebrow: "Поддержка",
    title: "Помощь и поддержка",
    tagline: "Спасибо, что пользуетесь Fiple.",
    sections: [
      {
        heading: "Как работает Fiple",
        blocks: [
          { type: "p", text: "Fiple позволяет с помощью iPhone запускать приложения и открывать сайты, а также мгновенно восстанавливать рабочие пространства на сопряжённом Mac по вашей локальной сети." },
        ],
      },
      {
        heading: "Почему Fiple не находит мой Mac?",
        blocks: [
          { type: "p", text: "Убедитесь, что:" },
          {
            type: "ul",
            items: [
              "Fiple открыт на вашем Mac и отображается в строке меню.",
              "iPhone и Mac подключены к одной локальной сети.",
              "Для Fiple на iPhone включён доступ к локальной сети.",
            ],
          },
        ],
      },
      {
        heading: "Как переподключиться к Mac?",
        blocks: [
          { type: "p", text: "Обычно Fiple переподключается автоматически, когда оба устройства снова оказываются в одной локальной сети." },
          { type: "p", text: "Если вы отключились вручную, откройте Fiple на Mac, найдите код сопряжения в приложении строки меню и введите его в Fiple на iPhone." },
        ],
      },
      {
        heading: "Почему не открывается приложение или сайт?",
        blocks: [
          { type: "p", text: "Убедитесь, что Fiple открыт на Mac и iPhone показывает, что он подключён." },
          { type: "p", text: "Также проверьте, что выбранные приложения по-прежнему установлены." },
        ],
      },
      {
        heading: "Запуск терминала на вашем Mac",
        blocks: [
          { type: "p", text: "Полная версия Fiple для Mac (та, что скачивается напрямую с fiple.app, а не версия из App Store) позволяет открывать настоящий терминал на вашем Mac с iPhone и выполнять shell-команды по локальной сети." },
          { type: "p", text: "Команды выполняются на вашем Mac от имени вашей учётной записи — запускайте только те команды, которые понимаете и которым доверяете." },
        ],
      },
      {
        heading: "Очистка файлов со Smart Trash",
        blocks: [
          { type: "p", text: "Smart Trash позволяет пролистывать файлы на вашем Mac с iPhone и отправлять ненужные в Корзину." },
          { type: "p", text: "Ничего не удаляется безвозвратно: элементы попадают в Корзину вашего Mac, откуда их можно восстановить, а до подтверждения пакета действие можно отменить." },
        ],
      },
      {
        heading: "Fiple Pro и бесплатный план",
        blocks: [
          { type: "p", text: "Fiple можно использовать бесплатно с ограниченным числом элементов Fiple Bar, рабочих пространств и терминальных сессий. Fiple Pro снимает ограничения и доступен как ежемесячная подписка или разовая пожизненная покупка." },
          { type: "p", text: "Подписаться, управлять подпиской или отменить её можно в любой момент в настройках Apple Account на iPhone. Покупки обрабатывает Apple." },
        ],
      },
      {
        heading: "Контакты",
        blocks: [
          { type: "p", text: "Если нужна помощь, есть отзыв или вы нашли ошибку, пишите:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Мы стараемся отвечать как можно быстрее." },
        ],
      },
    ],
  },
};

const kz: Record<LegalKey, LegalDoc> = {
  privacy: {
    eyebrow: "Құқықтық",
    title: "Құпиялылық саясаты",
    tagline: "Fiple сіздің құпиялылығыңызды құрметтейді.",
    updated: UPDATED_KZ,
    sections: [
      {
        heading: "Құрылғыларыңыздағы деректер",
        blocks: [
          { type: "p", text: "Fiple тіркелгіні қажет етпейді." },
          { type: "p", text: "Сіздің жұмыс кеңістіктеріңіз, таңдалған қолданбалар, сайт сілтемелері, іске қосу тарихы, баптаулар және жұптау деректері iPhone мен Mac құрылғыңызда жергілікті сақталады." },
          { type: "p", text: "Бұл деректер Fiple жұмыс істеуі үшін қажет болғанда жұпталған құрылғылар арасында тікелей беріледі. Fiple оларды өз серверлеріне жүктемейді әрі сақтамайды." },
        ],
      },
      {
        heading: "Жергілікті желі арқылы байланыс",
        blocks: [
          { type: "p", text: "Fiple жұпталған iPhone мен Mac арасында тікелей дерек алмасу үшін сіздің жергілікті желіңізді пайдаланады." },
          { type: "p", text: "Бұл байланыс тек құрылғыларды жұптау, Fiple мазмұнын синхрондау және сіз бастамалаған командаларды жіберу үшін ғана қолданылады." },
        ],
      },
      {
        heading: "Mac құрылғыңыздағы қолданбалар",
        blocks: [
          { type: "p", text: "Сіз тақташалар жасай алуыңыз үшін Fiple Mac құрылғыңызға орнатылған қолданбалар тізімін оқиды." },
          { type: "p", text: "Бұл деректер Mac құрылғыңызда қалады әрі еш жерге жіберілмейді." },
        ],
      },
      {
        heading: "Сайт белгішелері",
        blocks: [
          { type: "p", text: "Сайт белгішелерін көрсету үшін Fiple Google Favicon сервисінен favicon кескіндерін сұрай алады. Бұл сұрау Fiple серверлері арқылы емес, тікелей сіздің құрылғыңыздан Google-ға жіберіледі." },
          { type: "p", text: "Мұндай сұраудың аясында Google сайт доменін және стандартты желілік ақпаратты, мысалы, сіздің IP-мекенжайыңызды ала алады." },
          { type: "p", text: "Fiple бұл сұраулардан сайт домені мен желілік ақпаратты сақтамайды. Google бұл деректерді Google құпиялылық саясатына сәйкес өңдейді." },
        ],
      },
      {
        heading: "Smart Trash-те қаралатын файлдар",
        blocks: [
          { type: "p", text: "Smart Trash-ті пайдаланғанда Fiple сіз қарауға таңдаған файлдар мен қалталарды оқиды — осылайша оларды iPhone-да көріп, нені Себетке жіберуді шеше аласыз." },
          { type: "p", text: "Бұл ақпарат жұпталған құрылғылар арасында жергілікті желі арқылы тікелей алмасады және Mac құрылғыңызда қалады. Fiple сіздің файлдарыңызды немесе олардың мазмұнын ешбір серверге жүктемейді." },
        ],
      },
      {
        heading: "Терминал командалары",
        blocks: [
          { type: "p", text: "Тікелей жүктелетін Mac жинағында Fiple iPhone арқылы Mac-та терминал командаларын орындауға мүмкіндік береді." },
          { type: "p", text: "Сіз енгізген командалар мен олардың нәтижесі жұпталған құрылғылар арасында жергілікті желі арқылы тікелей беріледі. Олар Fiple серверлеріне жіберілмейді әрі оларда сақталмайды." },
        ],
      },
      {
        heading: "Сатып алулар",
        blocks: [
          { type: "p", text: "Fiple Pro Apple компаниясының App Store арқылы сатып алынады. Төлемдерді Apple өзінің Құпиялылық саясатына сәйкес өңдейді." },
          { type: "p", text: "Сатып алуды тексеру және қалпына келтіру үшін Fiple қызмет провайдері ретінде RevenueCat-ты пайдаланады. RevenueCat жазылым мәртебесін басқару үшін қолданба жасаған кездейсоқ идентификаторды және App Store-дағы сатып алу ақпаратыңызды алады. Бұл ақпарат сіздің атыңызбен байланыстырылмайды, әрі Fiple оны жарнама үшін пайдаланбайды." },
        ],
      },
      {
        heading: "Аналитика және қадағалау",
        blocks: [
          { type: "p", text: "Fiple өзінің iPhone мен Mac қолданбаларында жарнаманы, қадағалау технологияларын немесе үшінші тарап аналитикалық SDK-ларын пайдаланбайды." },
        ],
      },
      {
        heading: "Email жаңалықтары",
        blocks: [
          { type: "p", text: "Fiple сайтында міндетті емес email-жаңалықтар тізімі қолжетімді болуы мүмкін." },
          { type: "p", text: "Егер сіз жазылуды шешсеңіз, біз анда-санда өнім жаңалықтары мен хабарламаларды жіберу үшін электрондық поштаңызды жинаймыз." },
          { type: "p", text: "Сіздің электрондық поштаңыз тізімді жүргізу үшін біздің қызмет провайдеріміз болып табылатын Supabase арқылы қауіпсіз сақталады. Біз сіздің электрондық поштаңызды жарнама үшін ешқашан сатпаймыз әрі бермейміз." },
          { type: "p", text: "Сіз кез келген уақытта біздің хаттарымыздағы жазылымнан бас тарту сілтемесі арқылы немесе бізге тікелей хабарласу арқылы жазылымнан бас тарта аласыз. Сұрау бойынша біз сіздің электрондық поштаңызды жазбаларымыздан жоямыз." },
        ],
      },
      {
        heading: "Сіздің таңдауыңыз",
        blocks: [
          { type: "p", text: "Жұптау деректерін жою үшін Fiple ішінде жұпталған құрылғыларды ажырата аласыз." },
          { type: "p", text: "Fiple жергілікті сақталған қолданба деректеріне қол жеткізе алмайтындықтан, қалған жергілікті деректерді құрылғыңыздың стандартты қолданбаларды басқару құралдарымен бақылай не жоя аласыз." },
        ],
      },
      {
        heading: "Балалар",
        blocks: [
          { type: "p", text: "Fiple 13 жасқа толмаған балаларға арналмаған әрі олардың жеке деректерін әдейі жинамайды." },
        ],
      },
      {
        heading: "Байланыс",
        blocks: [
          { type: "p", text: "Құпиялылыққа қатысты сұрақтар немесе байланысты сұраулар бойынша жазыңыз:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Иесі: Диас Мақсатов, Қазақстан" },
        ],
      },
    ],
  },

  terms: {
    eyebrow: "Құқықтық",
    title: "Пайдалану шарттары",
    tagline: "Fiple қолданбаларын пайдалану келісімі.",
    updated: UPDATED_KZ,
    sections: [
      {
        heading: "Шарттарды қабылдау",
        blocks: [
          { type: "p", text: "Fiple қолданбаларын жүктеу, орнату немесе пайдалану арқылы сіз осы Пайдалану шарттарын қабылдайсыз." },
          { type: "p", text: "Егер сіз осы шарттармен келіспесеңіз, Fiple-ды пайдаланбауыңызды өтінеміз." },
        ],
      },
      {
        heading: "Қызмет сипаттамасы",
        blocks: [
          { type: "p", text: "Fiple iPhone арқылы қолданбаларды іске қосуға және сайттарды ашуға, пайдаланушы баптаған жұмыс кеңістіктерін қалпына келтіруге, файлдарды қарап шығып, оларды Себетке жіберуге, ал тікелей жүктелетін Mac жинағында — жұпталған Mac-та терминал командаларын жергілікті желі арқылы орындауға мүмкіндік беретін Mac пен iPhone қолданбасы болып табылады." },
          { type: "p", text: "Жұмыс кеңістігі осы әрекеттердің бірін немесе бірнешеуін орындайтын тақташа болып табылады." },
        ],
      },
      {
        heading: "Пайдаланушының жауапкершілігі",
        blocks: [
          { type: "p", text: "Сіз мыналарға жауаптысыз:" },
          {
            type: "ul",
            items: [
              "Өзіңізге тиесілі немесе басқаруға құқығыңыз бар құрылғыларға қол жеткізуді сақтау.",
              "Өзіңіз баптайтын қолданбаларды, сайттарды және жұмыс кеңістіктерін басқару.",
              "Fiple-ды қолданыстағы заңдар мен нормаларға сәйкес пайдалану.",
              "Fiple-дың жұмысын бұзуға, оны теріс пайдалануға немесе Fiple-ға не басқа адамдардың құрылғыларына рұқсатсыз қол жеткізуге тырыспау.",
            ],
          },
        ],
      },
      {
        heading: "Терминалды пайдалану",
        blocks: [
          { type: "p", text: "Тікелей жүктелетін Mac жинағы жұпталған iPhone арқылы Mac құрылғыңызда терминал командаларын орындауға мүмкіндік береді. Бұл командалар Mac-та сіздің тіркелгіңіздің құқықтарымен орындалады." },
          { type: "p", text: "Орындайтын командаларыңыз бен олардың салдары үшін жауапкершілік толығымен сізде. Бұл функция Fiple-дың App Store-дағы Mac нұсқасына кірмейді." },
        ],
      },
      {
        heading: "Файлдар және Smart Trash",
        blocks: [
          { type: "p", text: "Fiple iPhone арқылы Mac-тағы файлдарды Себетке жылжытуға мүмкіндік береді. Жылжытуға таңдаған файлдарыңыз үшін және Себетті босатпас бұрын оны тексеру үшін сіз жауаптысыз." },
          { type: "p", text: "Fiple элементтерді macOS Себетіне жылжытады және файлдарды сіздің атыңыздан біржола жоймайды." },
        ],
      },
      {
        heading: "Жазылымдар және сатып алулар",
        blocks: [
          { type: "p", text: "Fiple тегін жоспар мен ақылы Fiple Pro жоспарын ұсынады. Fiple Pro автоматты түрде ұзартылатын ай сайынғы жазылым және бір реттік өмірлік сатып алу түрінде қолжетімді. Барлық төлемдер сіздің Apple Account арқылы есептеледі." },
          { type: "p", text: "Ай сайынғы жазылым ағымдағы кезең аяқталуына кемінде 24 сағат қалғанда одан бас тартпасаңыз, автоматты түрде ұзартылады. Жазылымды Apple Account баптауларында басқаруға немесе одан бас тартуға болады." },
          { type: "p", text: "Бағалар сатып алу кезінде көрсетіледі. Қайтарымдарды Apple өз шарттарына сәйкес өңдейді." },
        ],
      },
      {
        heading: "Қолжетімділік",
        blocks: [
          { type: "p", text: "Fiple «сол күйінде» және «қолжетімді болуына қарай» негізінде ұсынылады." },
          { type: "p", text: "Біз функцияларды кез келген уақытта алдын ала ескертусіз жаңарта, өзгерте, тоқтата немесе тоқтата аламыз." },
        ],
      },
      {
        heading: "Жауапкершілікті шектеу",
        blocks: [
          { type: "p", text: "Қолданыстағы заң рұқсат ететін ең жоғары дәрежеде Fiple мен оның иесі Fiple-ды пайдалану салдарынан туындаған кез келген жанама, кездейсоқ, арнайы, жалғасатын немесе айыппұлдық зияндар үшін жауап бермейді." },
        ],
      },
      {
        heading: "Зияткерлік меншік",
        blocks: [
          { type: "p", text: "Fiple, оның бренді, дизайны және бағдарламалық жасақтамасы қолданыстағы зияткерлік меншік туралы заңнамамен қорғалады әрі Диас Мақсатовтың немесе тиісті құқық иеленушілердің меншігі болып қала береді." },
          { type: "p", text: "Apple Apple Inc. компаниясының сауда белгісі болып табылады. Fiple Apple Inc. компаниясымен байланысты емес әрі онымен мақұлданбаған." },
        ],
      },
      {
        heading: "Қолданыстағы заң",
        blocks: [
          { type: "p", text: "Осы Шарттар коллизиялық нормаларды ескермей Қазақстан Республикасының заңнамасымен реттеледі." },
        ],
      },
      {
        heading: "Байланыс",
        blocks: [
          { type: "p", text: "Осы Шарттар бойынша сұрақтарды мына мекенжайға жіберуге болады:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Иесі: Диас Мақсатов" },
        ],
      },
    ],
  },

  support: {
    eyebrow: "Қолдау",
    title: "Көмек және қолдау",
    tagline: "Fiple-ды пайдаланғаныңызға рахмет.",
    sections: [
      {
        heading: "Fiple қалай жұмыс істейді",
        blocks: [
          { type: "p", text: "Fiple iPhone арқылы қолданбаларды іске қосуға және сайттарды ашуға, сондай-ақ жұпталған Mac-та жұмыс кеңістіктерін жергілікті желіңіз арқылы бірден қалпына келтіруге мүмкіндік береді." },
        ],
      },
      {
        heading: "Fiple неге менің Mac-ымды таппайды?",
        blocks: [
          { type: "p", text: "Мыналарға көз жеткізіңіз:" },
          {
            type: "ul",
            items: [
              "Fiple Mac-та ашық және мәзір жолағында көрінеді.",
              "iPhone мен Mac бір жергілікті желіге қосылған.",
              "iPhone-дағы Fiple үшін жергілікті желіге қол жеткізу қосулы.",
            ],
          },
        ],
      },
      {
        heading: "Mac-қа қайта қалай қосыламын?",
        blocks: [
          { type: "p", text: "Әдетте екі құрылғы қайтадан бір жергілікті желіге қосылғанда Fiple автоматты түрде қайта қосылады." },
          { type: "p", text: "Егер сіз қолмен ажыратсаңыз, Mac-та Fiple-ды ашыңыз, мәзір жолағы қолданбасынан жұптау кодын тауып, оны iPhone-дағы Fiple-ға енгізіңіз." },
        ],
      },
      {
        heading: "Қолданба немесе сайт неге ашылмайды?",
        blocks: [
          { type: "p", text: "Fiple Mac-та ашық екеніне және iPhone оның қосылғанын көрсететініне көз жеткізіңіз." },
          { type: "p", text: "Сондай-ақ таңдалған қолданбалардың әлі де орнатылғанын тексеріңіз." },
        ],
      },
      {
        heading: "Mac-та терминал іске қосу",
        blocks: [
          { type: "p", text: "Fiple-дың Mac-қа арналған толық нұсқасы (App Store нұсқасы емес, fiple.app сайтынан тікелей жүктелетін нұсқа) iPhone арқылы Mac-та нағыз терминал ашуға және жергілікті желі арқылы shell-командаларды орындауға мүмкіндік береді." },
          { type: "p", text: "Командалар Mac-та сіздің тіркелгіңіздің атынан орындалады — тек өзіңіз түсінетін әрі сенетін командаларды ғана іске қосыңыз." },
        ],
      },
      {
        heading: "Smart Trash арқылы файлдарды тазалау",
        blocks: [
          { type: "p", text: "Smart Trash iPhone арқылы Mac-тағы файлдарды парақтап, керек емесін Себетке жіберуге мүмкіндік береді." },
          { type: "p", text: "Ештеңе біржола жойылмайды: элементтер Mac-тың Себетіне түседі, оларды сол жерден қалпына келтіруге немесе топтаманы растағанға дейін болдырмауға болады." },
        ],
      },
      {
        heading: "Fiple Pro және тегін жоспар",
        blocks: [
          { type: "p", text: "Fiple-ды Fiple Bar элементтерінің, жұмыс кеңістіктерінің және терминал сессияларының шектеулі санымен тегін пайдалануға болады. Fiple Pro шектеусіз пайдалануды ашады және ай сайынғы жазылым немесе бір реттік өмірлік сатып алу түрінде қолжетімді." },
          { type: "p", text: "Жазылу, оны басқару немесе одан бас тарту iPhone-дағы Apple Account баптауларында кез келген уақытта мүмкін. Сатып алуларды Apple өңдейді." },
        ],
      },
      {
        heading: "Байланыс",
        blocks: [
          { type: "p", text: "Егер көмек қажет болса, пікіріңіз болса немесе қате тапсаңыз, жазыңыз:" },
          { type: "p", text: SUPPORT_EMAIL },
          { type: "p", text: "Біз мүмкіндігінше тез жауап беруге тырысамыз." },
        ],
      },
    ],
  },
};

export const legalDocs: Record<Lang, Record<LegalKey, LegalDoc>> = { en, ru, kz };
