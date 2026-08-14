const STAGGERED = '.card, .review, .contact-card, .feature, .media, .menu-col, .menu-item, .galeria .media'

const REVEAL_SELECTOR = [
  '[data-reveal]',
  '.hero-stats',
  '.section-head',
  '.head',
  '.media',
  '.card',
  '.banner',
  '.review',
  '.contact-card',
  '.map-wrap',
  '.map-card',
  '.feature',
  '.menu-col',
  '.menu-item',
  '.menu-cta',
  '.gallery',
  '.galeria .media',
  '.contact',
].join(', ')

let started = false

export function initReveal() {
  if (started) return
  started = true

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) reveal(e.target)
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
  )

  const staggerIndex = (el) => {
    if (!el.matches(STAGGERED) || !el.parentElement) return 0
    const sibs = Array.from(el.parentElement.children).filter((s) => s.matches(STAGGERED))
    return Math.min(sibs.indexOf(el) * 70, 420)
  }

  const reveal = (el) => {
    if (el.dataset.revealed) return
    el.dataset.revealed = '1'
    const d = staggerIndex(el)
    el.style.transition =
      `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${d}ms, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${d}ms`
    el.style.opacity = '1'
    el.style.transform = 'none'
    window.setTimeout(() => {
      el.style.transition = ''
      el.style.opacity = ''
      el.style.transform = ''
    }, 950 + d)
  }

  const prep = (el) => {
    if (el.dataset.revealReady) return
    el.dataset.revealReady = '1'
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    io.observe(el)
  }

  const scan = () => {
    document.querySelectorAll(REVEAL_SELECTOR).forEach(prep)
  }

  scan()
  if (window.MutationObserver) {
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true })
  }
}
