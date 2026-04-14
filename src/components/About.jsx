import ScrollReveal from './ScrollReveal'

/**
 * About / Overview Section — 项目概述
 *
 * 双栏布局: 左侧文字说明 | 右侧架构示意图
 * 内容: 项目定位、核心能力、应用领域
 * 注意: 明确表达不公开源码的立场
 */

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Overview</span>
          <h2 className="section__title">What Is XVisualSim?</h2>
        </ScrollReveal>

        <div className="about__grid">
          {/* 文字说明区 */}
          <ScrollReveal>
            <div className="about__text">
              <p>
                XVisualSim is a GPU-accelerated X-ray imaging simulation engine
                designed for researchers and engineers working in industrial
                inspection, non-destructive testing (NDT), and computed
                tomography (CT). It enables high-fidelity digital reproduction
                of X-ray imaging processes — from source emission to detector
                capture — entirely in silico.
              </p>

              <p>
                The engine provides a complete simulation pipeline: configurable
                source–object–detector geometry, physically grounded
                Beer-Lambert attenuation, cone-beam projection with focal spot
                sampling, SSAA anti-aliasing, and automated annotation
                generation. Multiple CT scan trajectories — including cone beam,
                dome, planar, and arbitrary paths — are supported natively.
              </p>

              <p>
                Built on NVIDIA Warp GPU kernels and PyTorch CUDA, XVisualSim
                is optimized for throughput-critical workflows such as synthetic
                data generation, parameter exploration, and algorithm
                validation, where conventional physical experiments would be
                prohibitively slow or expensive.
              </p>

              {/* 代码不公开声明 */}
              <div className="about__highlight-box">
                <p>
                  "The full implementation is not publicly released at this
                  stage. This website serves as a technical showcase of the
                  project's capabilities and results."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 右侧视觉区 */}
          <ScrollReveal delay={2}>
            <div className="about__visual">
              {/* [PLACEHOLDER] 替换为项目架构图 / 系统示意图 */}
              <img
                className="about__diagram"
                src={`${import.meta.env.BASE_URL}images/about-architecture.svg`}
                alt="XVisualSim system architecture overview"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
