---
title: "TrueNAS SCALE: Erste Schritte für Einsteiger"
date: "2026-06-19"
description: "TrueNAS SCALE installieren und einrichten: Hardware-Anforderungen, Netzwerk, Pools, Apps, Docker und Backup-Strategien."
tags: ["TrueNAS", "NAS", "Server", "Docker", "ZFS"]
slug: "truenas-scale-erste-schritte"
emoji: "🖥️"
---

TrueNAS SCALE ist das beste Betriebssystem für deinen eigenen Server. Es kombiniert NAS-Funktionalität mit Docker, VMs und einer modernen Weboberfläche. In diesem Guide zeige ich dir alles was du für den Einstieg brauchst.

## Was ist TrueNAS SCALE?

TrueNAS SCALE ist ein Linux-basiertes Betriebssystem speziell für Server und NAS. Es basiert auf Debian Linux und nutzt ZFS als Dateisystem. Die Weboberfläche ist komplett browser-basiert – du brauchst keinen Monitor am Server.

## Hardware-Anforderungen

**Minimum:** 8 GB RAM, 2 CPU-Kerne, 16 GB System-SSD, 1 Netzwerk-Port.
**Empfohlen:** 16 GB RAM, 4 CPU-Kerne, 32 GB System-SSD, 2 Netzwerk-Ports.
**Optimal:** 32 GB RAM, 8+ CPU-Kerne, Enterprise-SSD, 10GbE-Netzwerk.

Wichtig: RAM ist der wichtigste Faktor. ZFS nutzt RAM als Cache. Plan 1 GB RAM pro 1 TB Speicherplatz ein.

## Installation

Lade das ISO von truenas.com herunter, erstelle einen Boot-USB-Stick mit Rufus oder Balena Etcher, boote vom USB-Stick und folge dem Installationsassistenten. Wähle die System-SSD für die Installation.

## Erste Einrichtung

Nach dem Booten erreichst du TrueNAS über die IP-Adresse im Browser. Erstelle deinen Admin-Account und konfiguriere das Netzwerk. Statische IP empfohlen.

## ZFS-Pools erstellen

Ein ZFS-Pool ist deine Speicher-Einheit. Gehe zu Storage → Create Pool. Wähle deine Festplatten und den RAID-Typ:

- **Mirror (RAID 1):** 2 Festplatten, eine Ausfallsicherheit
- **RAID-Z1:** 3+ Festplatten, eine Ausfallsicherheit
- **RAID-Z2:** 4+ Festplatten, zwei Ausfallsicherheit

Für Heimnutzung empfehle ich Mirror oder RAID-Z1.

## Apps und Docker

TrueNAS SCALE hat einen App-Store mit vorkonfigurierten Docker-Containern. Beliebte Apps: Plex, Home Assistant, Immich, Nextcloud, Pi-hole, AdGuard Home, Portainer.

Du kannst auch eigene Docker-Container über die CLI einrichten. TrueNAS SCALE unterstützt Docker Compose.

## Netzwerk-Konfiguration

Richte eine statische IP ein, konfiguriere dein Netzwerk und aktiviere SSH für den Fernzugriff. Für Zugriff von überall: VPN einrichten (WireGuard oder Tailscale).

## Backup-Strategie

Die 3-2-1-Regel: 3 Kopien, 2 verschiedene Medien, 1 Offsite. Nutze ZFS-Snapshots für lokale Backups und rclone für Cloud-Backups.

## Fazit

TrueNAS SCALE ist die perfekte Plattform für deinen eigenen Server. Mit ZFS, Docker und einer benutzerfreundlichen Weboberfläche hast du alles was du brauchst. Starte mit einem einfachen Setup und erweitere es nach und nach.
