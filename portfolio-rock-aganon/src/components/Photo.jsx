import { useState } from 'react'
import { profile } from '../data'

// Affiche la photo; si le fichier est absent, affiche les initiales.
export default function Photo({ className = '', alt }) {
  const [failed, setFailed] = useState(false)
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <div className={`pf ${className}`}>
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent to-accent-light">
          <span className="font-display font-bold text-6xl text-white/90 tracking-tight">{initials}</span>
        </div>
      ) : (
        <img src={profile.photo} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  )
}
