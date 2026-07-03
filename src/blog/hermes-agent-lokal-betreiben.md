---
title: "Hermes Agent lokal betreiben – Dein eigener KI-Assistent auf Linux & Raspberry Pi"
date: "2026-07-03"
description: "Hermes Agent komplett lokal ohne Cloud-Abo betreiben: Setup-Guide für Linux-Server, Raspbery Pi 5 und Mini-PCs. Voraussetzungen, Installation, Kosten und wann es sich lohnt."
tags: ["Hermes Agent", "Lokale KI", "Self-Hosting", "Linux", "KI-Automatisierung", "Raspberry Pi", "Smart Home"]
slug: "hermes-agent-lokal-betreiben"
emoji: "🤖"
---

## Was ist Hermes Agent und warum lokal?

Die meisten KI-Assistenten laufen in der Cloud — OpenAI, Claude, Gemini. Das funktioniert, aber es gibt einen Haken: **Deine Prompts verlassen deinen Rechner.** Hinzu kommen laufende Kosten, Rate-Limits und Abhängigkeit von externen Anbietern.

**Hermes Agent** ist anders konzipiert: Er ist ein Open-Source-Agent, der lokal auf deinem eigenen System läuft — Terminal, Server oder Raspberry Pi. Er nutzt APIs nur, wenn du es willst, und du behältst die volle Kontrolle über Tools, Dateien, Cronjobs und Terminalsitzungen.

### Die Vorteile der lokalen Variante

- **Keine monatlichen Grundkosten** für den Agent selbst
- **Volle Privatsphäre** — sensible Daten bleiben auf deiner Hardware
- **Immer verfügbar**, auch ohne Internet
- **Unendlich anpassbar** — Skills, Tools und Workflows selbst definieren
- **Multi-Platform-Gateway** — nutze ihn über Telegram, Discord, Slack oder CLI

## Voraussetzungen für den lokalen Betrieb

| Komponente | Minimum | Empfohlen |
|------------|---------|-----------|
| CPU | 2 Kerne | 4+ Kerne |
| RAM | 2 GB | 8 GB |
| Speicher | 10 GB | 20 GB SSD |
| OS | Linux, macOS, Windows + WSL2 | Ubuntu 24.04 LTS |

### Hardware-Empfehlungen

Wenn du keinen vorhandenen Rechner nutzen willst, eignen sich vor allem zwei Szenarien:

- **Raspberry Pi 5 (8 GB)** — günstig, sparsam, läuft 24/7
- **Mini-PC (z. B. Beelink, Intel NUC)** — mehr Power für mehrere parallel laufende Agenten

Ein Raspberry Pi 5 mit 8 GB reicht für Hermes Agent inklusive軽gewichtiger Modelle vollkommen aus. Für rechenintensivere Modelle oder mehrere gleichzeitig laufende Skills nimm lieber einen Mini-PC.

## Installation – Schritt für Schritt

### 1. System vorbereiten

```bash
# Ubuntu / Debian
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git build-essential
```

### 2. Hermes Agent installieren

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Der Installer richtet eine virtuelle Umgebung und Abhängigkeiten automatisch ein.

### 3. Erste Konfiguration

```bash
hermes setup
```

Wähle dein bevorzugtes Modell aus. Für den lokalen Betrieb eignen sich besonders:

- **Qwen OAuth** — kostenlos per Browser-Login
- **NVIDIA NIM** — kostenloser API-Key auf build.nvidia.com
- **Ollama-Lokalmodell** — komplett ohne externe API

### 4. Provider konfigurieren

Öffne die Config:

```bash
hermes config edit
```

Trage deinen gewünschten Provider ein, Beispiel für einen kostenlosen OAuth-Login:

```yaml
model:
  provider: qwen-oauth
  default: qwen/qwen2.5-72b-instruct
```

### 5. Testlauf

```bash
hermes chat -q "Sag Hallo und liste meine vorhandenen Skills auf"
```

Wenn du eine Antwort bekommst, läuft Hermes Agent lokal und ist bereit für autonome Aufgaben.

## Lokaler Betrieb im Praxiseinsatz

### Terminal-Automation

Hermes Agent kann Shell-Befehle direkt ausführen, Dateien bearbeiten und ganze CI/CD-Workflows steuern. Beispiel: Alle 2 Stunden checken, ob dein Docker-Setup aktuell ist.

### Smart-Home & Home Assistant

Über das Gateway kannst du Hermes mit Telegram oder Discord verbinden und so dein Smart Home steuern — ohne dass du Home Assistant verlässt.

### Geplante Aufgaben

Mit integriertem Scheduler automatisierst du wiederkehrende Arbeiten:

```bash
hermes cron create "0 9 * * *" -p "Poste eine Zusammenfassung der gestrigen Server-Logs"
```

## Kostenvergleich: Lokal vs. Cloud-Abos

| Variante | Kosten/Monat | Vorteil | Nachteil |
|----------|-------------|---------|----------|
| Hermes lokal + Qwen/NVIDIA | 0 € | Kostenlos, privat | Abhängig von Free-Tier-Limits |
| Hermes lokal + Ollama lokal | 0 € + Strom | Komplett offline | Lokale Modelle sind weniger mächtig |
| Cloud-Agenten (GPT-4, Claude) | 10–30 € | Stärkste Modelle | Kosten, Datenschutz |
| Hetzner VPS (CPX11) | ~3,79 € | Immer online, schnell | Kleine laufende Kosten |

Für die meisten Selbsthoster reicht der **kostenlose lokale Betrieb komplett ohne Kosten**.

## Hardware zum Loslegen

Wenn du Hardware brauchst, findest du preiswerte Optionen:

- **[Raspberry Pi 5 (8 GB)](https://amzn.to/4eRHaXc)** — Der Klassiker für Self-Hosting
- **[Mini-PC mit Linux vorinstalliert](https://amzn.to/4eRHaXc)** — Mehr Power für parallele Agenten
- **[Samsung SSD für schnelle Boot-Zeiten](https://amzn.to/4eRHaXc)** — Lässt den Agenten schneller starten

Mit unserem Amazon-Link unterstützt du TechPulse ohne zusätzliche Kosten.

## Häufige Fehler und wie du sie vermeidest

❌ **Zu wenig RAM bei lokalen Modellen** — 2 GB reichen nicht für große Modelle. Nutze kleinere Modelle oder mehr RAM.

❌ **Keine automatischen Updates** — Hermes Agent entwickelt sich schnell. Prüfe regelmäßig auf Updates: `hermes update`.

❌ **Alles auf einer SD-Karte installieren** — SD-Karten verschleißen bei vielen Schreibvorgängen. Nutze eine SSD oder USB-Datenträger.

❌ **Kein Failover-Provider** — lokal ist super, aber wenn dein Internet ausfällt, solltest du einen Backup-Provider konfigurieren.

## Fazit

Hermes Agent lokal zu betreiben, ist eine der besten Entscheidungen für alle, die **echte Kontrolle über ihre KI-Workflows** haben wollen. Ob auf einem Raspberry Pi für den Einstieg oder auf einem Linux-Server für den professionellen Einsatz — lokal ist schnell aufgesetzt, kostet fast nichts und ist deutlich privater als jede Cloud-Lösung.

**Starte heute:**
1. [Raspberry Pi 5 bei Amazon bestellen](https://amzn.to/4eRHaXc)
2. Hermes Agent installieren
3. Ersten Skill laden und ausprobieren

---

*Hinweis: Dieses Tutorial enthält Partner-Links. Wenn du darüber einkaufst, unterstützt du TechPulse ohne zusätzliche Kosten.*
