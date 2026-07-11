// TechPulse Genre-Katalog
// Definiert: slug, label, icon, color, beschreibung

export const GENRES = [
  {
    slug: 'krypto',
    label: '₿ Krypto & DeFi',
    icon: '₿',
    color: 'from-yellow-500/20 via-orange-500/10 to-transparent',
    accent: 'text-yellow-400 border-yellow-500/40',
    tag: 'text-yellow-400 bg-yellow-500/15 border-yellow-500/30',
    description: 'Bitcoin, Solana, Wallets, DeFi & Portfolio',
  },
  {
    slug: 'smart-home',
    label: '🏠 Smart Home',
    icon: '🏠',
    color: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accent: 'text-blue-400 border-blue-500/40',
    tag: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
    description: 'Home Assistant, Zigbee, Shelly, IoT',
  },
  {
    slug: 'server',
    label: '🖥️ Server & Self-Hosting',
    icon: '🖥️',
    color: 'from-emerald-500/20 via-green-500/10 to-transparent',
    accent: 'text-emerald-400 border-emerald-500/40',
    tag: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    description: 'Docker, Linux, VPS, TrueNAS & Heimserver',
  },
  {
    slug: 'sicherheit',
    label: '🔐 Sicherheit & Datenschutz',
    icon: '🔐',
    color: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accent: 'text-rose-400 border-rose-500/40',
    tag: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
    description: 'VPNs, Passwort-Manager, SSH & Encryption',
  },
  {
    slug: 'ki',
    label: '🤖 KI & Automatisierung',
    icon: '🤖',
    color: 'from-purple-500/20 via-violet-500/10 to-transparent',
    accent: 'text-purple-400 border-purple-500/40',
    tag: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
    description: 'Lokale KI-Agenten, TTS & GitHub Actions',
  },
  {
    slug: 'einkommen',
    label: '💰 Passives Einkommen',
    icon: '💰',
    color: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    accent: 'text-amber-400 border-amber-500/40',
    tag: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
    description: 'Honeygain, EarnApp, Affiliate & Side Hustles',
  },
  {
    slug: 'finanzen',
    label: '📈 Finanzen & Investieren',
    icon: '📈',
    color: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    accent: 'text-teal-400 border-teal-500/40',
    tag: 'text-teal-400 bg-teal-500/15 border-teal-500/30',
    description: 'ETF, Portfolio-Strategie & langfristiges Investing',
  },
  {
    slug: 'tests',
    label: '🧪 Tests & Vergleiche',
    icon: '🧪',
    color: 'from-gray-500/20 via-slate-500/10 to-transparent',
    accent: 'text-gray-400 border-gray-500/40',
    tag: 'text-gray-400 bg-gray-500/15 border-gray-500/30',
    description: 'Hardware-, Software- & Service-Vergleiche',
  },
];

export const CATEGORY_FOR = {
  // Krypto & DeFi
  'bitcoin-wallet-sicherheit-guide': 'krypto',
  'bitcoin-solo-mining-2026': 'krypto',
  'krypto-portfolio-strategie-2026': 'krypto',
  'solana-defi-phantom-wallet': 'krypto',
  'meme-token-solana-erfahrungen': 'krypto',
  // Smart Home & IoT
  'beste-smart-steckdosen-2026': 'smart-home',
  'home-assistant-grundlagen-2026': 'smart-home',
  'homeassistant-lsc-tuya': 'smart-home',
  'zigbee-vs-wlan-smart-home': 'smart-home',
  'truenas-docker-smart-home': 'smart-home',
  // Server & Self-Hosting
  'docker-erste-schritte': 'server',
  'docker-fuer-einsteiger': 'server',
  'docker-compose-guide-2026': 'server',
  'linux-grundlagen-terminal': 'server',
  'ssh-sicherheit-guide': 'server',
  'contabo-vps-test': 'server',
  'hetzner-vps-homelab-test': 'server',
  'heimserver-vs-cloud-2026': 'server',
  'github-pages-kostenloses-hosting': 'server',
  'hermes-agent-lokal-betreiben': 'server',
  'namecheap-domains-test': 'server',
  'truenas-scale-erste-schritte': 'server',
  'ki-automatisierung-blog': 'server',
  // Sicherheit & Datenschutz
  'bitwarden-passwort-manager-test': 'sicherheit',
  'protonvpn-vs-nordvpn-vs-surfshark': 'sicherheit',
  'protonvpn-vs-nordvpn-vs-surfshark-vergleich': 'sicherheit',
  'surfshark-vpn-test': 'sicherheit',
  // KI & Automatisierung
  'edge-tts-kostenlos': 'ki',
  'lokale-ki-agenten-ohne-cloud-hermes': 'ki',
  // Passives Einkommen
  'honeygain-passives-einkommen': 'einkommen',
  'earnapp-passives-einkommen': 'einkommen',
  'amazon-associates-deep-dive-passives-einkommen': 'einkommen',
  // Finanzen
  'etf-investing-langfristig': 'finanzen',
  // Tests & Vergleiche
  'amazon-fundstueck-lohnt-sich-das': 'tests',
  'telegram-channel-schnappdeal-deals': 'tests',
} as const;

export function getCategory(slug: string): string {
  return CATEGORY_FOR[slug as keyof typeof CATEGORY_FOR] || 'tests';
}

export function getGenreBySlug(slug: string) {
  return GENRES.find(g => g.slug === getCategory(slug)) || GENRES[GENRES.length - 1];
}
