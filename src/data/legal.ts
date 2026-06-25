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
type Lang = "en" | "ru";

export const SUPPORT_EMAIL = "support@fiple.app";
const UPDATED_EN = "June 25, 2026";
const UPDATED_RU = "25 июня 2026";

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
          { type: "p", text: "Your workspaces, selected apps, website links, chosen shortcuts, launch history, preferences, and pairing information are stored locally on your iPhone and Mac." },
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
        heading: "Apps and shortcuts on your Mac",
        blocks: [
          { type: "p", text: "To let you build tiles, Fiple reads the list of applications installed on your Mac and, with your permission, the names of your Apple Shortcuts." },
          { type: "p", text: "This information stays on your Mac. Fiple reads only the names of your Shortcuts, never their contents, and never sends this information anywhere. macOS will ask you to allow access to Shortcuts the first time; you can decline and enter a shortcut name manually instead." },
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
        heading: "Analytics and tracking",
        blocks: [
          { type: "p", text: "Fiple does not use advertising, tracking technologies, or third-party analytics SDKs in its iPhone or Mac applications." },
        ],
      },
      {
        heading: "Waitlist and email updates",
        blocks: [
          { type: "p", text: "The Fiple website may offer an optional waitlist." },
          { type: "p", text: "If you choose to join, we collect your email address to send product updates, beta invitations, and launch announcements." },
          { type: "p", text: "Your email address is securely stored using Supabase, our service provider for operating the waitlist. We never sell or share your email address for advertising." },
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
          { type: "p", text: "Fiple is a Mac and iPhone application that lets you use an iPhone to launch apps, open websites, and run Apple Shortcuts, and to restore user-configured workspaces on a paired Mac over a local network." },
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
              "Managing the apps, websites, shortcuts, and workspaces you configure.",
              "The behavior of any Apple Shortcut you choose to run through Fiple.",
              "Using Fiple in compliance with applicable laws and regulations.",
              "Not attempting to disrupt, abuse, or gain unauthorized access to Fiple or another person's devices.",
            ],
          },
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
          { type: "p", text: "Apple and Apple Shortcuts are trademarks of Apple Inc. Fiple is not affiliated with or endorsed by Apple Inc." },
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
          { type: "p", text: "Fiple lets you use your iPhone to launch apps, open websites, and run Apple Shortcuts, and to instantly restore workspaces on your paired Mac over your local network." },
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
        heading: "How do I add an Apple Shortcut to a tile?",
        blocks: [
          { type: "p", text: "On your Mac, add a Shortcut action and choose one from the list of your shortcuts. The first time, macOS asks you to allow Fiple to access Shortcuts — allow it to see the list. If you prefer not to, you can simply type the exact name of the shortcut instead." },
        ],
      },
      {
        heading: "Why won't an app, website, or shortcut open?",
        blocks: [
          { type: "p", text: "Make sure Fiple is open on your Mac and your iPhone shows that it is connected." },
          { type: "p", text: "Also check that selected apps are still installed, and that any shortcut still exists in the Shortcuts app with the same name." },
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
          { type: "p", text: "Ваши рабочие пространства, выбранные приложения, ссылки на сайты, выбранные шорткаты, история запусков, настройки и данные сопряжения хранятся локально на вашем iPhone и Mac." },
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
        heading: "Приложения и шорткаты на вашем Mac",
        blocks: [
          { type: "p", text: "Чтобы вы могли создавать плитки, Fiple читает список приложений, установленных на вашем Mac, и, с вашего разрешения, названия ваших команд Apple Shortcuts." },
          { type: "p", text: "Эти данные остаются на вашем Mac. Fiple читает только названия ваших шорткатов, но не их содержимое, и никуда не отправляет эту информацию. При первом обращении macOS попросит разрешить доступ к «Командам»; вы можете отказать и ввести название шортката вручную." },
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
        heading: "Аналитика и отслеживание",
        blocks: [
          { type: "p", text: "Fiple не использует рекламу, технологии отслеживания или сторонние аналитические SDK в своих приложениях для iPhone и Mac." },
        ],
      },
      {
        heading: "Список ожидания и письма",
        blocks: [
          { type: "p", text: "На сайте Fiple может быть доступен необязательный список ожидания." },
          { type: "p", text: "Если вы решите присоединиться, мы собираем ваш email, чтобы отправлять новости о продукте, приглашения в бету и анонсы запуска." },
          { type: "p", text: "Ваш email безопасно хранится с помощью Supabase — нашего провайдера для работы списка ожидания. Мы никогда не продаём и не передаём ваш email для рекламы." },
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
          { type: "p", text: "Fiple — это приложение для Mac и iPhone, позволяющее с помощью iPhone запускать приложения, открывать сайты и выполнять команды Apple Shortcuts, а также восстанавливать настроенные пользователем рабочие пространства на сопряжённом Mac по локальной сети." },
          { type: "p", text: "Рабочее пространство — это плитка, выполняющая одно или несколько таких действий." },
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
              "Управление приложениями, сайтами, шорткатами и рабочими пространствами, которые вы настраиваете.",
              "Поведение любой команды Apple Shortcuts, которую вы запускаете через Fiple.",
              "Использование Fiple в соответствии с применимыми законами и нормами.",
              "Отказ от попыток нарушить работу Fiple, злоупотреблять им или получить несанкционированный доступ к Fiple либо к устройствам других людей.",
            ],
          },
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
          { type: "p", text: "Apple и Apple Shortcuts являются товарными знаками Apple Inc. Fiple не связан с Apple Inc. и не одобрен ею." },
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
          { type: "p", text: "Fiple позволяет с помощью iPhone запускать приложения, открывать сайты и выполнять команды Apple Shortcuts, а также мгновенно восстанавливать рабочие пространства на сопряжённом Mac по вашей локальной сети." },
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
        heading: "Как добавить команду Apple Shortcuts на плитку?",
        blocks: [
          { type: "p", text: "На Mac добавьте действие «Команда» (Shortcut) и выберите одну из списка ваших шорткатов. При первом обращении macOS попросит разрешить Fiple доступ к «Командам» — разрешите, чтобы увидеть список. Если не хотите, просто введите точное название шортката вручную." },
        ],
      },
      {
        heading: "Почему не открывается приложение, сайт или шорткат?",
        blocks: [
          { type: "p", text: "Убедитесь, что Fiple открыт на Mac и iPhone показывает, что он подключён." },
          { type: "p", text: "Также проверьте, что выбранные приложения по-прежнему установлены, а нужный шорткат всё ещё существует в приложении «Команды» с тем же названием." },
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

export const legalDocs: Record<Lang, Record<LegalKey, LegalDoc>> = { en, ru };
