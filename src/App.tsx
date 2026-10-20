import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Handshake,
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
  { href: '#role', label: 'Ваша роль' },
  { href: '#faq', label: 'Вопросы' },
]

const partnerTypes = [
  {
    icon: BriefcaseBusiness,
    title: 'Компании',
    text: 'Рекомендуйте АСО своим клиентам и сотрудникам.',
  },
  {
    icon: Users,
    title: 'Частные лица',
    text: 'Помогайте знакомым выбрать автошколу.',
  },
  {
    icon: Route,
    title: 'Авторы и специалисты',
    text: 'Рассказывайте об АСО своей аудитории и клиентам.',
  },
]

const benefits = [
  'Условия участия до старта',
  'Согласованный способ рекомендаций',
  'Понятный порядок учёта учеников',
  'Правила расчёта вознаграждения',
  'Ответы на вопросы об участии',
]

const flowSteps = [
  {
    title: 'Знакомство',
    text: 'Расскажите, кому вы хотите рекомендовать АСО.',
  },
  {
    title: 'Условия',
    text: 'Обсудите вознаграждение и порядок работы.',
  },
  {
    title: 'Рекомендация',
    text: 'Рекомендуйте обучение согласованным способом.',
  },
  {
    title: 'Вознаграждение',
    text: 'Получайте выплаты по условиям программы.',
  },
]

const conditions = [
  'Размер и условия вознаграждения',
  'Как учитывать ваши рекомендации',
  'Когда и как получать выплаты',
  'К кому обращаться с вопросами',
]

const faqs = [
  {
    question: 'Это франшиза?',
    answer: 'Нет. Вы рекомендуете обучение в АСО. Открывать автошколу и организовывать обучение не нужно.',
  },
  {
    question: 'Какое вознаграждение я получу?',
    answer: 'Размер, основание для начисления и порядок выплат нужно согласовать с АСО до начала работы.',
  },
  {
    question: 'Можно участвовать без компании?',
    answer: 'Да, программа рассчитана и на частных лиц. Расскажите, как вы планируете рекомендовать обучение, и обсудите условия участия.',
  },
  {
    question: 'Как учтут мою рекомендацию?',
    answer: 'Перед первой рекомендацией согласуйте с АСО способ передачи и учёта обращений. Это поможет связать ученика с вашей рекомендацией.',
  },
]

function App() {
  const [draft, setDraft] = useState('')
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const source = String(data.get('source') ?? '').trim()
    setDraft([
      'Здравствуйте! Хочу обсудить участие в реферальной программе АСО.',
      `Меня зовут: ${name}.`,
      `Формат участия: ${data.get('partnerType')}.`,
      `Телефон для связи: ${phone}.`,
      ...(source ? [`Планирую рекомендовать обучение: ${source}.`] : []),
      'Расскажите, пожалуйста, об условиях участия и вознаграждении.',
    ].join('\n'))
    setCopyState('idle')
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft)
      setCopyState('copied')
    } catch {
      setCopyState('manual')
    }
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
              <h1>Реферальная программа АСО</h1>
              <p className="hero-lead">
                Рекомендуйте обучение в АСО и получайте вознаграждение
                на согласованных условиях.
              </p>
              <div className="hero-actions">
                <a className="button button--primary button--large" href="#lead">
                  Узнать условия
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#flow">Как это работает</a>
              </div>
              <div className="hero-points" aria-label="Ключевые принципы">
                <span><Check aria-hidden="true" /> Для частных лиц</span>
                <span><Check aria-hidden="true" /> Для компаний</span>
                <span><Check aria-hidden="true" /> Для авторов</span>
              </div>
            </div>

            <aside className="partner-panel" aria-label="Суть реферальной программы">
              <div className="partner-panel__head">
                <span>Партнёрство с АСО</span>
                <Handshake aria-hidden="true" />
              </div>
              <div className="partner-intro">
                <span>Ваш вклад</span>
                <strong>Рекомендация обучения</strong>
                <p>Знакомым, клиентам или своей аудитории.</p>
              </div>
              <div className="status-row status-row--blue">
                <BadgeCheck aria-hidden="true" />
                <span>Обучение — на стороне АСО</span>
              </div>
              <div className="status-row status-row--red">
                <CircleDollarSign aria-hidden="true" />
                <span>Вам — вознаграждение</span>
              </div>
              <p className="partner-panel__note">Условия участия обсудим до старта.</p>
            </aside>
          </div>
        </section>

        <section className="fit-section" id="fit">
          <div className="content-shell">
            <div className="section-heading compact">
              <h2>Кому подойдёт программа</h2>
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
              <h2>Понятно с первого шага</h2>
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
              <h2>Как стать партнёром</h2>
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

        <section className="cabinet-section" id="role">
          <div className="content-shell cabinet-grid">
            <div className="cabinet-copy">
              <h2>Вы рекомендуете. АСО обучает.</h2>
              <p>
                Рассказывайте об обучении тем, кому оно нужно.
                Занятия, инструкторы и работа с учениками — задача автошколы.
              </p>
            </div>

            <div className="cabinet-visual">
              <img className="system-visual" src={systemVisual} alt="" />
              <div className="status-board" aria-label="Распределение задач">
                <div>
                  <Handshake aria-hidden="true" />
                  <strong>Ваша роль в программе</strong>
                </div>
                <span>Рекомендовать АСО</span>
                <span>Следовать условиям программы</span>
                <span>Получать вознаграждение</span>
              </div>
            </div>
          </div>
        </section>

        <section className="conditions-section">
          <div className="content-shell conditions-grid">
            <div>
              <div className="section-heading compact">
                <h2>Что согласуем до старта</h2>
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
              <h2>Обсудим участие?</h2>
              <p>Расскажите, как хотите рекомендовать АСО. Подготовьте обращение для команды.</p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit} onChange={() => { setDraft(''); setCopyState('idle') }}>
              <label>
                <span>Формат участия</span>
                <select name="partnerType" defaultValue="Частное лицо">
                  <option>Частное лицо</option>
                  <option>Компания</option>
                  <option>Автор или специалист</option>
                </select>
              </label>
              <label>
                <span>Как к вам обращаться</span>
                <input type="text" name="name" autoComplete="name" maxLength={100} required />
              </label>
              <label>
                <span>Телефон</span>
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" minLength={10} maxLength={24} required />
              </label>
              <label>
                <span id="source-label">Кому планируете рекомендовать АСО</span>
                <input type="text" name="source" maxLength={200} aria-labelledby="source-label" aria-describedby="source-hint" />
                <small id="source-hint">Знакомым, клиентам или аудитории. Необязательно.</small>
              </label>
              <button className="button button--primary button--wide" type="submit">
                Подготовить обращение
                <ArrowRight aria-hidden="true" />
              </button>
              <p className="form-note">Получите текст, который можно отправить представителю АСО.</p>
              {draft && (
                <div className="draft-result">
                  <h3>Текст обращения готов</h3>
                  <p>Скопируйте его и отправьте своему контакту в АСО.</p>
                  <label>
                    <span>Ваше обращение</span>
                    <textarea value={draft} readOnly rows={8} onFocus={(event) => event.currentTarget.select()} />
                  </label>
                  <button className="button button--primary button--wide" type="button" onClick={copyDraft}>
                    Скопировать обращение
                  </button>
                  <p className="form-note" role="status">
                    {copyState === 'copied' && 'Текст скопирован. Его можно вставить в сообщение.'}
                    {copyState === 'manual' && 'Выделите текст обращения и скопируйте его вручную.'}
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="content-shell faq-grid">
            <div className="section-heading compact">
              <h2>Вопросы об участии</h2>
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
            <h2>Рекомендуйте АСО. Станьте нашим партнёром.</h2>
            <a className="button button--primary button--large" href="#lead">
              Узнать условия
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-shell footer-inner">
          <span>АСО Автошкола</span>
          <span>Реферальная программа</span>
          <a href="#flow">Как стать партнёром <ArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}

export default App
