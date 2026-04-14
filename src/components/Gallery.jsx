import ScrollReveal from './ScrollReveal'

/**
 * Gallery / Media Section — 项目图库
 *
 * 3列网格布局的图片画廊，支持点击预览 (Lightbox)
 * 所有 6 张图片为占位 SVG，后续替换为:
 *   - 仿真截图、流程演示视频、对比结果图、GIF 动画
 *
 * @param {Function} onImageClick - 点击图片回调，触发 Lightbox
 */

const GALLERY_ITEMS = [
  {
    src: 'gallery-1.svg',
    alt: 'Cone-beam projection setup visualization',
  },
  {
    src: 'gallery-2.svg',
    alt: 'Multi-angle CT scan sequence',
  },
  {
    src: 'gallery-3.svg',
    alt: 'Detector geometry configuration',
  },
  {
    src: 'gallery-4.svg',
    alt: 'SSAA anti-aliasing comparison',
  },
  {
    src: 'gallery-5.svg',
    alt: 'Material attenuation visualization',
  },
  {
    src: 'gallery-6.svg',
    alt: 'Automated annotation overlay',
  },
]

function Gallery({ onImageClick }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Media</span>
          <h2 className="section__title">Project Gallery</h2>
          <p className="section__subtitle">
            Visual documentation of XVisualSim's simulation outputs,
            configuration interfaces, and analytical results.
          </p>
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
