---
title: "Automatisation SOC & SOAR : concevoir des workflows utiles et contrôlés"
description: "Une approche professionnelle pour automatiser le triage, l’enrichissement et la réponse aux incidents sans perdre le contrôle humain."
publishDate: 2026-07-19
language: "fr"
tags: ["SOC", "SOAR", "Wazuh", "Shuffle", "TheHive", "Incident Response"]
cover: "/shuffle.png"
draft: false
---

L’automatisation SOC ne consiste pas à remplacer l’analyste. Elle consiste à réduire les tâches répétitives, enrichir les alertes plus vite et aider l’équipe à prendre de meilleures décisions.

Dans un contexte professionnel, un workflow SOAR doit rester **traçable**, **contrôlé** et **réversible**.

## Objectifs d’un workflow SOAR

- qualifier une alerte rapidement ;
- enrichir les indicateurs avec plusieurs sources ;
- réduire les faux positifs ;
- prioriser les incidents ;
- documenter automatiquement les étapes ;
- déclencher une action sensible seulement après validation humaine.

## Principe human-in-the-loop

Le principe **human-in-the-loop** est essentiel. Les actions qui peuvent impacter un système, un utilisateur ou un service doivent être validées par un analyste.

Exemple de logique non sensible :

```txt
Alerte reçue
  ↓
Normalisation
  ↓
Enrichissement interne et externe
  ↓
Score de risque
  ↓
Décision :
  - faible : journalisation
  - moyen : création d’un ticket
  - élevé : validation analyste
```

## Bonnes pratiques

1. Commencer par automatiser l’enrichissement avant la réponse.
2. Garder une trace claire de chaque décision.
3. Mesurer le gain réel : temps de triage, qualité de détection, MTTR.
4. Prévoir des exceptions et des validations.
5. Documenter les playbooks.

## Conclusion

Un bon SOC automatisé reste un SOC maîtrisé. La valeur n’est pas dans l’automatisation maximale, mais dans l’automatisation fiable, observable et alignée avec les risques opérationnels.
