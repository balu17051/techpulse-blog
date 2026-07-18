// TechPulse Deal-Kategorien
export const GENRES = [
  {
    slug: 'angebote',
    label: '🛒 Angebote',
    icon: '🛒',
    color: 'from-primary/20 to-primary/5',
    accent: 'text-primary',
    tag: 'text-primary bg-primary/15 border-primary/30',
    description: 'Aktuelle Amazon-Angebote mit Preis und Rabatt.',
  },
  {
    slug: 'smart-home',
    label: '🏠 Smart Home',
    icon: '🏠',
    color: 'from-blue-500/20 to-blue-500/5',
    accent: 'text-blue-400',
    tag: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
    description: 'Smart Home, Echo, Alexa und Heimautomatisierung.',
  },
  {
    slug: 'pc',
    label: '💻 PC & Zubehör',
    icon: '💻',
    color: 'from-emerald-500/20 to-emerald-500/5',
    accent: 'text-emerald-400',
    tag: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    description: 'Notebooks, SSDs, Zubehör und Hardware.',
  },
  {
    slug: 'haushalt',
    label: '🧹 Haushalt',
    icon: '🧹',
    color: 'from-amber-500/20 to-amber-500/5',
    accent: 'text-amber-400',
    tag: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    description: 'Staubsauger, Reinigung, Alltag und Küche.',
  },
];

export const CATEGORY_FOR: Record<string, string> = {
  angebote: 'angebote',
  'amazon-associates-deep-dive-passives-einkommen': 'angebote',
  'amazon-fundstueck-lohnt-sich-das': 'angebote',
  'beste-smart-steckdosen-2026': 'smart-home',
  'telegram-channel-schnappdeal-deals': 'angebote',
  truenas: 'haushalt',
  docker: 'pc',
  homeassistant: 'smart-home',
  'edge-tts-kostenlos': 'pc',
  'earnapp-passives-einkommen': 'angebote',
  'honeygain-passives-einkommen': 'angebote',
  'protonvpn-vs-nordvpn-vs-surfshark-vergleich': 'haushalt',
  'surfshark-vpn-test': 'haushalt',
};

export function getCategory(slug: string) {
  return CATEGORY_FOR[slug] || 'angebote';
}

export function getGenreBySlug(slug: string) {
  return GENRES.find(g => g.slug === slug) || GENRES[0];
}

export function groupedPosts() {
  const allPosts = import.meta.glob('/opt/data/techpulse-blog/src/blog/*.md', { eager: true });
  const posts = Object.entries(allPosts).map(([path, post]: [string, any]) => ({
    slug: path.split('/').pop()?.replace('.md', ''),
    category: getCategory(path.split('/').pop()?.replace('.md', '') || ''),
    ...post.frontmatter,
  }));
  const sorted = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const map = new Map<string, typeof posts>();
  for (const post of sorted) {
    const cat = post.category;
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(post);
  }
  return {
    posts: sorted,
    groups: map,
    activeGenres: GENRES.filter(g => map.has(g.slug)),
  };
}
