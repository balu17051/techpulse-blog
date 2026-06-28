---
title: "GitHub Pages: Kostenloses Hosting für Entwickler"
date: "2026-06-25"
description: "Warum GitHub Pages die beste kostenlose Hosting-Lösung für statische Websites ist — und wie man es einrichtet."
tags: ["GitHub", "Hosting", "Tutorial", "Kostenlos"]
slug: "github-pages-kostenloses-hosting"
emoji: "🚀"
---

## Warum GitHub Pages?

Wer eine Website hosten will, hat die Qual der Wahl. Die meisten Optionen kosten Geld — oft mehr als erwartet. GitHub Pages ist die Ausnahme:

- ✅ **Komplett kostenlos** — Für öffentliche Repos
- ✅ **HTTPS inklusive** — Automatisches SSL-Zertifikat
- ✅ **CI/CD eingebaut** — GitHub Actions für automatische Deploys
- ✅ **Custom Domains** — Eigene Domain möglich
- ✅ **Jederzeit kündbar** — Keine Verträge, keine Abo-Fallen

## Einrichtung in 5 Minuten

### 1. Repo erstellen
Einfach ein öffentliches Repo auf GitHub anlegen.

### 2. Seiten-Code pushen
Egal ob Astro, Next.js, Hugo oder reines HTML — einfach pushen.

### 3. GitHub Actions Workflow
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

### 4. Pages aktivieren
In den Repo-Settings → Pages → Source: "GitHub Actions" auswählen.

### 5. Fertig!
Die Website ist verfügbar unter `username.github.io/repo-name`.

## Grenzen

- **Nur statische Sites** — Kein serverseitiges PHP, Python etc.
- **100 MB Limit** — Pro Build-Artifact
- **1 GB gesamt** — Repo-Größe
- **100.000 Requests/Tag** — Für kleine Blogs mehr als genug

## Fazit

GitHub Pages ist die no-brainer-Lösung für statische Websites. Kostenlos, schnell und zuverlässig. Jeder Cent, den man für einfaches Blog-Hosting ausgibt, ist zu viel.
