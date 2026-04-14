import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import UseCases from './components/UseCases'
import TechHighlights from './components/TechHighlights'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'

/**
 * 根组件 — 组合所有页面区块
 * 单页应用结构，通过锚点导航实现区块跳转
 */
function App() {
  // Lightbox 状态管理（全局共用一个弹窗实例）
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' })

  /** 打开图片预览 */
  const openLightbox = (src, alt) => {
    setLightbox({ open: true, src, alt })
    document.body.style.overflow = 'hidden'
  }

  /** 关闭图片预览 */
  const closeLightbox = () => {
    setLightbox({ open: false, src: '', alt: '' })
    document.body.style.overflow = ''
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Capabilities />
        <hr className="section-divider" />
        <HowItWorks />
        <hr className="section-divider" />
        <Results onImageClick={openLightbox} />
        <hr className="section-divider" />
        <UseCases />
        <hr className="section-divider" />
        <TechHighlights />
        <hr className="section-divider" />
        <Gallery onImageClick={openLightbox} />
        <hr className="section-divider" />
        <FAQ />
      </main>
      <Footer />

      {/* 全局 Lightbox 弹窗 */}
      {lightbox.open && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}

export default App
