---
title: "Hetzner VPS: Der beste Server fürs Homelab – 2026 im Test"
date: "2026-07-01"
description: "Hetzner Server im Praxisverleich: Performance, Preise, EU-Datenschutz und warum Hetzner für Homelabber die beste Wahl ist. Inklusive €20 Startguthaben."
tags: ["Hetzner", "VPS", "Homelab", "Server", "Self-Hosting", "Cloud"]
slug: "hetzner-vps-homelab-test"
emoji: "�️"
affiliate: true
affiliate_name: "Hetzner"
affiliate_link: "https://www.hetzner.com?ref=TECHPULSE"
---

Du brauchst einen Server, der läuft wie ein Porsche — kostet aber wie einen Gebrauchten. Genau da setzt **Hetzner** an. Als einer der günstigsten und zuverlässigsten Hosting-Anbieter Europas ist Hetzner für Homelabber, Self-Hosting-Fans und Indie-Entwickler die heilige Graal-Alternative zu AWS, Azure und Google Cloud.

In diesem Guide zeige ich dir alles: Von der Anmeldung bis zum produktiven Server — und warum ich (und Hunderttausende andere) Hetzner gegenüber den US-Giganten bevorzuge.

## Was ist Hetzner?

**Hetzner Online GmbH** ist ein deutsches Unternehmen mit Rechenzentren in Nürnberg, Falkenstein (Sachsen), Helsinki und bald auch in Singapur. Gegründet 1997, familiengeführt, und bekannt für ein einfaches Prinzip: **Maximale Leistung zum fairen Preis.**

Was Hetzner besonders macht:
- **EU-DSGVO-konform** — deine Daten bleiben in Europa
- **Kein Vendor Lock-in** — Exportiere deine Daten jederzeit
- **Transparente Preise** — keine versteckten Kosten für Traffic oder IOPS
- **Dedicated Server ab ~€35/Monat** — gegenüber AWS oft 50-70% günstiger
- **€20 Startguthaben** — für Neukunden mit Empfehlungslink (limitiert)

## Hetzner Cloud vs. Dedicated Server

### Hetzner Cloud (CX/CPX/CCX)

Die instanzbasierende Cloud — vergleichbar mit AWS EC2, aber günstiger.

| Instanz | vCPU | RAM | SSD | Preis/Monat |
|---------|------|-----|-----|-------------|
| CX11 | 1 | 2 GB | 20 GB | €3,79 |
| CPX11 | 2 | 2 GB | 40 GB | €5,39 |
| CPX21 | 4 | 8 GB | 80 GB | €10,59 |
| CCX13 | 4 | 16 GB | 160 GB | €24,00 |

**Mein Tipp:** Starte mit CPX21 (4 vCPU, 8 GB RAM). Damit läuft ein gesamtes Homelab mit Docker, mehrere Container, Reverse Proxy und Monitoring mühelos. Für €10,59/Monat bekommst du hier das, was bei AWS locker €40-50 kosten würde.

### Dedicated Server (Auktion)

Hetzner hat regelmäßig **Server-Auktionen** — ausgemustertes RZ-Hardware zum Selbstkostenpreis. Du bekommst dedizierte Hardware (keine vCPUs!) oft schon ab **€29-35/Monat**.

Typische Auktion-Geister: Intel Xeon E3 oder AMD RYZE mit 32-64 GB RAM, 2x SSD oder HDD, 1 Gbit/s Uplink.

**Meine persönliche Empfehlung:** Für Docker-Enthusiasten reicht die CPX21. Wer mehr Power braucht, schaut auf die Serverbörse.

## Praktische Beispiel-Setups mit Hetzner

### 1. Dein eigener VPN-Server (NordVPN-Alternative)

```bash
# Auf einer frischen CPX21 mit Ubuntu 24.04
apt update && apt install -y wireguard

# WireGuard einrichten
wg genkey | tee /etc/wireguard/server.key | wg pubkey > /etc/wireguard/server.pub
cat /etc/wireguard/server.key
```

Warum das sich lohnt: NordVPN kostet €3-12/Monat für EINEN Account. Dein eigener WireGuard-Server auf Hetzner kostet €5,39/Monat für UNBEGRÄNZTE Clients — und du hast volle Kontrolle über Logs, Traffic und Datenschutz.

**Das kostet dich: €0 zusätzlich** — WireGuard ist Open Source.

### 2. Self-Hosted Cloud mit Nextcloud

```yaml
# docker-compose.yml
services:
  nextcloud:
    image: nextcloud:latest
    ports:
      - "8080:80"
    volumes:
      - nextcloud-data:/var/www/html
    environment:
      - MYSQL_HOST=db
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=sicheres-passwort

  db:
    image: mariadb:10.11
    environment:
      - MYSQL_ROOT_PASSWORD=root-passwort
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=sicheres-passwort

volumes:
  nextcloud-data:
```

**Vorteil vs. kommerzielle Alternativen:**
- Google Drive Pro 2 TB: €9,99/Monat
- Dropbox Plus: €11,99/Monat
- **Deine Hetzner CPX21 mit Nextcloud (80 GB SSD): €10,59/Monat**
- Für aktive Storage-Nutzung: Externe Hetzner Volumes (10 GB für €0,44/Monat)

### 3. Home Assistant Remote Access (sicher über SSH-Tunnel)

```bash
# SSH-Tunnel vom lokalen Netz zum Hetzner-Server
ssh -R 8123:localhost:8123 root@DEINE-IP

# Oder als systemd Service für dauerhaften Zugriff
/etc/systemd/system/remote-tunnel.service
```

So kannst du von überall auf dein Smart Home zugreifen, ohne Ports in deinem Router zu öffnen — und ohne dass deine Daten über einen Drittanbieter-Cloud gehen.

## Hetzner vs. die Konkurrenz

| Anbieter | 2 vCPU, 2 GB RAM | EU-DSGVO | Dedicated ab | Affiliate |
|----------|-----------------|----------|-------------|-----------|
| **Hetzner** | €5,39/M. | ✅ Ja | €29/M. | ✅ €20 Bonus |
| DigitalOcean | $12/M. (~€11) | ❌ US | $48/M. | ✅ |
| AWS Lightsail | $10/M. (~€9,20) | ❌ US | ❌ Unerschwinglich | ❌ Kein |
| Netcup | €5,00/M. | ✅ EU | €35/M. | ✅ |
| Contabo | €5,50/M. | ✅ EU | €50-70/M. | ✅ |

Hetzner schneidet am besten ab in **Leistungs-Preis-Verhältnis** und **deutscher Infrastruktur**. Netcup ist ähnlich günstig, aber mit Quality-of-Service nicht ganz auf Hetzner-Niveau. Contabo hat gute Preise, aber das Netzwerk kann bei Traffic-Spitzen einschränken.

## So erstellst du deinen ersten Hetzner-Server

1. **Konto erstellen** unter [hetzner.com](https://www.hetzner.com?ref=TECHPULSE) — hier gibt es momentan **€20 Startguthaben** (limitierte Aktion)
2. **Cloud Console** aufrunter — "Add Server"
3. **Standort wählen**: Nürnberg oder Falkenstein (gute Auslastungsquoten)
4. **Image**: Ubuntu 24.04 (empfohlen), Debian 12 oder falls du Docker direkt: vorkonfiguriertes Docker CE-Image
5. **Typ**: CPX21 (4 vCPU, 8 GB RAM, 80 GB SSD — €10,59/Monat)
6. **SSH-Key hochladen**: `cat ~/.ssh/id_rsa.pub` einfügen
7. **Server erstellen** — nach 1-2 Minuten läuft er

### Erste Schritte auf dem Server

```bash
# Als Root einloggen
ssh root@DEINE-IP

# System aktualisieren
apt update && apt upgrade -y

# Firewall aktivieren (UFW)
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# Fail2Ban für Brute-Force-Schutz
apt install -y fail2ban

# Docker installieren
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker

# Docker Compose testen
docker compose version
```

Dein Server ist jetzt bereit zum Arbeiten.

## Datenschutz & Sicherheit

**Der größte Vorteil von Hetzner gegenüber US-Anbietern: Du bleibst unter EU-DSGVO.**

Was das bedeutet:
- **Kein CLOUD Act-Risiko** — US-Behörden können nicht direkt auf deine Daten zugreifen
- **DSGVO-konform** — Hetzner hat eine Auftragsverarbeitung (AVV) als Standard
- **Deutsches Recht** — bei Streitigkeiten gilt deutsches Gerichtsstand
- **Transparenz** — Hetzner veröffentlicht regelmäßig Transparenzberichte

**Meine Sicherheitsempfehlungen:**
1. **SSH-Keys statt Passwort** — unverhandelt
2. **Fail2Ban** — Brute-Force-Protection out of the box
3. **UFW Firewall** — nur offene Ports was du wirklich brauchst
4. **Automatische Updates** — `apt install -y unattended-upgrades`
5. **Snapshots** — Hetzner bietet automatische Backups für €0,01/GB/Monat
6. **Zwei-Faktor-Authentifizierung** — unbedingt in der Cloud Console aktivieren

## Monitoring und Kostenkontrolle

Was Hetzner super gemacht hat: **Transparente Kosten.**

- **Traffic inklusive:** 20 TB pro Monat bei Cloud-Servern (nach 10 Cent pro GB — aber 20 TB ist viel)
- **Keine Umkosten für Bandbreite** — im Gegensatz zu AWS
- **Snapshots & Backups:** 20 % der Serverkosten (optional)
- **Load Balancer:** ab €5,39/Monat (optional)

**Kosten-Tracking-Tipp:** Setze dir einen Alert in der Hetzner Console. Falls deine Server mal richtig Last bekommen, will du wissen, was es kosten würde.

## Wann Hetzner NICHT ideal ist

Ehrlich sein ist wichtig. Hetzner ist nicht für jeden perfekt:

1. **US- oder Asien-Fokus** — wenn dein Publikum überwiegend dort ist, brauchst du US- oder Asien-Rechenzentren (Hetzner hat nur Helsinki in Europa). Alternativen mit Singapur/Virginia: DigitalOcean, Vultr.
2. **Enterprise-Features** — wenn du Managed Databases, Kubernetes-as-a-Service oder Serverless brauchst, ist AWS/GCP besser.
3. **Unternehmens-SSO** — Hetzner ist eher auf Privatpersonen und KMUs ausgerichtet.
4. **Compliance-Zertifizierungen** — Hetzner hat ISO 27001, aber wenn du SOC 2 oder HIPAA brauchst, schau dir AWS/GCP an.

Für 95 % der Homelab- und Self-Hosting-Szenarien ist Hetzner die richtige Adresse.

## Fazit: Lohnt sich Hetzner 2026?

**Absolut.** Die Kombination aus:
- �🇪 **Deutscher Recht** und DSGVO-Konformität
- 💰 **Beeindruckend günstigen Preisen** oft 50-70% unter US-Konkurrenz
- � **€20 Startguthaben** für Neukunden (wer zuerst kommt, mahlt zuerst)
- ⚡ **Hervorragender Performance** inklusive 20 TB Traffic
- 🔒 **Standard-EU-Datenschutz** — kein CLOUD Act Deal

...macht Hetzner zur Nummer 1 im Homelab-Bereich. Egal ob du einen VPN-Server, deine eigene Cloud, einen VPN-Gateway oder ein komplettes Container-Setup brauchst — für €5-25/Monat bekommst du hier alles was du brauchst.

**Jetzt loslegen** → [Hetzner Account erstellen und €20 Guthaben sichern](https://www.hetzner.com?ref=TECHPULSE) (limitierte Aktion — solange der Vorrat reicht).

---

*Hast du einen Hetzner-Server laufen? Welche Traffic-Zahlen oder Setups hast du? Teilt es in den Kommentaren!*
