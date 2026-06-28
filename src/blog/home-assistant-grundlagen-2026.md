---
title: "Home Assistant 2026: Der ultimative Einstieg für Anfänger"
date: "2026-06-18"
description: "Home Assistant einrichten und dein Smart Home automatisieren – Schritt für Schritt für Hardware, Installation, Integrationen und erste Automatisierungen."
tags: ["Home Assistant", "Smart Home", "IoT", "Automatisierung"]
slug: "home-assistant-grundlagen-2026"
emoji: "🏠"
---

Du möchtest dein Zuhause smarter machen und hast dich für Home Assistant entschieden? Super Wahl! In diesem Guide zeige ich dir Schritt für Schritt, wie du Home Assistant einrichtest, Geräte hinzufügst und erste Automatisierungen erstellst.

## Was ist Home Assistant?

Home Assistant ist eine Open-Source-Plattform für die Smart-Home-Automatisierung. Im Gegensatz zu kommerziellen Lösungen wie Google Home oder Amazon Alexa läuft Home Assistant komplett lokal auf deinem eigenen Server. Das bedeutet: Keine Cloud, keine Datenschutzbedenken und volle Kontrolle über deine smarten Geräte.

Mit über 2.000 Integrationen ist Home Assistant die vielseitigste Smart-Home-Plattform überhaupt. Egal ob Philips Hue, Shelly, TP-Link, Ikea TRÅDFRI oder selbst gebaute MQTT-Geräte – Home Assistant fast alles zusammen.

## Welche Hardware brauchst du?

Du hast mehrere Optionen für die Home Assistant-Installation:

**1. Home Assistant Green (Kaufgerät)**
- Fertiges Gerät für ~70€
- Plug & Play, kein technisches Wissen nötig
- Perfekt für Einsteiger

**2. Raspberry Pi 4/5**
- Flexibler als Green
- Kann gleichzeitig andere Dienste laufen lassen
- SD-Karte oder besser SSD verwenden

**3. Eigener Server / TrueNAS (Empfohlen)**
- Maximum Leistung und Flexibilität
- Läuft als Docker-Container
- Kann mit anderen Diensten kombiniert werden
- Perfekt wenn du eh einen Server laufen hast wie TrueNAS SCALE

## Installation auf TrueNAS via Docker

Das beste Setup für TrueNAS-Nutzer ist Docker. Hier die wichtigsten Schritte:

Erstelle ein Verzeichnis für deine Konfiguration und nutze Docker Compose. Die wichtigsten Ordner sind:

- /config – Home Assistant Konfiguration
- /config/automations.yaml – Deine Automatisierungen
- /config/configuration.yaml – Hauptkonfiguration

Starte Home Assistant und öffne die Weboberfläche auf Port 8123.

## Erste Schritte nach der Installation

Nach der Installation erstellst du deinen Account und durchläufst das Grundsetup. Home Assistant findet automatisch viele Geräte in deinem Netzwerk – beeil dich nicht mit dem Hinzufügen. Plane zuerst dein Setup durch.

### Wichtige Integrationen

Gehe zu Einstellungen → Geräte & Dienste und füge diese Integrationen hinzu:

- **Philips Hue:** Für smarte Lampen und Streifen
- **Shelley:** Für smarte Schalter und Steckdosen
- **TP-Link:** Kasa-Smart-Steckdosen
- **MQTT:** Für alle selbst gebauten Geräte
- **Google Cast / Chromecast:** Für Media-Control
- **Weather / OpenWeatherMap:** Für Wetter-basierte Automatisierungen

## Deine erste Automatisierung

Das Beste an Home Assistant: Automatisierungen lassen sich komplett per UI erstellen, ohne eine Zeile YAML zu schreiben.

**Beispiel: Licht bei Sonnenuntergang einschalten**

1. Einstellungen → Automatisierungen → Neue Automatisierung
2. Auslöser: Sonnenuntergang
3. Aktion: Licht einschalten
4. Speichern – fertig!

**Beispiel: Alle Lichter bei Verlassens des Hauses ausschalten**

1. Auslöser: Alle Bewegungsmelder 10 Minuten keine Bewegung erkannt
2. Aktion: Alle Lichter ausschalten
3. Zusätzlich: Nachricht aufs Handy senden

## Tipps für Einsteiger

Sammle erst mal Sensoren und Geräte bevor du mit komplexen Automatisierungen startest. Lerne wie die Basics funktionieren: Licht ein/aus, Thermostat steuern, Türklingel melden. Und als Profi-Tipp: Richte von Anfang an Seldner-Backups ein.

## Home Assistant vs. Alexa/Google Home

Der große Vorteil: Home Assistant funktioniert ohne Internet. Wenn dein Internet aus geht, läuft dein Smart Home trotzdem. Außerdem sammelt Home Assistant keine Daten. Du bestimmst wo deine Daten landen. Und kein Vendor-Lock-In: Du bist nicht an ein Ökosystem gebunden.

## Fazit

Home Assistant ist die beste Wahl für alle die ein wirklich smartes Zuhause wollen ohne auf eine Cloud-Anbieter angewiesen zu sein. Mit einem eigenen Server wie TrueNAS hast du maximale Kontrolle und Datensicherheit. Starte erst mal mit ein paar Geräten und einer einfachen Automatisierung – der Rest kommt von alleine.
