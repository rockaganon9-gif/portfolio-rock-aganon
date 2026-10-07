import Reveal from './Reveal'
import Photo from './Photo'
import { about, profile } from '../data'

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <Photo className="w-full aspect-square max-w-sm mx-auto rounded-3xl" alt={`${profile.firstName} ${profile.lastName}`} />
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal as="p" className="text-xs font-medium text-accent tracking-widest uppercase mb-3">À propos</Reveal>
            <Reveal as="h2" delay={1} className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
              Un peu plus<br />sur moi
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={2} className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{p}</Reveal>
            ))}
            <Reveal as="p" delay={3} className="text-sm text-zinc-600 dark:text-zinc-300 font-medium mb-8">{about.training}</Reveal>

            <Reveal delay={4}>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Technologies</p>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies maîtrisées">
                {about.stack.map((s) => (
                  <li key={s} className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
