import ScrollReveal from './ScrollReveal'

/**
 * Technical Highlights Section — 技术亮点
 *
 * 以克制的方式展示项目技术能力，避免虚构性能数字
 * 使用 <benchmark> 占位符标记需要后续替换的量化指标
 */

const HIGHLIGHTS = [
  {
    title: 'Flexible Geometry Definition',
    desc: 'Arbitrary source, detector, and object positioning in 3D space. Detector orientation via Euler angle rotation supports non-standard imaging setups.',
  },
  {
    title: 'High-Throughput Simulation Pipeline',
    desc: 'Mesh and BVH structures are loaded once and shared across all frames in a scan sequence. Only the ray field is regenerated per frame, minimizing per-frame overhead.',
  },
  {
    title: 'Multi-Trajectory Scan Support',
    desc: 'Built-in trajectory generators for cone beam, dome (spherical), planar cone beam, and fully arbitrary scan paths. Extensible via a clean abstract base class.',
  },
  {
    title: 'Integration-Ready Output',
    desc: 'Each simulation frame exports projection images, COCO-RLE annotations, and structured JSON metadata — directly consumable by downstream vision tasks and ML pipelines.',
  },
  {
    title: 'Focal Spot Modeling',
    desc: 'Supports Gaussian-weighted focal spot sampling for realistic finite-source simulation. Per-focal-point memory management prevents VRAM overflow at high resolutions.',
  },
  {
    title: 'Physically Grounded Attenuation',
    desc: 'Depth-counting based ray traversal handles nested and overlapping geometry correctly. Cumulative path length computation enables accurate Beer-Lambert intensity mapping.',
  },
]

function TechHighlights() {
  return (
    <section className="section" id="tech">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Engineering</span>
          <h2 className="section__title">Technical Highlights</h2>
          <p className="section__subtitle">
            Design decisions and implementation details that define XVisualSim's
            simulation approach.
          </p>
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
