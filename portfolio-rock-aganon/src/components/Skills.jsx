import Reveal from './Reveal'
import { Icon } from './Icons'
import { skillCards } from '../data'

export default function Skills() {
  return (
    <section id="competences" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Reveal as="p" className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Ce que je fais</Reveal>
          <Reveal as="h2" delay={1} className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Compétences</Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCards.map((card, i) => {
            const darkCard = i === 1
            return (
              <Reveal
                as="article"
                key={card.title}
                delay={i + 1}
                className={`card-h group rounded-2xl p-8 border hover:border-accent ${
                  darkCard
                    ? 'bg-zinc-900 dark:bg-zinc-800 border-zinc-800'
                    : 'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 transition-colors ${
                    darkCard
                      ? 'bg-zinc-800 dark:bg-zinc-700 group-hover:bg-accent/20'
                      : 'bg-orange-50 dark:bg-zinc-800 group-hover:bg-accent/10'
                  }`}
                >
                  <Icon name={card.icon} className="w-6 h-6 text-accent" />
                </div>
                <h3 className={`font-display font-bold text-xl mb-3 ${darkCard ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkCard ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {card.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
