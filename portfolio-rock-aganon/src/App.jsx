import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTION_IDS = ['contact', 'apropos', 'projets', 'competences', 'hero']

function getInitialDark() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  // Mode sombre
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  // Scroll : fond du header + section active
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60
      if (atBottom) return setActive('contact')
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) return setActive(id)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header dark={dark} setDark={setDark} scrolled={scrolled} active={active} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
