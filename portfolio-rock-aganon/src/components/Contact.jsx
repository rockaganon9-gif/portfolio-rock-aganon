import { useState } from 'react'
import Reveal from './Reveal'
import { Icon, LinkedInIcon, GitHubIcon } from './Icons'
import { profile, contactText } from '../data'

const field =
  'w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Sans serveur : ouvre le logiciel de messagerie avec le message pré-rempli.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Merci de remplir le nom, l’e-mail et le message.')
      return
    }
    setError('')
    const subject = encodeURIComponent(form.subject || `Message de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: <Icon name="mail" />, external: false },
    { href: profile.linkedin, label: profile.linkedin.replace('https://', ''), icon: <LinkedInIcon />, external: true },
    { href: profile.github, label: profile.github.replace('https://', ''), icon: <GitHubIcon />, external: true },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Reveal as="p" className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Contact</Reveal>
              <Reveal as="h2" delay={1} className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                Travaillons<br />ensemble
              </Reveal>
              <Reveal as="p" delay={2} className="text-zinc-400 leading-relaxed mb-8">{contactText}</Reveal>

              <Reveal delay={3} className="flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      {l.icon}
                    </span>
                    <span className="text-sm break-all">{l.label}</span>
                  </a>
                ))}
              </Reveal>
            </div>

            <Reveal delay={2}>
              <form onSubmit={onSubmit} noValidate>
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">Nom <span aria-hidden="true">*</span></label>
                      <input id="fname" name="name" type="text" required autoComplete="name" placeholder="Marie Dupont" value={form.name} onChange={onChange} className={field} />
                    </div>
                    <div>
                      <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">E-mail <span aria-hidden="true">*</span></label>
                      <input id="femail" name="email" type="email" required autoComplete="email" placeholder="marie@entreprise.com" value={form.email} onChange={onChange} className={field} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="fsubject" className="block text-xs font-medium text-zinc-400 mb-1.5">Objet</label>
                    <input id="fsubject" name="subject" type="text" placeholder="Proposition de stage" value={form.subject} onChange={onChange} className={field} />
                  </div>
                  <div>
                    <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">Message <span aria-hidden="true">*</span></label>
                    <textarea id="fmessage" name="message" rows="4" required placeholder="Parlez-moi de votre projet…" value={form.message} onChange={onChange} className={`${field} resize-none`} />
                  </div>
                  {error && <p role="alert" className="text-sm text-accent-light">{error}</p>}
                  <button type="submit" className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors">
                    Envoyer le message →
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
