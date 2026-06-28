---
title: "TrueNAS als Docker-Server: Mein Smart Home Backbone"
date: "2026-06-28"
description: "Wie ich TrueNAS als zentralen Docker-Server für mein Smart Home nutze — von der Einrichtung bis zum Alltag."
tags: ["Smart Home", "Docker", "TrueNAS", "DIY"]
slug: "truenas-docker-smart-home"
emoji: "🏠"
---

## Warum TrueNAS?

Wer ein Smart Home aufbaut, steht früher oder später vor der Frage: Wo laufen die ganzen Dienste? Ein Raspberry Pi reicht oft nicht, und Cloud-Lösungen kosten nicht nur Geld, sondern geben auch die Kontrolle ab.

Meine Antwort: **TrueNAS** auf einem dedicatierten Server. Die Kombination aus ZFS-Dateisystem, Docker-Support und einer soliden Weboberfläche macht es zum perfekten Backbone.

## Mein Setup

Auf meinem TrueNAS-Server (192.168.178.191) laufen verschiedene Docker-Container:

- **Home Assistant** — Zentrale Smart Home Steuerung
- **Jellyfin** — Medienserver für Filme & Serien
- **Verschiedene Automatisierungs-Dienste** — Cron-Jobs, Monitoring, Backups

## Docker auf TrueNAS: Die Vor- und Nachteile

### ✅ Vorteile
- **ZFS** bietet Datenintegrität und Snapshots
- Einfache Verwaltung der Container über die Weboberfläche
- Ressourcen-Limits pro Container
- Automatische Updates möglich

### ⚠️ Nachteile
- TrueNAS ist kein reiner Docker-Host — man muss sich an dessen Konventionen halten
- Hardware-Kompatibilität kann tricky sein
- Die Community-Auswahl an Apps ist überschaubar

## Tipps für den Einstieg

1. **Z-Pool anlegen** bevor ihr Container startet — sonst landet alles auf dem Boot-Pool
2. **Snapshot-Richtlinie** einrichten — ZFS-Snapshots sind Gold wert
3. **Ressourcen-Limits** setzen — ein Container sollte nicht den ganzen RAM fressen
4. **Backups!** — Auch ZFS ersetzt kein Offsite-Backup

## Fazit

TrueNAS als Docker-Server ist nichts für Anfänger, aber wenn man einmal alles laufen hat, ist es unglaublich zuverlässig. Die Kombination aus ZFS und Docker gibt mir die Kontrolle, die ich brauche — ohne monatliche Cloud-Kosten.
