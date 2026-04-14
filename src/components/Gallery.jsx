import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Gallery / Media Section — 项目图库
 *
 * @param {Function} onImageClick - 点击图片回调，触发 Lightbox
 */

function Gallery({ onImageClick }) {
  const { t } = useTranslation()

  const GALLERY_ITEMS = [
    {
      src: 'gallery-1.svg',
      alt: t('gallery.altTexts.g1'),
    },
    {
      src: 'gallery-2.svg',
      alt: t('gallery.altTexts.g2'),
    },
    {
      src: 'gallery-3.svg',
      alt: t('gallery.altTexts.g3'),
    },
    {
      src: 'gallery-4.svg',
      alt: t('gallery.altTexts.g4'),
    },
    {
      src: 'gallery-5.svg',
      alt: t('gallery.altTexts.g5'),
    },
    {
      src: 'gallery-6.svg',
      alt: t('gallery.altTexts.g6'),
    },
  ]

  return (
    <section className="section" id="gallery">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('gallery.label')}</span>
          <h2 className="section__title">{t('gallery.title')}</h2>
          <p className="section__subtitle">{t('gallery.subtitle')}</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="gallery__grid">
            {GALLERY_ITEMS.map((item, i) => {
              const imgSrc = `${import.meta.env.BASE_URL}images/${item.src}`
              return (
                <div
                  className="gallery__item"
                  key={i}
                  onClick={() => onImageClick(imgSrc, item.alt)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View: ${item.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onImageClick(imgSrc, item.alt)
                  }}
                >
                  <img src={imgSrc} alt={item.alt} loading="lazy" />
                  <div className="gallery__item-overlay">
                    <span>🔍</span>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Gallery
