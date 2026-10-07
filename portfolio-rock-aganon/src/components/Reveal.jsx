import { useEffect, useRef } from 'react'

// Fait apparaître l'élément quand il entre dans l'écran.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const d = delay ? ` d${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${d} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
