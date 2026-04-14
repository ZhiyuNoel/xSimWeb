import ScrollReveal from './ScrollReveal'

/**
 * Use Cases / Applications Section — 应用场景
 *
 * 5 个应用场景卡片，使用图标 + 文案形式
 * 涵盖: 工业检测、算法验证、缺陷分析、数据合成、科研教学
 */

const USE_CASES = [
  {
    icon: '🏭',
    title: 'Industrial Inspection',
    desc: 'Simulate X-ray imaging for manufacturing quality control, weld inspection, and assembly verification workflows.',
  },
  {
    icon: '🧪',
    title: 'Algorithm Validation',
    desc: 'Generate ground-truth projection pairs for benchmarking defect detection, segmentation, and reconstruction algorithms.',
  },
  {
    icon: '🔎',
    title: 'Defect Analysis',
    desc: 'Study the detectability of structural defects — cracks, voids, inclusions — under varying imaging configurations.',
  },
  {
    icon: '📊',
    title: 'Synthetic Data Augmentation',
    desc: 'Produce large-scale annotated datasets (COCO-RLE format) for training and fine-tuning deep learning vision models.',
  },
  {
    icon: '🎓',
    title: 'Research & Education',
    desc: 'Explore X-ray physics principles, CT reconstruction theory, and imaging geometry in a controlled simulation environment.',
  },
]

function UseCases() {
  return (
    <section className="section" id="usecases">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Applications</span>
          <h2 className="section__title">Use Cases</h2>
          <p className="section__subtitle">
            XVisualSim serves a range of applications across industrial,
            academic, and data-engineering domains.
          </p>
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
