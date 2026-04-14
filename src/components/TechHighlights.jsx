import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Technical Highlights Section — 技术亮点
 */

function TechHighlights() {
  const { t } = useTranslation()

  const HIGHLIGHTS = [
    {
      title: t('tech.items.h1.title'),
      desc: t('tech.items.h1.desc'),
    },
    {
      title: t('tech.items.h2.title'),
      desc: t('tech.items.h2.desc'),
    },
    {
      title: t('tech.items.h3.title'),
      desc: t('tech.items.h3.desc'),
    },
    {
      title: t('tech.items.h4.title'),
      desc: t('tech.items.h4.desc'),
    },
    {
      title: t('tech.items.h5.title'),
      desc: t('tech.items.h5.desc'),
    },
    {
      title: t('tech.items.h6.title'),
      desc: t('tech.items.h6.desc'),
    },
  ]

  return (
    <section className="section" id="tech">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('tech.label')}</span>
          <h2 className="section__title">{t('tech.title')}</h2>
          <p className="section__subtitle">{t('tech.subtitle')}</p>
        </ScrollReveal>

        <div className="tech__grid">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={i} delay={(i % 2) + 1}>
              <div className="card tech-item">
                <div className="tech-item__marker" />
                <div>
                  <h3 className="tech-item__title">{item.title}</h3>
                  <p className="tech-item__desc">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechHighlights
