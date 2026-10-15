---
title: "Keyboard sound trigger"
description: "A full-screen Pygame soundboard that maps keyboard keys to audio cues and highlights the active cue."
category: "Tools & automation"
role: "Personal utility"
tags: ["Python", "Pygame", "Audio"]
order: 23
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/soundtriggerer"}]
---

## A keyboard as a cue surface

This small Python program turns a keyboard into an audio-trigger interface. Keys select sounds such as a telephone ring, a doorbell, announcements, and music cues. A full-screen keyboard image carries labels and an overlay showing the active key.

## Interaction and implementation

Pygame handles the window, keyboard events, and audio. The interface scales the reference keyboard image to the display width and calculates highlight positions from a key-coordinate map. Pressing a mapped key loads its file into the music playback channel. Space toggles pause and resume, while Escape exits.

The use of one music channel means a new cue replaces the current one; this is not a multitrack mixer. The visual highlight follows playback state and clears once a cue finishes. That makes the tool useful as a direct cue player with visible feedback, without introducing a timeline or a more elaborate production interface.

The [repository](https://github.com/Bruol/soundtriggerer) contains the script, keyboard image, and example audio assets.
