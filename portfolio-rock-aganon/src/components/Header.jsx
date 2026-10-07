import { useState } from 'react'
import { Icon } from './Icons'
import { nav, profile } from '../data'

export default function Header({ dark, setDark, scrolled, active }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navigation principale">
        <a href="#hero" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-zinc-900 dark:text-white">{profile.firstName.toLowerCase()}</span>
          <span className="text-accent">{profile.lastName.toLowerCase()}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nl transition-colors hover:text-zinc-900 dark:hover:text-white ${
                  active === item.id ? 'on text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            <Icon name={dark ? 'sun' : 'moon'} />
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Me contacter <Icon name="arrowRight" className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={open}
            aria-label="Ouvrir le menu"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Me contacter →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
