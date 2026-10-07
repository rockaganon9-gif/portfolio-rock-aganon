# Portfolio — Rock Aganon (React + Vite + Tailwind CSS)

Basé sur le template **Folio** de Laurent Begey (licence MIT), converti en composants React.

## Lancer le projet

```bash
npm install
npm run dev      # développement  → http://localhost:5173
npm run build    # production     → dossier dist/
```

## Personnaliser

1. **Tout le texte** se modifie dans `src/data.js` (cherchez les lignes « ✏️ À MODIFIER »).
2. **Photo** : déposez votre image dans `public/` sous le nom `photo.jpg` (sans fichier, vos initiales s'affichent).
3. **Images de projets** : déposez-les dans `public/` et renseignez `image: '/mon-image.png'` dans `src/data.js`.
4. **Couleur d'accent** : `tailwind.config.js` → `colors.accent`.

## Déploiement gratuit

Vercel ou Netlify : importez le dépôt GitHub, commande de build `npm run build`, dossier de sortie `dist`.
