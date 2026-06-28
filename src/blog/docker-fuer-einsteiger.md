---
title: "Docker für Einsteiger: Container statt Chaos"
date: "2026-06-23"
description: "Ein praktischer Einstieg in Docker — von den Grundlagen bis zum ersten eigenen Container auf TrueNAS."
tags: ["Docker", "Tutorial", "TrueNAS", "DevOps"]
slug: "docker-fuer-einsteiger"
emoji: "🐳"
---

## Was ist Docker eigentlich?

Stell dir vor, du packst eine Anwendung mit all ihren Abhängigkeiten in eine Box. Diese Box läuft überall gleich — egal ob auf deinem Laptop, einem Server oder in der Cloud. Das ist Docker.

## Die Grundbegriffe

- **Image** — Die Vorlage, das "Rezept" für einen Container
- **Container** — Die laufende Instanz eines Images
- **Dockerfile** — Die Bauanleitung für ein Image
- **Docker Compose** — Orchestriert mehrere Container zusammen
- **Volume** — Persistente Daten, die den Container-Neustart überleben

## Mein erstes Setup: Portainer

Wenn du Docker lernst, starte mit **Portainer** — einer grafischen Oberfläche für Docker:

```yaml
version: "3"
services:
  portainer:
    image: portainer/portainer-ce:latest
    ports:
      - "9443:9443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    restart: unless-stopped

volumes:
  portainer_data:
```

Das gibt dir eine Weboberfläche unter `https://deine-ip:9443`, mit der du Container verwalten kannst — ohne Kommandozeile.

## Docker auf TrueNAS

TrueNAS bringt eine eigene Docker-Integration mit (Apps/Custom Apps). Die wichtigsten Tipps:

1. **Immer Volumes nutzen** — Container-Daten überleben sonst keinen Neustart
2. **Netzwerke verstehen** — Bridge für Isolation, Host für Performance
3. **Ressourcen setzen** — CPU und RAM Limits verhindern, dass ein Container alles frisst
4. **Logs im Blick behalten** — `docker logs container-name` ist dein bester Freund

## Nützliche Container für den Alltag

| Container | Zweck | Port |
|-----------|-------|------|
| Home Assistant | Smart Home | 8123 |
| Jellyfin | Medienserver | 8096 |
| Portainer | Docker-UI | 9443 |
| Vaultwarden | Passwort-Manager | 8080 |
| Nginx Proxy Manager | Reverse Proxy | 81 |

## Fazit

Docker ist kein Hexenwerk. Der Einstieg ist simpler als man denkt — vor allem mit Tools wie Portainer. Und auf TrueNAS läuft das alles stabil und mit ZFS-Sicherheit im Hintergrund.
