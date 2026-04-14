import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Results Showcase Section — 仿真结果展示
 *
 * @param {Function} onImageClick - 点击图片回调，触发 Lightbox
 */

function Results({ onImageClick }) {
  const { t } = useTranslation()

  const RESULTS = [
    {
      tag: t('results.items.proj.tag'),
      title: t('results.items.proj.title'),
      desc: t('results.items.proj.desc'),
      image: 'result-projection.svg',
    },
    {
      tag: t('results.items.geom.tag'),
      title: t('results.items.geom.title'),
      desc: t('results.items.geom.desc'),
      image: 'result-geometry.svg',
    },
    {
      tag: t('results.items.sens.tag'),
      title: t('results.items.sens.title'),
      desc: t('results.items.sens.desc'),
      image: 'result-sensitivity.svg',
    },
    {
      tag: t('results.items.defect.tag'),
      title: t('results.items.defect.title'),
      desc: t('results.items.defect.desc'),
      image: 'result-defect.svg',
    },
    {
      tag: t('results.items.comp.tag'),
      title: t('results.items.comp.title'),
      desc: t('results.items.comp.desc'),
      image: 'result-comparison.svg',
    },
  ]

  return (
    <section className="section" id="results">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('results.label')}</span>
          <h2 className="section__title">{t('results.title')}</h2>
          <p className="section__subtitle">{t('results.subtitle')}</p>
        </ScrollReveal>

        <div className="results__grid">
          {RESULTS.map((result, i) => {
            const imgSrc = `${import.meta.env.BASE_URL}images/${result.image}`
            return (
              <ScrollReveal key={i} delay={(i % 3) + 1}>
                <div
                  className="card result-card"
                  onClick={() => onImageClick(imgSrc, result.title)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${result.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onImageClick(imgSrc, result.title)
                  }}
                >
                  {/* 图片区域 */}
                  <div className="result-card__image-wrapper">
                    <img
                      className="result-card__image"
                      src={imgSrc}
                      alt={result.title}
                      loading="lazy"
                    />
                    <div className="result-card__overlay">
                      <div className="result-card__zoom-icon">🔍</div>
                    </div>
                  </div>

                  {/* 文字区域 */}
                  <div className="result-card__body">
                    <span className="result-card__tag">{result.tag}</span>
                    <h3 className="result-card__title">{result.title}</h3>
                    <p className="result-card__desc">{result.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Results
