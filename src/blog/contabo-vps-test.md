---
title: "Contabo VPS: Viel Server fürs Geld — Lohnt sich der Hype?"
date: "2026-07-05"
description: "Contabo VPS im Test: 8 vCPU, 32 GB RAM, 400 GB SSD für unter 10€. Was steckt dahinter? Performance, Support und Eignung fürs Homelab."
tags: ["Contabo", "VPS", "Homelab", "Server", "Hetzner Alternative"]
slug: "contabo-vps-test"
emoji: "�"
affiliate: true
affiliate_name: "Contabo"
affiliate_link: "https://contabo.com?affiliate=TECHPULSE"
---

## Der Versuch: Viel Hardware für wenig Geld

8 vCPU-Kerne, 32 GB RAM, 400 GB SSD — für **€8,99/Monat**. Klingt zu gut um wahr zu sein? Contabo verspricht genau das. Für Homelabber, Docker-Fans und alle die mehr Power brauchen als eine kleine Cloud-Instanz bietet Contabo oft die perfekte Ergänzung zum Hetzner-Setup.

Was steckt dahinter — und gibt es versteckte Haken?

## Wer steckt hinter Contabo?

**Contabo GmbH** ist ein deutsches Unternehmen mit Sitz in München. Gegründet 2008 (vielleicht als Spin-off der Universität München), hat sich Contabo auf günstiges Cloud-Hosting und Dedicated Server spezialisiert.

Heute verwaltet das Unternehmen:
- Rechenzentren in **München, Nürnberg, US (New York, Seattle) und Singapur**
- Über 1 Million Kunden
- Bekannt für aggressiv niedrige Preise — manchmal die Hälfte der Konkurrenz

## Die aktuellen VPS-Pläne (2026)

| Plan | vCPU | RAM | SSD | Preis/Monat | Traffic |
|------|------|-----|-----|-------------|---------|
| VPS S | 4 | 8 GB | 200 GB | €5,99 | 32 TB |
| VPS M | 6 | 16 GB | 200 GB | €8,99 | 32 TB |
| VPS L | 8 | 32 GB | 400 GB | €13,99 | 32 TB |
| VPS XL | 12 | 64 GB | 1,6 TB | €26,99 | 32 TB |

Der **VPS L-Grundpreis (€13,99)** ist positiv überraschend. Das sind **0,44€/GB RAM** — kein anderer Anbieter kommt auch nur ansatzweise heran. Traffic ist generö gestaltet mit 32 TB inklusive.

## Hetzner vs Contabo — Wo liegen die Unterschiede?

### Preise (gleiche Specs)

Die Hetzner-Entsprechung zur Contabo VPS L wäre eine **CCX23** (8 vCPU, 32 GB RAM):
- **CCX23**: €32,28/Monat mit **nur 20 TB** Traffic
- **Contabo VPS L**: €13,99/Monat mit **32 TB** Traffic

Fast eine 50% für ein Vielfaches an Traffic. Aber warum ist Hetzner dann nicht pleite?

### Performance und Zuverlässig

Hier liegt der Unterschied:

| Kriterium | Hetzner | Contabo |
|-----------|---------|---------|
| CPU | AMD EPYC dediziert (wirklich!) | AMD EPYC shared |
| SSD | NVMe (sehr schnell) | SATA/NVMe (variiert) |
| Netzwerk | Garantierte Bandbreite | Shared, kann schwanken |
| Uptime | 99.99%+ | 99.9% (gering, aber sichtbar) |
| Support | E-Mail, erreichbar | E-Mail + Telefon (lange Warte) |

**Erfahrungsgemäß** laufen CPU-intensive Workloads bei Hetzner 2-3x schneller. Bei Container-Workloads (Nextcoud, Home Assistant) ist das nicht direkt spürbar, aber bei Transkodierung, Kompilierung oder Machine Learning zeigt es sich.

### Support

**Hetzner:** Reagiert per E-Mail innerhalb von 24-48 Stunden. Englisch und Deutsch. Technisch kompetent.

**Contabo:** Support ist internationalisiert und hat oft Englisch als Primärsprache langsame Reaktionszeiten berichtet. Komplexe Fragen werden oft an "das Team" weitergeleitet. Aber für reine "Server down"-Fälle reicht es.

## Für wen lohnt sich Contabo?

### Ja — wenn du willst:
✅ **Maximale RAM-Menge für wenig Geld** — für €5,99/Monat bekommst du 8 GB. Reichte für Nextcloud, WordPress-Server oder kleines Home Lab.

✅ **Traffic-intensiv arbeitest** — 32 TB sind extrem viel. Bei Hetzner (20 TB extra im günstigeren Plan) zahlt man nach.

✅ **Einen Billiganbieter für Dev/Testing** — Pull-Umschlag Dev-Machine für fünf EUR? Reicht.

### Nein — wenn du brauchst:
✅ **GPU-Power** — Kein GPU-Instanz bei Contabo. Hier brauchst du Hetzner oder Lambda Labs.

✅ **Schnelle CPU-Leistung** — Dedizierte Kerne bei Hetzner sind den Shared-Kernen überlegen.

✅ **Deutschen Support 24/7** — Hetzner ist hier deutlich besser.

✅ **Enterprise-Features** — Load Balancer, Managed DB, Kubernetes sind nicht einfach bei Contabo.

## Mein Setup: Contabo als Zweit-Server nutzen

Viele Homelabber kombinieren: **Hetzner für produktive Dienste** (VPN, Mail, wichtige Daten), **Contabo für Dev/Test und Backup**. So verteilt man Risiko und Kosten.

```bash
# SSH-Keys gleich auf beiden
ssh-copy-id root@HETZNER-IP
ssh-copy-id root@CONTABO-IP

# Docker auf beiden installieren
ssh root@CONTABO-IP 'curl -fsSL https://get.docker.com | sh'

# Erster Container testen
docker run hello-world
```

## Ehrliche Kritik: Wo Contabo nachlässt

1. **Preisverdoppelung nach dem ersten Jahr** — oft vorher in AGB erwähnt, lesen die aber wenige. Prüfe den Listenpreis in der Tabelle oben — nicht den Promo-Preis.

2. **Eingeschränkte Anti-DDoS-Abwehr** — im Gegensatz zu Hetzner haben keine DDoS-Schutz-Einrichtungen Kontroll-Möglichkeiten. Bei einem großen Angriff kann dein Dienst einfach weg sein.

3. **Volumes nicht dynamisch vergrößerbar** — wenn du mehr Storage brauchst, musst du umziehen (neuer VPS oder manuell).

## Fazit: Wer braucht was?

| Szenario | Empfehlung |
|----------|------------|
| Einsteiger-Homelab | **Contabo VPS M** (€8,99, 6c/16 GB) |
| Produktiv-Server mit viel Last | **Hetzner CPX/CCX** |
| Maximales RAM für wenig Geld | **Contabo VPS L** |
| Zuverlässiger E-Mail-Server | **Hetzner CPX21** |
| Dev-/Test-Umgebung | **Contabo VPS S** |
| Backup-Server / Cronjob-Machine | **Contabo VPS M** oder Hetzner CPX11 |

Für das reine Homelabbing ist Contabo eine hervorragende Wahl — solange du die Einschränkung im Kopf behältst (shared CPU, geringere Performance). Kombiniert mit einem Hetzner-Fast-Produktionsserver bekommst du ein hervorragendes Setup.

**Loslegen:** → [contabo.com](https://contabo.com?affiliate=TECHPULSE)

---

*Läufst du bei Hetzner, Contabo oder woanders? Wie sind deine Erfahrungen? Teile es mir in den Kommentaren!*
