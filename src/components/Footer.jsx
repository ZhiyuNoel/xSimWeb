import { useTranslation } from 'react-i18next'

/**
 * Footer Section — 页脚
 */

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          {/* 品牌简介 */}
          <div>
            <div className="footer__brand-name">XVisualSim</div>
            <p className="footer__brand-desc">
              {t('footer.desc')}
            </p>
          </div>

          {/* 页面导航 */}
          <div>
            <h4 className="footer__heading">{t('footer.sectionsTitle')}</h4>
            <ul className="footer__link-list">
              <li><a href="#about">{t('navbar.about')}</a></li>
              <li><a href="#capabilities">{t('navbar.capabilities')}</a></li>
              <li><a href="#pipeline">{t('navbar.pipeline')}</a></li>
              <li><a href="#results">{t('navbar.results')}</a></li>
              <li><a href="#gallery">{t('navbar.gallery')}</a></li>
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h4 className="footer__heading">{t('footer.resourcesTitle')}</h4>
            <ul className="footer__link-list">
              <li><a href="#faq">{t('navbar.faq')}</a></li>
              <li><a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">{t('footer.links.github')}</a></li>
              <li><a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">{t('footer.links.pub')}</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">{t('footer.links.demo')}</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="footer__heading">{t('footer.contactTitle')}</h4>
            <ul className="footer__link-list">
              <li><a href="mailto:your.email@example.com">your.email@example.com</a></li>
              <li><a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* 底部版权栏 */}
        <div className="footer__bottom">
          <span>© {currentYear} XVisualSim. {t('footer.copyright')}</span>
          <span>{t('footer.builtFor')}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
