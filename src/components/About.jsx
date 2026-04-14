import ScrollReveal from './ScrollReveal'
import { useTranslation } from 'react-i18next'

/**
 * About / Overview Section — 项目概述
 *
 * 双栏布局: 左侧文字说明 | 右侧架构示意图
 * 内容: 项目定位、核心能力、应用领域
 * 注意: 明确表达不公开源码的立场
 */

function About() {
  const { t } = useTranslation()

  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">{t('about.label')}</span>
          <h2 className="section__title">{t('about.title')}</h2>
        </ScrollReveal>

        <div className="about__grid">
          {/* 文字说明区 */}
          <ScrollReveal>
            <div className="about__text">
              <p>{t('about.p1')}</p>

              <p>{t('about.p2')}</p>

              <p>{t('about.p3')}</p>

              {/* 代码不公开声明 */}
              <div className="about__highlight-box">
                <p>{t('about.highlight')}</p>
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
