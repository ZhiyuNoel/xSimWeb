import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Use Cases / Applications Section — 应用场景
 */

function UseCases() {
  const { t } = useTranslation()

  const USE_CASES = [
    {
      icon: '🏭',
      title: t('useCases.items.industrial.title'),
      desc: t('useCases.items.industrial.desc'),
    },
    {
      icon: '🧪',
      title: t('useCases.items.algo.title'),
      desc: t('useCases.items.algo.desc'),
    },
    {
      icon: '🔎',
      title: t('useCases.items.defect.title'),
      desc: t('useCases.items.defect.desc'),
    },
    {
      icon: '📊',
      title: t('useCases.items.data.title'),
      desc: t('useCases.items.data.desc'),
    },
    {
      icon: '🎓',
      title: t('useCases.items.research.title'),
      desc: t('useCases.items.research.desc'),
    },
  ]

  return (
    <section className="section" id="usecases">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('useCases.label')}</span>
          <h2 className="section__title">{t('useCases.title')}</h2>
          <p className="section__subtitle">{t('useCases.subtitle')}</p>
        </ScrollReveal>

        <div className="usecases__grid">
          {USE_CASES.map((uc, i) => (
            <ScrollReveal key={i} delay={(i % 5) + 1}>
              <div className="card usecase-card">
                <span className="usecase-card__icon">{uc.icon}</span>
                <h3 className="usecase-card__title">{uc.title}</h3>
                <p className="usecase-card__desc">{uc.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
