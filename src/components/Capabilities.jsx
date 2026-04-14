import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Key Capabilities Section — 核心能力展示
 */

function Capabilities() {
  const { t } = useTranslation()

  const CAPABILITIES = [
    {
      icon: '⚡',
      title: t('capabilities.items.gpu.title'),
      desc: t('capabilities.items.gpu.desc'),
    },
    {
      icon: '🔧',
      title: t('capabilities.items.geometry.title'),
      desc: t('capabilities.items.geometry.desc'),
    },
    {
      icon: '🔬',
      title: t('capabilities.items.attenuation.title'),
      desc: t('capabilities.items.attenuation.desc'),
    },
    {
      icon: '🌐',
      title: t('capabilities.items.trajectory.title'),
      desc: t('capabilities.items.trajectory.desc'),
    },
    {
      icon: '🏷️',
      title: t('capabilities.items.annotation.title'),
      desc: t('capabilities.items.annotation.desc'),
    },
    {
      icon: '🎨',
      title: t('capabilities.items.postProcess.title'),
      desc: t('capabilities.items.postProcess.desc'),
    },
  ]

  return (
    <section className="section" id="capabilities">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('capabilities.label')}</span>
          <h2 className="section__title">{t('capabilities.title')}</h2>
          <p className="section__subtitle">{t('capabilities.subtitle')}</p>
        </ScrollReveal>

        <div className="capabilities__grid">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={i} delay={i % 3 + 1}>
              <div className="card capability-card">
                <div className="capability-card__icon">{cap.icon}</div>
                <h3 className="capability-card__title">{cap.title}</h3>
                <p className="capability-card__desc">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
