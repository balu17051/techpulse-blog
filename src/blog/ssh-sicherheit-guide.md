---
title: "SSH-Sicherheit: So schützt du deinen Server"
date: "2026-07-05"
description: "SSH absichern: Keys statt Passwörter, Fail2Ban, Port-Änderung, 2FA, Firewall – Best Practices für deinen Linux-Server."
tags: ["SSH", "Sicherheit", "Server", "Linux", "Firewall"]
slug: "ssh-sicherheit-guide"
emoji: "🔑"
---

SSH ist der Standardzugang zu jedem Linux-Server. Leider ist er auch das häufigste Ziel von Angriffen. In diesem Guide zeige ich dir wie du deinen Server absicherst.

## SSH-Keys statt Passwörter

Passwörter können durch Brute-Force erraten werden. SSH-Keys sind kryptographisch sicher. Erstelle mit \`ssh-keygen -t ed25519\` einen Schlüsselpaar. Kopiere den öffentlichen Schlüssel mit \`ssh-copy-id\` auf deinen Server. Deaktiviere dann die Passwort-Authentifizierung in \`/etc/ssh/sshd_config\`.

## SSH-Port ändern

Der Standardport 22 wird von Bots ständig gescannt. Ändere den Port auf eine hohe Nummer (z.B. 2222). Das eliminiert 99% der automatisierten Angriffe.

## Fail2Ban installieren

Fail2Ban blockt IP-Adressen nach zu vielen fehlgeschlagenen Login-Versuchen. Installiere mit \`apt install fail2ban\` und konfiguriere die Jail-Einstellungen.

## Firewall konfigurieren

Nutze UFW (Uncomplicated Firewall) um nur die nötigen Ports zu öffnen: \`ufw allow 2222/tcp\` für SSH, \`ufw allow 80/tcp\` und \`ufw allow 443/tcp\` für Webserver.

## Zwei-Faktor-Authentifizierung

Für maximale Sicherheit: Google Authenticator mit SSH kombinieren. So brauchst du neben dem SSH-Key auch einen zeitbasierten Code.

## Fazit

SSH-Sicherheit ist kein einmaliges Setup sondern ein kontinuierlicher Prozess. Die Grundlagen – Keys, Fail2Ban, Firewall – kosten nichts und schützen deinen Server effektiv.
