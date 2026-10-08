// ═══════════════════════════════════════════════════════════
//  TOUT LE CONTENU DU PORTFOLIO EST ICI.
//  Les lignes marquées  ✏️ À MODIFIER  sont des exemples à remplacer.
// ═══════════════════════════════════════════════════════════

export const profile = {
  firstName: 'Rock',
  lastName: 'Aganon',
  role: 'Développeur web full-stack',
  availability: 'Ouvert aux opportunités',
  heroText:
    "Je conçois des applications web complètes, de l'interface à la base de données. En fin de formation à EIG Bénin, je cherche une équipe pour progresser et livrer des produits utiles.",
  photo: '/photo.jpg',

  // ✏️ À MODIFIER : coordonnées
  email: 'rockaganon9@gmail.com',
  github: 'https://github.com/rockaganon9-gif',
  linkedin: 'https://linkedin.com/in/RockyAganon',

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
    title: 'Développement full-stack',
    text: 'Interfaces React, API et bases de données. Je structure mon code proprement, en composants réutilisables et faciles à maintenir.',
  },
  {
    icon: 'monitor',
    title: 'Interfaces responsives',
    text: "Des pages qui s'adaptent du mobile au grand écran avec Tailwind CSS, en soignant l'accessibilité et les performances.",
  },
  {
    icon: 'chart',
    title: 'Intégration & outils',
    text: 'Maquette vers page web fidèle, connexion à des API REST, versionnement avec Git et GitHub, travail en équipe.',
  },
]

export const projects = [
  {
    title: 'Global Market',
    text: "Marketplace multi-vendeurs pour l'Afrique : les vendeurs ouvrent leur boutique et publient des produits physiques ou digitaux, les acheteurs commandent avec Mobile Money, carte bancaire ou paiement à la livraison. Le projet est un monorepo complet : site web, API avec base de données et application mobile.",
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'React Native'],
    image: '/projects/global-market.jpg',
    demo: 'https://global-market-beige.vercel.app/',
    code: 'https://github.com/rockaganon9-gif/global-market',
  },
  {
    title: 'Pros-cours',
    text: "Site vitrine pour une agence de livraison au Bénin (repas, colis, courses). Le client décrit sa course dans un formulaire, et la demande est préparée automatiquement pour WhatsApp. Une page claire sur les services, le fonctionnement et les zones desservies.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/pros-cours.jpg',
    demo: 'https://pro-coursec.netlify.app/',
    code: '',
  },
  {
    title: 'Meublier',
    text: "Site e-commerce de démonstration pour un studio de design d'intérieur : catalogue filtrable par catégorie, collections, témoignages et mise en page responsive.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/agn-meuble.jpg',
    demo: 'https://agn-meuble.netlify.app/',
    code: '',
  },
]

export const about = {
  paragraphs: [
    "Je suis Rock Aganon, développeur web full-stack en fin de formation à EIG Bénin. J'aime construire des applications complètes, de l'interface React jusqu'à l'API et à la base de données, avec un code propre et facile à maintenir.",
    "J'ai déjà mis en ligne plusieurs projets, dont une marketplace multi-vendeurs et des sites vitrines pour des activités locales. Je cherche maintenant une première expérience dans une équipe où progresser vite et contribuer dès le départ.",
  ],
  training: 'Formation en développement web full-stack, EIG Bénin, 2026',
  stack: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'GitHub', 'PHP', 'Laravel', 'WordPress'],
}

export const contactText =
  "Un stage, une alternance, un premier poste ou un projet à réaliser ? Écrivez-moi, je réponds rapidement."