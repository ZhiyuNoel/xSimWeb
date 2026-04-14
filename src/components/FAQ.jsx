import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * FAQ Section — 常见问题
 */

function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(-1)

  const FAQ_DATA = [
    {
      q: t('faq.q1'),
      a: t('faq.a1'),
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2'),
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3'),
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4'),
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5'),
    },
  ]

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('faq.label')}</span>
          <h2 className="section__title" style={{ textAlign: 'center' }}>
            {t('faq.title')}
          </h2>
        </ScrollReveal>

        <div className="faq__list">
          {FAQ_DATA.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 5)}>
              <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-item__question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  id={`faq-q-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon">+</span>
                </button>
                <div
                  className="faq-item__answer"
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq-item__answer-inner">{item.a}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
