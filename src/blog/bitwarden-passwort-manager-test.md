---
title: "Bitwarden: Passwort-Manager im Test — Sicher, Open Source und kostenlos"
url: "/blog/bitwarden-passwort-manager-test"
date: "2026-07-02"
description: "Bitwarden als beste kostenlose Passwort-Manager-Alternative zu 1Password. Funktionen, Sicherheit, Self-Hosting und Premium-Features im Detail."
tags: ["Bitwarden", "Passwort-Manager", "Sicherheit", "Open Source", "1Password Alternative"]
slug: "bitwarden-passwort-manager-test"
emoji: "�"
affiliate: true
---

## Warum du einen Passwort-Manager brauchst

Lass uns gleich auf den Punkt kommen: **deine Passwörter sind ein Witz.** 

Wenn du noch immer Varianten von "Passwort123" oder deinen Hundenamen plus Geburtsjahr nutzt, bist du extrem verwundbar. Der Durchschnittliche Internet-Nutzer hat über **100 Accounts** — und nutzt oft nur 3-4 Passwörter dafür. Das Problem: Wenn ein Dienst gehackt wird (und das passiert stündlich), haben Hacker Zugang zu ALL deinen Accounts.

Der fix ist simpel: Ein Passwort-Manager generiert und speichert für dich einzigartige, 20-Zeichen-Passwörter. Du musst dir nur EIN Passwort merken.

## Ist Bitwarden kostenlos?

Ja. Bzw. das Basis-Konto ist **komplett kostenlos** und beinhaltet:

- ✅ Unbegrenzte Passwörter speichern
- ✅ Überall nutzen (Desktop, Browser, Smartphone)
- ✅ Autofill in Browser und Apps
- ✅ Passwort-Generator

**Kostenlos für Immer.** Das ist kein Trial, kein Freemium mit Ablaufdatum.

**Premium ($10/Jahr ~ €9,38)** addiert:
- 2FA-Authenticator (TOTP)
- 1 GB verschlüsselter Dateispeicher
- Sicherheitsberichte & Daten-Breach-Monitoring
- Emergency Access (Notfallkontakt)

**Families ($40/Jahr ~ €37,50)**: 6 Konten, Shared Sammlungen, unbegrenzter gemeinsamer Speicher.

Für 95 % der Nutzer reicht das kostenlose Konto.

## Bitwarden vs 1Password vs LastPass

Die kurze Version:

| Feature | Bitwarden | 1Password | LastPass |
|---------|-----------|-----------|----------|
| **Kostenlosversion** | ✅ Vollständig nützlich | ❌ 14 Tage Trial | ❌ Stark limitiert |
| **Open Source** | ✅ Ja, geprüft | ❌ Nein | ❌ Nein |
| **Self-Hosting** | ✅ Ja, kostenlos | ❌ Nein | ❌ Nein |
| **Preis (Personal)** | $0 oder $10/Jahr | $35,88/Jahr | $36/Jahr |
| **Sicherheitsaudits** | ✅ Regelmäßig | ✅ Regelmäßig | ✅ (und dennoch Mindestens 2 große Hacks in der Geschichte) |

**Meine einstehenhafte Empfehlung: Bitwarden.** Kostenlos, Open Source, auditierbar, läuft auf deinem eigenen Server. 1Password ist netter UX, aber der Zwang zum Abo ist nervig — und das Geld wirst du oben dir sparen wollen.

## Einrichtung in 10 Minuten

### Schritt 1: Konto erstellen
Gehe auf [bitwarden.com](https://bitwarden.com) → "Create Account". E-Mail + Master-Passwort. Fertig.

### Schritt 2: Browser-Extension installieren
- Chrome/Firefox/Edge: Suche "Bitwarden" im Store
- Installieren → Mit Konto verbinden
- Ab jetzt werden Passwörter beim Login automatisch vorgeschlagen

### Schritt 3: App installieren
iOS und Android haben offizielle Bitwarden-Apps. Mit demselben Konto synchronisiert.

### Schritt 4: Bestehende Passwörter importieren
Aus Chrome, Firefox, LastPass, 1Password — Bitwarden kann alles importieren. Gehe dazu auf Vault → Import.

### Schritt 5: Master-Passwort-Wahl
Das Master-Passwort ist der einzige Code den du dir merken musst. Mach es richtig:
- Mindestens 12 Zeichen
- Mix aus Groß/Klein, Zahlen, Sonderzeichen
- ODER: 4-5 zufällige Wörter miteinander (z.B. "Kaffee-Uhr-Lampe-Fenster-Buch")

Nutze aber den Bitwarden-eigenen Generator — der gibt dir die sichersten Ergebnisse.

## Self-Hosting: Du volle Kontrolle

Einer der größten Vorteile: Du kannst Bitwarden **auf deinem eigenen Hetzner-Server** laufen lassen. So hast du:
- � **Zero-Knowledge** — du kontrollierst den Server
- � **Kein Abo** — keine Kosten für Premium-Features
- � **Deine Regeln** — Backup, Firewall, Encryption selbst gestalten

**How-To (vereinfacht):**
```bash
# Auf deinem Hetzner CPX21 mit Docker
git clone https://github.com/bitwarden/server.git
cd bitwarden
./bit.sh install
./bit.sh start
```

Das Setup dauert ~15 Minuten und gibt dir alle Features von Bitwarden kostenlos.

**Voraussetzungen:** 2 GB RAM, Docker installiert, Domain mit SSL (Let's Encrypt kostenlos).

## Meine Top 3 Praxis-Tipps für bitwarden

### 1. Sicherheitscheck durchführen
Gehe auf vault.bitwarden.com → Tools → "Data Breach Report" (Premium-Feature) oder nutze [haveibeenpwned.com](https://haveibeenpwned.com) kostenlos. Überall wo "pwned" steht → Passwort SOFORT ändern.

### 2. Zwei-Faktor-Authentifizierung aktivieren
Bei Bitwarden selbst (nicht nur bei den gespeicherten Logins):
- Web Vault → Settings → Security → Two-step Login
- **TOTP mit Authy oder Bitwarden Premium** (der integrierte Authenticator ist Premium-Feature)
- Alternative: SoloKeys oder YubiKey

### 3. Emergency Access einrichten
Falls dir was passiert — wie kommt dein Partner/die Familie an die Passwörter?
- Settings → Emergency Access → E-Mail deines Notfallkontakts eingeben
- Wartezeit bestimmen (z.B. 72 Stunden)
- Nach Ablauf bekommt die Person Zugriff — oder du verlängerst, weil du noch lebst

## Extra: Bitwarden für Entwickler

- **CLI-Tool**: `bw` für Terminal-Freaks — perfekt für automatisierte Deployments
- **API-Zugriff**: Eigenes Tooling integrieren
- **GPG + SSH-Agent**: Bitwarden kann als SSH-Agent arbeiten (sehr elegant)

## Fazit

Du hast keinen Passwort-Manager? **Hol das JETZT nach.** Heute. Nicht morgen.
Du nutzt LastPass? **Wechsel zu Bitwarden.** Die Hack-Geschichte von LastPass ist besorgniserregend.
Du nutzt 1Password? **Der UX ist schön — aber du zahlst unnötiges Abo.** Bitwarden deckt alles ab.

**Zusammengefasst:**
- Bitwarden Free =✅ Für 95 % der Nutzer perfekt
- Bitwarden Premium =✅ Wenn du TOTP willst (sonst nutze Authy)
- Bitwarden Self-Hosted =✅ Wenn du maximalen Kontroll willst
- Bitwarden ist Open Source, regelmäßig auditiert und veständlich

**Tipp für Umsteiger:** Importiere zunächst alles in die kostenlosversion. Wenn du nach 2 Wochen Premium-Features vermisst, hol dir den Jahresplan für $10.

---

*Benutzt du schon Bitwarden oder einen anderen Passwort-Manager? Was dich an deinem aktuellen Tool stört? Teile es auch in den Kommentaren!*
