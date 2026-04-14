import ScrollReveal from './ScrollReveal'

/**
 * Hero Section — 首屏视觉冲击区
 *
 * 布局: 左侧文案 + CTA 按钮 | 右侧仿真可视化占位图
 * 包含: 项目名称、副标题、两个行动按钮、关键指标、装饰浮动卡片
 */

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* 背景发光装饰 */}
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__glow hero__glow--cyan" />

      <div className="container hero__inner">
        {/* 左侧: 文案区域 */}
        <div className="hero__content">
          <ScrollReveal>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              GPU-Accelerated Simulation Engine
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="hero__title">
              <span className="hero__title-highlight">XVisualSim</span>
              <br />
              X-Ray Image Simulation
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="hero__description">
              A high-fidelity, GPU-accelerated X-ray imaging simulation engine
              for industrial inspection, algorithm validation, and synthetic
              data generation. Built on cone-beam projection with physically
              grounded attenuation modeling.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="hero__actions">
              <a href="#results" className="btn btn--primary">
                ▸ View Results
              </a>
              <a href="#contact" className="btn btn--outline">
                Request Demo
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="hero__stats">
              <div>
                {/* [PLACEHOLDER] 替换为实际指标 */}
                <div className="hero__stat-value">GPU</div>
                <div className="hero__stat-label">Accelerated</div>
              </div>
              <div>
                <div className="hero__stat-value">CUDA</div>
                <div className="hero__stat-label">Warp Kernels</div>
              </div>
              <div>
                {/* [PLACEHOLDER] 替换为实际支持的轨迹数 */}
                <div className="hero__stat-value">4+</div>
                <div className="hero__stat-label">Scan Modes</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 右侧: 可视化区域 */}
        <div className="hero__visual">
          <div className="hero__visual-container">
            {/* [PLACEHOLDER] 替换为仿真结果图 / 装置结构图 */}
            <img
              className="hero__visual-image"
              src={`${import.meta.env.BASE_URL}images/hero-simulation.svg`}
              alt="X-ray simulation visualization"
            />

            {/* 浮动装饰卡片 */}
            <div className="hero__float-card hero__float-card--top">
              ⚡ <strong>Cone-Beam</strong> Projection
            </div>
            <div className="hero__float-card hero__float-card--bottom">
              🎯 <strong>SSAA</strong> Anti-Aliasing
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
