import ScrollReveal from './ScrollReveal'

/**
 * How It Works Section — 仿真流水线流程图
 *
 * 6 步流程可视化，对应实际 pipeline.py 的数据流:
 *   SceneObject → Source+Detector → RayField → RayCaster → PostProcess → Exporter
 */

const STEPS = [
  {
    num: 1,
    icon: '🧊',
    title: '3D Model Input',
    desc: 'Load mesh models (STL/OBJ) with configurable dimensions and orientation',
  },
  {
    num: 2,
    icon: '⚗️',
    title: 'Material Assignment',
    desc: 'Assign attenuation coefficients (μ) to define material X-ray absorption',
  },
  {
    num: 3,
    icon: '📐',
    title: 'Geometry Setup',
    desc: 'Configure source position, detector geometry, resolution, and SSAA scaling',
  },
  {
    num: 4,
    icon: '✴️',
    title: 'Ray Tracing',
    desc: 'GPU-accelerated ray casting through BVH-optimized mesh with depth counting',
  },
  {
    num: 5,
    icon: '📷',
    title: 'Projection & Post-Process',
    desc: 'Beer-Lambert integration, SSAA downsampling, blur and noise injection',
  },
  {
    num: 6,
    icon: '📦',
    title: 'Output & Export',
    desc: 'Generate projection images, COCO-RLE annotations, and scan metadata',
  },
]

function HowItWorks() {
  return (
    <section className="section" id="pipeline">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Workflow</span>
          <h2 className="section__title">How It Works</h2>
          <p className="section__subtitle">
            From 3D model to annotated X-ray projection — a streamlined
            simulation pipeline optimized for throughput and fidelity.
          </p>
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
