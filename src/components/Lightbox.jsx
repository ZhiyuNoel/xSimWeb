import { useEffect } from 'react'

/**
 * 图片预览 Lightbox 弹窗
 * 支持 ESC 键关闭 + 点击背景关闭
 *
 * @param {string} src - 图片路径
 * @param {string} alt - 图片描述 / 标题
 * @param {Function} onClose - 关闭回调
 */
function Lightbox({ src, alt, onClose }) {
  // ESC 键关闭
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close preview">
          ✕
        </button>
        <img
          className="lightbox__image"
          src={src}
          alt={alt}
          loading="lazy"
        />
        {alt && <p className="lightbox__caption">{alt}</p>}
      </div>
    </div>
  )
}

export default Lightbox
