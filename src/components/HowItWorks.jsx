import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * How It Works Section — 仿真流水线流程图
 */

function HowItWorks() {
  const { t } = useTranslation()

  const STEPS = [
    {
      num: 1,
      icon: '🧊',
      title: t('pipeline.steps.step1.title'),
      desc: t('pipeline.steps.step1.desc'),
    },
    {
      num: 2,
      icon: '⚗️',
      title: t('pipeline.steps.step2.title'),
      desc: t('pipeline.steps.step2.desc'),
    },
    {
      num: 3,
      icon: '📐',
      title: t('pipeline.steps.step3.title'),
      desc: t('pipeline.steps.step3.desc'),
    },
    {
      num: 4,
      icon: '✴️',
      title: t('pipeline.steps.step4.title'),
      desc: t('pipeline.steps.step4.desc'),
    },
    {
      num: 5,
      icon: '📷',
      title: t('pipeline.steps.step5.title'),
      desc: t('pipeline.steps.step5.desc'),
    },
    {
      num: 6,
      icon: '📦',
      title: t('pipeline.steps.step6.title'),
      desc: t('pipeline.steps.step6.desc'),
    },
  ]

  return (
    <section className="section" id="pipeline">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('pipeline.label')}</span>
          <h2 className="section__title">{t('pipeline.title')}</h2>
          <p className="section__subtitle">{t('pipeline.subtitle')}</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="pipeline">
            <div className="pipeline__steps">
              {STEPS.map((step, i) => (
                <div className="pipeline__step" key={i}>
                  {/* 步骤间连接线 */}
                  {i < STEPS.length - 1 && (
                    <div className="pipeline__connector" />
                  )}

                  {/* 步骤编号圆形标记 */}
                  <div className="pipeline__step-number">{step.num}</div>

                  {/* 步骤图标 */}
                  <div className="pipeline__step-icon">{step.icon}</div>

                  {/* 步骤标题与描述 */}
                  <div className="pipeline__step-title">{step.title}</div>
                  <div className="pipeline__step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HowItWorks
