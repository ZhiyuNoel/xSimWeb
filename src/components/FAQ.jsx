import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

/**
 * FAQ Section — 常见问题
 *
 * 可折叠手风琴式 FAQ 列表
 * 关键 FAQ: 明确表达核心代码不公开
 */

const FAQ_DATA = [
  {
    q: 'Is the source code publicly available?',
    a: 'The full implementation of XVisualSim is not publicly released at this stage. This website serves as a technical showcase of the project\'s capabilities, simulation results, and potential applications. If you are interested in collaboration or licensing inquiries, please reach out via the contact section.',
  },
  {
    q: 'What types of X-ray scenarios can XVisualSim represent?',
    a: 'XVisualSim supports cone-beam X-ray projection with configurable source–object–detector geometry. It can simulate a wide range of industrial X-ray imaging setups, including standard radiography, multi-angle inspection, and cone-beam CT scan sequences with various trajectory patterns (cone beam, dome, planar, arbitrary).',
  },
  {
    q: 'Can XVisualSim be used for synthetic dataset generation?',
    a: 'Yes. One of the primary use cases is generating large-scale annotated synthetic datasets. Each projection is output with paired COCO-RLE instance segmentation annotations, making the data directly usable for training object detection and segmentation models.',
  },
  {
    q: 'Is this project intended for research or production use?',
    a: 'XVisualSim is designed primarily as a research and engineering tool. It has been used for algorithm validation, parameter exploration, and synthetic data generation. While the simulation pipeline is robust and optimized for throughput, production deployment considerations (e.g., clinical or safety-critical compliance) are outside its current scope.',
  },
  {
    q: 'What hardware is required to run the simulation engine?',
    a: 'XVisualSim requires an NVIDIA GPU with CUDA support. It is built on NVIDIA Warp for GPU-accelerated ray tracing and PyTorch CUDA for tensor operations. The specific GPU memory requirements depend on the mesh complexity, detector resolution, and SSAA scaling factor.',
  },
]

function FAQ() {
  // 跟踪当前展开的 FAQ 项索引（-1 表示全部折叠）
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <ScrollReveal>
          <span className="section__label">Questions</span>
          <h2 className="section__title" style={{ textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="faq__list">
          {FAQ_DATA.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i + 1, 5)}>
              <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-item__question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  id={`faq-q-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon">+</span>
                </button>
                <div
                  className="faq-item__answer"
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq-item__answer-inner">{item.a}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
