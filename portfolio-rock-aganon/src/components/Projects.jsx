import Reveal from './Reveal'
import { Icon } from './Icons'
import { projects } from '../data'

function Cover({ project, className }) {
  if (project.image) {
    return (
      <div className={`pf w-full ${className}`}>
        <img src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
      </div>
    )
  }
  return (
    <div
      className={`w-full flex items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-accent/60 ${className}`}
      role="img"
      aria-label={`Visuel provisoire du projet ${project.title}`}
    >
      <span className="font-display font-bold text-5xl text-white/80">{project.title[0]}</span>
    </div>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <span
          key={t}
          className={`text-xs px-3 py-1 rounded-full ${
            i === 0
              ? 'bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700'
              : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function Links({ project }) {
  return (
    <div className="flex flex-wrap gap-5">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="nl inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white">
          Voir la démo <Icon name="external" className="w-3.5 h-3.5" />
        </a>
      )}
      {project.code && (
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="nl inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white">
          Code source <Icon name="arrowRight" className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const [main, ...others] = projects

  return (
    <section id="projets" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Reveal as="p" className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</Reveal>
          <Reveal as="h2" delay={1} className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Projets sélectionnés</Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {main && (
            <Reveal
              as="article"
              delay={1}
              className="card-h group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent md:row-span-2"
            >
              <Cover project={main} className="h-64 md:h-80" />
              <div className="p-7">
                <div className="mb-4"><Tags tags={main.tags} /></div>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">{main.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">{main.text}</p>
                <Links project={main} />
              </div>
            </Reveal>
          )}

          {others.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={i + 2}
              className="card-h group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent"
            >
              <Cover project={p} className="h-48" />
              <div className="p-6">
                <div className="mb-3"><Tags tags={p.tags} /></div>
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-1.5">{p.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{p.text}</p>
                <Links project={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
