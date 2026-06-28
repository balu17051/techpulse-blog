---
title: "Edge TTS: Kostenloser Text-to-Speech der überraschend gut ist"
date: "2026-06-21"
description: "Wie man mit Microsoft Edge TTS kostenlos hochwertige Sprachausgabe erzeugt — ohne API-Key, ohne Anmeldung."
tags: ["KI", "TTS", "Automatisierung", "Tutorial"]
slug: "edge-tts-kostenlos"
emoji: "🔊"
---

## Das Problem

Gute Text-to-Speech-Engines kosten Geld. OpenAI TTS: $0.015/1K Zeichen. Amazon Polly: Kreditkarte nötig. Google Cloud TTS: Komplexe Einrichtung. Was ist mit denen, die einfach nur eine Sprachnachricht erzeugen wollen?

## Die Lösung: Edge TTS

Microsoft bietet über Edge Browser eine TTS-Engine an, die man auch ohne Browser nutzen kann. Und sie ist **komplett kostenlos**.

### Warum Edge TTS genial ist

- ✅ **Kein API-Key** — Einfach nutzen
- ✅ **Keine Anmeldung** — Kein Account nötig
- ✅ **Deutsche Neural-Stimmen** — Sehr natürlich
- ✅ **Kein Rate-Limit** — Zumindest keines, das normale Nutzer trifft
- ✅ **Schnell** — Generierung in Sekunden

### Die deutschen Stimmen

| Stimme | Geschlecht | Qualität |
|--------|------------|----------|
| de-DE-ConradNeural | Männlich | ⭐⭐⭐⭐⭐ |
| de-DE-KatjaNeural | Weiblich | ⭐⭐⭐⭐⭐ |
| de-DE-ElviraNeural | Weiblich | ⭐⭐⭐⭐ |

### Python-Nutzung

```python
import edge_tts
import asyncio

async def generate_speech(text, output_path):
    communicate = edge_tts.Communicate(text, "de-DE-ConradNeural")
    await communicate.save(output_path)

asyncio.run(generate_speech("Hallo Welt!", "output.mp3"))
```

## Vergleich mit der Konkurrenz

| Anbieter | Kosten | Deutsch | Qualität |
|----------|--------|---------|----------|
| Edge TTS | Kostenlos | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| ElevenLabs | 10K Zeich./Monat | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| OpenAI TTS | $0.015/1K Zeich. | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Amazon Polly | Kreditkarte | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## Mein Use Case

Ich nutze Edge TTS, um Telegram-Sprachnachrichten zu generieren. Mein Hermes Agent liest eine Zusammenfassung, generiert die Audio-Datei und schickt sie als Sprachnachricht. Alles automatisch, alles kostenlos.

## Fazit

Edge TTS ist der beste kostenlose TTS-Dienst, den es gibt. Punkt. Wer für einfache Sprachausgabe Geld ausgibt, hat Edge TTS nicht probiert.
