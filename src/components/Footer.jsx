/**
 * Footer Section — 页脚
 *
 * 4 列布局: 品牌信息 | 导航链接 | 资源链接 | 联系方式
 * 底部: 版权信息
 *
 * [PLACEHOLDER] 标记的位置需要替换为真实信息:
 *   - 邮箱地址
 *   - GitHub 主页 URL
 *   - 论文 / 出版物链接
 */

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          {/* 品牌简介 */}
          <div>
            <div className="footer__brand-name">XVisualSim</div>
            <p className="footer__brand-desc">
              A GPU-accelerated X-ray image simulation engine for industrial
              inspection, algorithm validation, and synthetic data generation.
            </p>
          </div>

          {/* 页面导航 */}
          <div>
            <h4 className="footer__heading">Sections</h4>
            <ul className="footer__link-list">
              <li><a href="#about">About</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#pipeline">Pipeline</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__link-list">
              {/* [PLACEHOLDER] 替换为真实链接 */}
              <li><a href="#faq">FAQ</a></li>
              <li><a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              <li><a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">Publication (coming soon)</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Demo Video (coming soon)</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__link-list">
              {/* [PLACEHOLDER] 替换为真实邮箱 */}
              <li><a href="mailto:your.email@example.com">your.email@example.com</a></li>
              <li><a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* 底部版权栏 */}
        <div className="footer__bottom">
          <span>© {currentYear} XVisualSim. All rights reserved.</span>
          <span>Built for research and engineering.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
