---
title: "Docker für Anfänger: In 30 Minuten startklar"
date: "2026-06-26"
description: "Docker verstehen und einrichten: Images, Container, Volumes, Netzwerke, Docker Compose – Schritt für Schritt mit praktischen Beispielen."
tags: ["Docker", "Containers", "Tutorial", "Anfänger", "DevOps"]
slug: "docker-erste-schritte"
emoji: "🐳"
---

Docker hat die Welt der Software-Entwicklung revolutioniert. Aber was ist Docker eigentlich und warum sollte dich das interessieren? In diesem Tutorial lernst du in 30 Minuten alles was du brauchst.

## Was ist Docker?

Docker verpackt Software in Container – standardisierte Einheiten die alles enthalten was eine Anwendung zum Laufen braucht: Code, Laufzeitumgebung, Systemtools, Bibliotheken. Das Ergebnis: Eine Anwendung läuft auf jedem System gleich.

## Docker vs. Virtuelle Maschinen

VMs virtualisieren die gesamte Hardware und brauchen viel Ressourcen. Docker-Container teilen sich den Kernel des Host-Systems und sind daher viel leichter und schneller.

## Installation

Docker installierst du mit dem offiziellen Installationsscript. Nach der Installation testest du mit \`docker run hello-world\`.

## Die wichtigsten Befehle

- \`docker run\` – Startet einen Container
- \`docker ps\` – Zeigt laufende Container
- \`docker images\` – Zeigt verfügbare Images
- \`docker stop\` – Stoppt einen Container
- \`docker rm\` – Entfernt einen Container
- \`docker logs\` – Zeigt Container-Logs
- \`docker exec\` – Führt Befehl in Container aus

## Docker Images

Images sind die Baupläne für Container. Du findest Millionen von Images auf Docker Hub. Beliebte Images: nginx, postgres, redis, ubuntu, node.

## Docker Compose

Für Multi-Container-Anwendungen nutzt du Docker Compose. Eine einzige YAML-Datei definiert alle Container, Netzwerke und Volumes.

## Praktisches Beispiel

Erstelle eine \`docker-compose.yml\` mit einem Webserver und einer Datenbank. Starte mit \`docker compose up -d\` und deine Anwendung läuft.

## Fazit

Docker ist das wichtigste Werkzeug für moderne Software-Entwicklung und Server-Administration. Lerne die Grundlagen und du wirst nie wieder "Aber auf meinem System funktioniert es" hören.
