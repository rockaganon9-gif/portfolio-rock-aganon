// ═══════════════════════════════════════════════════════════
//  TOUT LE CONTENU DU PORTFOLIO EST ICI.
//  Les lignes marquées  ✏️ À MODIFIER  sont des exemples à remplacer.
// ═══════════════════════════════════════════════════════════

export const profile = {
  firstName: 'Rock',
  lastName: 'Aganon',
  role: 'Développeur web front-end',
  availability: 'Ouvert aux opportunités', // ✏️ À MODIFIER (ex. : « Recherche un stage / une alternance »)
  heroText:
    'Je conçois des interfaces web claires, rapides et accessibles avec React. Fraîchement diplômé, je transforme des maquettes en sites qui fonctionnent partout.',
  // Photo : déposez votre image dans le dossier /public sous le nom photo.jpg
  photo: '/photo.jpg',

  // ✏️ À MODIFIER : coordonnées
  email: 'rock.aganon@exemple.com',
  github: 'https://github.com/votre-pseudo',
  linkedin: 'https://linkedin.com/in/votre-profil',

  // ✏️ À MODIFIER : chiffres affichés sous l'accroche (restez honnête, c'est plus crédible)
  stats: [
    { value: '3', label: 'Projets réalisés' },
    { value: '8', label: 'Technologies' },
    { value: '2026', label: 'Fin de formation' },
  ],
}

export const nav = [
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'apropos', label: 'À propos' },
  { id: 'contact', label: 'Contact' },
]

export const skillCards = [
  {
    icon: 'code',
    title: 'Développement front-end',
    text: 'HTML sémantique, CSS moderne, JavaScript et React. Je structure mon code en composants réutilisables, faciles à lire et à maintenir.',
  },
  {
    icon: 'monitor',
    title: 'Interfaces responsives',
    text: "Des pages qui s'adaptent du mobile au grand écran avec Tailwind CSS, en soignant l'accessibilité et les performances.",
  },
  {
    icon: 'chart',
    title: 'Intégration & outils',
    text: "Maquette vers page web fidèle, connexion à des API REST, versionnement avec Git et GitHub, travail en équipe.",
  },
]

export const projects = [
  // ✏️ À MODIFIER : remplacez par vos vrais projets.
  // `image` : mettez un fichier dans /public (ex. '/projet1.png'). Sans image, un visuel de remplacement s'affiche.
  {
    title: 'Gestionnaire de tâches',
    text: "Application web pour créer, trier et suivre ses tâches au quotidien. Les données sont conservées dans le navigateur, avec un filtre par statut et un mode sombre. Projet réalisé pendant ma formation pour maîtriser l'état et les composants React.",
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '',
    demo: 'https://exemple.com',
    code: 'https://github.com/votre-pseudo/gestionnaire-taches',
  },
  {
    title: 'Site vitrine de restaurant',
    text: "Site responsive de présentation d'un restaurant : menu, galerie et formulaire de réservation.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    demo: 'https://exemple.com',
    code: 'https://github.com/votre-pseudo/site-restaurant',
  },
  {
    title: 'Application météo',
    text: "Recherche de ville et affichage des prévisions en temps réel grâce à une API REST, avec gestion des erreurs.",
    tags: ['React', 'API REST'],
    image: '',
    demo: 'https://exemple.com',
    code: 'https://github.com/votre-pseudo/app-meteo',
  },
]

export const about = {
  paragraphs: [
    "Je suis Rock Aganon, développeur web en fin de formation professionnelle. J'aime comprendre comment les choses fonctionnent et les construire proprement, de la structure HTML jusqu'à l'interface interactive.",
    "Je cherche une première expérience dans une équipe où progresser vite, apprendre des développeurs plus expérimentés et livrer des interfaces dont on est fier. Curieux et rigoureux, je me forme en continu.",
  ],
  // ✏️ À MODIFIER
  training: 'Formation professionnelle en développement web — Nom de votre établissement, 2026',
  stack: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'GitHub', 'PHP', 'Laravel', 'WordPress'],
}

export const contactText =
  "Un stage, une alternance, un premier poste ou un projet à réaliser ? Écrivez-moi, je réponds rapidement."
