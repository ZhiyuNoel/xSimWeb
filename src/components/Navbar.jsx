import { useState, useEffect } from 'react'

/**
 * 顶部导航栏组件
 * 特性:
 *   - 固定定位，滚动后添加毛玻璃背景
 *   - 平滑滚动到对应区块锚点
 *   - 移动端汉堡菜单
 */

// 导航链接配置
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Results', href: '#results' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* 导航链接 */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
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
