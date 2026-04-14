import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * Hero Section — 首屏视觉冲击区
 *
 * 布局: 左侧文案 + CTA 按钮 | 右侧仿真可视化占位图
 * 包含: 项目名称、副标题、两个行动按钮、关键指标、装饰浮动卡片
 */

function Hero() {
  const { t } = useTranslation()

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
              {t('hero.badge')}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="hero__title">
              <span className="hero__title-highlight">{t('hero.title1')}</span>
              <br />
              {t('hero.title2')}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="hero__description">
              {t('hero.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="hero__actions">
              <a href="#results" className="btn btn--primary">
                {t('hero.btnResults')}
              </a>
              <a href="#contact" className="btn btn--outline">
                {t('hero.btnContact')}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="hero__stats">
              <div>
                <div className="hero__stat-value">{t('hero.stat1Value')}</div>
                <div className="hero__stat-label">{t('hero.stat1Label')}</div>
              </div>
              <div>
                <div className="hero__stat-value">{t('hero.stat2Value')}</div>
                <div className="hero__stat-label">{t('hero.stat2Label')}</div>
              </div>
              <div>
                <div className="hero__stat-value">{t('hero.stat3Value')}</div>
                <div className="hero__stat-label">{t('hero.stat3Label')}</div>
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
              ⚡ <strong>{t('hero.floatCardTop1')}</strong> {t('hero.floatCardTop2')}
            </div>
            <div className="hero__float-card hero__float-card--bottom">
              🎯 <strong>{t('hero.floatCardBottom1')}</strong> {t('hero.floatCardBottom2')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
