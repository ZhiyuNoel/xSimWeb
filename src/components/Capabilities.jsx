import ScrollReveal from './ScrollReveal'

/**
 * Key Capabilities Section — 核心能力展示
 *
 * 6 张功能卡片，内容基于实际代码库已实现的功能模块:
 *   - engine/kernels.py → GPU Ray Casting
 *   - core/ (Source, Detector, SceneObject) → Configurable Geometry
 *   - pipeline.py Beer-Lambert → Attenuation Modeling
 *   - scan/ (4种轨迹) → Multi-Trajectory CT
 *   - postprocess/annotation.py → Annotation Generation
 *   - postprocess/image_effects.py + SSAA → Post-Processing
 */

const CAPABILITIES = [
  {
    icon: '⚡',
    title: 'GPU-Accelerated Ray Casting',
    desc: 'High-performance ray–mesh intersection powered by NVIDIA Warp GPU kernels. BVH acceleration structures are pre-built and cached for multi-frame reuse, enabling efficient CT scan sequences.',
  },
  {
    icon: '🔧',
    title: 'Configurable Imaging Geometry',
    desc: 'Fully parameterized source, detector, and object definitions. Supports arbitrary 3D positioning, detector rotation via Euler angles, adjustable resolution, and pixel pitch configuration.',
  },
  {
    icon: '🔬',
    title: 'Material-Aware Attenuation',
    desc: 'Physically grounded Beer-Lambert attenuation modeling with depth-counting for nested geometry handling. Computes cumulative path lengths through volumetric objects for accurate intensity mapping.',
  },
  {
    icon: '🌐',
    title: 'Multi-Trajectory CT Scanning',
    desc: 'Native support for multiple scan trajectories: standard cone beam, dome (spherical), planar cone beam, and arbitrary user-defined paths loaded from JSON pose sequences.',
  },
  {
    icon: '🏷️',
    title: 'Synthetic Data & Annotations',
    desc: 'Automated COCO-RLE instance segmentation annotation generation. Each projection output includes paired images and machine-readable labels for direct use in vision model training pipelines.',
  },
  {
    icon: '🎨',
    title: 'Post-Processing Pipeline',
    desc: 'Integrated post-processing with SSAA super-sampling anti-aliasing, Gaussian blur, and fractal texture noise injection for realistic image degradation simulation.',
  },
]

function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Core Features</span>
          <h2 className="section__title">Key Capabilities</h2>
          <p className="section__subtitle">
            A modular simulation engine covering the full X-ray imaging pipeline
            — from ray generation to annotated output.
          </p>
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
