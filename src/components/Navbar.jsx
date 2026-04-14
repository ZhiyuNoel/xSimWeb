import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * 顶部导航栏组件
 * 特性:
 *   - 固定定位，滚动后添加毛玻璃背景
 *   - 平滑滚动到对应区块锚点
 *   - 移动端汉堡菜单
 *   - 支持多语言切换
 */

// 导航链接配置
const NAV_LINKS = [
  { key: 'about', href: '#about' },
  { key: 'capabilities', href: '#capabilities' },
  { key: 'pipeline', href: '#pipeline' },
  { key: 'results', href: '#results' },
  { key: 'useCases', href: '#usecases' },
  { key: 'gallery', href: '#gallery' },
  { key: 'faq', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  // 监听滚动事件以切换导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 点击导航链接时关闭移动端菜单
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  // 切换语言
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="XVisualSim Home">
          <span className="navbar__logo-icon">X</span>
          <span>XVisualSim</span>
        </a>

        {/* 右侧部分: 链接区域、语言切换、响应式菜单 */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {t(`navbar.${link.key}`)}
              </a>
            </li>
          ))}
          
          {/* 加入移动端显示的语言切换器（桌面端也通过相同样式融合或独立） */}
          <li className="navbar__lang-item">
            <button
              className="btn btn--outline navbar__lang-btn"
              onClick={() => {
                toggleLanguage();
                handleLinkClick();
              }}
              aria-label="Toggle language"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', marginLeft: '1rem' }}
            >
              {i18n.language === 'en' ? '中' : 'EN'}
            </button>
          </li>
        </ul>

        {/* 汉堡菜单按钮 */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
