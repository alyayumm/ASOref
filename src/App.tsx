import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Handshake,
  LockKeyhole,
  MessageCircle,
  Route,
  ShieldCheck,
  Users,
} from 'lucide-react'
import logoColor from './assets/aso-logo-color.png'
import logoWhite from './assets/aso-logo-white.png'
import slidersIcon from './assets/cta-sliders-icon.png'
import systemVisual from './assets/direction-system-bg.png'
import documentsVisual from './assets/official-documents-visual.png'

const navItems = [
  { href: '#fit', label: 'Кому подходит' },
  { href: '#flow', label: 'Как работает' },
  { href: '#cabinet', label: 'Кабинет' },
  { href: '#faq', label: 'FAQ' },
]

const partnerTypes = [
  {
    icon: BriefcaseBusiness,
    title: 'Юридические лица',
    text: 'Компании, сервисы, школы и площадки с клиентским потоком.',
  },
  {
    icon: Users,
    title: 'Физические лица',
    text: 'Партнёры, которые рекомендуют обучение знакомым и аудитории.',
  },
  {
    icon: Route,
    title: 'Профи рынка',
    text: 'Инструкторы, менеджеры, медиаторы и локальные представители.',
  },
]

const benefits = [
  'Прозрачные условия',
  'Минимум администрирования',
  'Персональный контакт',
  'Статусы в кабинете',
  'Выплаты по договорённости',
]

const flowSteps = [
  {
    title: 'Заявка',
    text: 'Партнёр оставляет данные и формат работы.',
  },
  {
    title: 'Условия',
    text: 'АСО фиксирует правила сотрудничества.',
  },
  {
    title: 'Передача',
    text: 'Заявки попадают в понятный маршрут обработки.',
  },
  {
    title: 'Статусы',
    text: 'Партнёр видит движение и итог по условиям.',
  },
]

const conditions = [
  'Вознаграждение рассчитывается индивидуально',
  'Выплаты идут по согласованному циклу',
  'Статистика доступна в личном кабинете',
  'Поддержка сопровождает подключение',
]

const faqs = [
  {
    question: 'Это франшиза?',
    answer: 'Нет. Это партнёрская программа для привлечения клиентов в систему АСО.',
  },
  {
    question: 'Есть фиксированная сумма?',
    answer: 'На странице её нет: условия зависят от формата партнёра и подтверждаются отдельно.',
  },
  {
    question: 'Кто может подключиться?',
    answer: 'Юридическое лицо, физическое лицо или профессиональный участник рынка.',
  },
  {
    question: 'Форма уже отправляет заявки?',
    answer: 'Пока форма локальная. Канал отправки подключается после утверждения контактов.',
  },
]

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-shell">
          <a className="brand" href="#top" aria-label="АСО Автошкола">
            <img src={logoColor} alt="" />
            <span>Партнёрам</span>
          </a>

          <nav className="header-nav" aria-label="Навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a className="button button--primary header-cta" href="#lead">
            Узнать условия
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="content-shell hero-grid">
            <div className="hero-copy">
              <h1>Партнёрская программа АСО</h1>
              <p className="hero-lead">
                Привлекайте клиентов в автошколу через понятную систему: условия,
                статусы и расчёты в одном контуре.
              </p>
              <div className="hero-actions">
                <a className="button button--primary button--large" href="#lead">
                  Узнать условия
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#flow">Как это работает</a>
              </div>
              <div className="hero-points" aria-label="Ключевые принципы">
                <span><Check aria-hidden="true" /> без обещаний цифр</span>
                <span><Check aria-hidden="true" /> условия фиксируются</span>
                <span><Check aria-hidden="true" /> статусы видны</span>
              </div>
            </div>

            <aside className="partner-panel" aria-label="Форма партнёрского подключения">
              <div className="partner-panel__head">
                <span>Подключение</span>
                <Handshake aria-hidden="true" />
              </div>
              <div className="partner-selector">
                <span>Вы</span>
                <strong>Юридическое лицо</strong>
                <ChevronDown aria-hidden="true" />
              </div>
              <div className="lead-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="status-row status-row--blue">
                <BadgeCheck aria-hidden="true" />
                <span>Заявка принята</span>
              </div>
              <div className="status-row status-row--red">
                <CircleDollarSign aria-hidden="true" />
                <span>Итог по условиям</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="fit-section" id="fit">
          <div className="content-shell">
            <div className="section-heading compact">
              <span>Не скидочная акция</span>
              <h2>Партнёрство как управляемый канал</h2>
            </div>

            <div className="partner-types">
              {partnerTypes.map(({ icon: Icon, title, text }) => (
                <article className="type-item" key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="content-shell benefits-layout">
            <div className="benefits-title">
              <img src={slidersIcon} alt="" />
              <h2>Меньше хаоса. Больше прозрачности.</h2>
            </div>

            <div className="benefit-list" aria-label="Преимущества сотрудничества">
              {benefits.map((item) => (
                <div className="benefit-row" key={item}>
                  <ShieldCheck aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flow-section" id="flow">
          <div className="content-shell">
            <div className="section-heading">
              <span>Процесс</span>
              <h2>Короткий маршрут подключения</h2>
            </div>

            <div className="flow-track">
              {flowSteps.map((step, index) => (
                <article className="flow-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cabinet-section" id="cabinet">
          <div className="content-shell cabinet-grid">
            <div className="cabinet-copy">
              <span>Личный кабинет</span>
              <h2>Статусы вместо переписки</h2>
              <p>
                Партнёр видит заявки, этапы и согласованные итоги. Без лишних таблиц
                и ручного контроля.
              </p>
            </div>

            <div className="cabinet-visual">
              <img className="system-visual" src={systemVisual} alt="" />
              <div className="status-board" aria-label="Условный интерфейс личного кабинета">
                <div>
                  <BarChart3 aria-hidden="true" />
                  <strong>Поток заявок</strong>
                </div>
                <span>Получена</span>
                <span>В работе</span>
                <span>Итог согласован</span>
              </div>
            </div>
          </div>
        </section>

        <section className="conditions-section">
          <div className="content-shell conditions-grid">
            <div>
              <div className="section-heading compact">
                <span>Условия</span>
                <h2>Без неподтверждённых цифр</h2>
              </div>
              <div className="condition-list">
                {conditions.map((item) => (
                  <p key={item}><Check aria-hidden="true" />{item}</p>
                ))}
              </div>
            </div>
            <img src={documentsVisual} alt="" />
          </div>
        </section>

        <section className="lead-section" id="lead">
          <div className="content-shell lead-grid">
            <div className="lead-copy">
              <span>Заявка</span>
              <h2>Получить условия партнёрства</h2>
              <p>Оставьте формат. Детали подтвердит команда АСО.</p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              <label>
                <span>Вы</span>
                <select defaultValue="Юридическое лицо">
                  <option>Юридическое лицо</option>
                  <option>Физическое лицо</option>
                  <option>Профессиональный партнёр</option>
                </select>
              </label>
              <label>
                <span>Название или имя</span>
                <input type="text" name="name" placeholder="Как к вам обращаться" required />
              </label>
              <label>
                <span>Телефон</span>
                <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
              </label>
              <label>
                <span>Источник клиентов</span>
                <input type="text" name="source" placeholder="Компания, аудитория, рекомендации" />
              </label>
              <button className="button button--primary button--wide" type="submit">
                Узнать условия
                <ArrowRight aria-hidden="true" />
              </button>
              <p className="form-note">
                {submitted
                  ? 'Данные сохранены в форме. Канал отправки подключается отдельно.'
                  : 'Форма локальная: отправка подключается после утверждения контактов.'}
              </p>
            </form>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="content-shell faq-grid">
            <div className="section-heading compact">
              <span>FAQ</span>
              <h2>Коротко о важном</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="content-shell final-inner">
            <img src={logoWhite} alt="" />
            <h2>Подключите партнёрский канал без лишнего шума</h2>
            <a className="button button--primary button--large" href="#lead">
              Начать
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-shell footer-inner">
          <span>АСО Автошкола</span>
          <span>Партнёрская программа</span>
          <span><LockKeyhole aria-hidden="true" /> Контакты и backend подключаются отдельно</span>
        </div>
      </footer>
    </>
  )
}

export default App
