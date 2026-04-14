import { useEffect, useRef } from 'react'

/**
 * 滚动显现动画包裹组件
 * 使用 Intersection Observer API 侦测元素进入视口时触发淡入动画
 *
 * @param {number} delay - 延迟级别 (0-5)，用于网格子项错落出现
 * @param {string} className - 附加 CSS 类名
 * @param {React.ReactNode} children - 子元素
 */
function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 创建交叉观察器，元素进入视口 15% 时触发
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-reveal--visible')
          observer.unobserve(el) // 只触发一次
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` scroll-reveal--delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`scroll-reveal${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
