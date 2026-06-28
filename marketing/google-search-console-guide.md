# TechPulse Blog – Google Search Console Einrichtung

## Schritt-für-Schritt Anleitung (5 Minuten)

### 1. Aufrufen
Gehe auf: https://search.google.com/search-console

### 2. Neue Property hinzufügen
- Klick auf **"Property hinzufügen"** (oben links)
- Wähle **URL-Präfix** (nicht "Domain")
- Gib ein: `https://balu17051.github.io/techpulse-blog/`

### 3. Eigentümer-Verifizierung
- Wähle **HTML-Tag** (wird automatisch angezeigt)
- Kopiere den Meta-Tag, z.B.:
  `<meta name="google-site-verification" content="ABC123XYZ..." />`
- Diesen Tag muss Andreas in den Astro-Code eingefügen (in `src/layouts/BaseLayout.astro` im `<head>`)
- Danach Astro neu deployen (`npm run build` + Push)
- Zurück in GSC und klick auf **"Verifizieren"**

### 4. Sitemap einreichen
- Im linken Menü: **Sitemaps**
- Gib ein: `sitemap.xml`
- Klick auf **"Absenden"**
- Status sollte nach ein paar Tagen "Erfolgreich" anzeigen

### 5. Indexierungsstatus prüfen
- Menü: **Indexierung** → **Seiten**
- Zeigt an welche Seiten indexiert sind
- Neue Artikel manuell anfordern: **URL-Prüfung** (oben) → URL eingeben → **"Indexierung beantragen"**

### 6. Wichtige GSC-Features
- **Leistungen**: Klicks, Impressions, CTR, durchschnittliche Position
- **Abdeckung**: Fehlerhafte/fehlende Seiten finden
- **Core Web Vitals**: Ladezeiten prüfen (wichtig für Ranking)
- **Links**: Wer linkt auf den Blog?

## Wichtige SEO-Checkliste für TechPulse ✅

- [x] Sitemap.xml erstellt
- [x] robots.txt erstellt
- [x] JSON-LD Structured Data auf allen Artikeln
- [x] OpenGraph Meta Tags (für Social Sharing)
- [x] Twitter Card Tags
- [x] Canonical URLs
- [x] Unique Meta Descriptions pro Seite
- [x] Mobile-Responsive Design (Tailwind)
- [x] Fast Loading (Astro Static Site)
- [ ] Google Search Console verifiziert ← **TODO für Andreas**
- [ ] Bing Webmaster Tools (optional, kostenlos)
- [ ] Bing Index Now API (optional)

## Bing Webmaster Tools (optional, 2 Min)
1. https://www.bing.com/webmasters
2. Google-Konto verwenden (gleiche Verifizierung)
3. Sitemap einreichen: `https://balu17051.github.io/techpulse-blog/sitemap.xml`
4. **Index Now** aktivieren für sofortige Indexierung
