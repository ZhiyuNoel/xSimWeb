import ScrollReveal from './ScrollReveal'

/**
 * Results Showcase Section — 仿真结果展示
 *
 * 展示 5 组仿真结果卡片，每张卡片可点击打开 Lightbox 预览
 * 所有图片为占位 SVG，后续替换为真实仿真截图
 *
 * @param {Function} onImageClick - 点击图片回调，触发 Lightbox
 */

const RESULTS = [
  {
    tag: 'Projection',
    title: 'Simulated X-Ray Projections',
    desc: 'High-resolution cone-beam projections with SSAA anti-aliasing, demonstrating sharp geometric detail preservation.',
    image: 'result-projection.svg',
  },
  {
    tag: 'Geometry',
    title: 'Multi-Angle Geometry Comparison',
    desc: 'Projection outputs across varying source–detector configurations, illustrating geometric magnification and perspective effects.',
    image: 'result-geometry.svg',
  },
  {
    tag: 'Sensitivity',
    title: 'Parameter Sensitivity Analysis',
    desc: 'Systematic exploration of attenuation coefficient (μ), focal spot size, and detector resolution on output image quality.',
    image: 'result-sensitivity.svg',
  },
  {
    tag: 'Defect Analysis',
    title: 'Defect Visibility Examples',
    desc: 'Simulated projections with embedded structural defects, showing detection sensitivity under controlled imaging conditions.',
    image: 'result-defect.svg',
  },
  {
    tag: 'Comparison',
    title: 'Qualitative Visual Comparison',
    desc: 'Side-by-side qualitative comparison between simulated projections and reference images for validation purposes.',
    image: 'result-comparison.svg',
  },
]

function Results({ onImageClick }) {
  return (
    <section className="section" id="results">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Showcase</span>
          <h2 className="section__title">Simulation Results</h2>
          <p className="section__subtitle">
            Representative outputs from the XVisualSim engine, demonstrating
            projection quality, parameter exploration, and analytical
            capabilities.
          </p>
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
