# Script de la Presentation

## Avant la prez (15 min avant)

### Ouvrir 3 terminaux

**Terminal 1 — ngrok :**
```bash
ngrok http 8080
```
> Note l'URL (ex: `https://xxxx.ngrok-free.app`).
> Si elle a change depuis la derniere fois, mets a jour la Jira Automation rule.

**Terminal 2 — Orion :**
```bash
cd /Users/hichambenhima/projects/client-work/total/ai-agents/orion
pnpm dev
```
> Attends de voir `Orion listening on http://localhost:8080`

**Terminal 3 — App de presentation :**
```bash
cd /Users/hichambenhima/projects/client-work/total/orion-demo-app
pnpm dev
```
> Ouvre http://localhost:5173 dans le navigateur

### Preparer les onglets du navigateur

| # | Onglet | URL |
|---|--------|-----|
| 1 | **Presentation** | http://localhost:5173 (plein ecran F11) |
| 2 | **Jira board** | https://hichambenhima.atlassian.net/jira/software/projects/OR/board |
| 3 | **GitHub PRs** | https://github.com/Hiich/orion-demo-app/pulls |

### Verifier que le ticket Jira est pret

- Le ticket OR-2 (ou un nouveau) doit etre en statut **"A faire"**
- Description du ticket :
```
Le bouton Calculer du simulateur de ROI ne fonctionne pas.
La fonction calculateROI dans src/utils/roi.ts retourne null immediatement sans faire le calcul.
Les tests dans tests/roi.test.ts echouent.
Lancer npm test pour verifier.
```

### Verifier que tout est clean

```bash
# Pas de PR ouverte
gh pr list --repo Hiich/orion-demo-app --state open
# Doit retourner vide

# Le bug est en place
cd /Users/hichambenhima/projects/client-work/total/orion-demo-app
npm test
# Doit montrer : 3 failed | 1 passed
```

---

## Deroulement de la presentation

### Slide 1 — Titre (30 sec)

Ouvre la presentation en plein ecran. Navigation : **fleches droite/gauche** ou **espace**.

> "Bonjour a tous. Aujourd'hui on va parler d'un sujet qui est en train de changer fondamentalement la facon dont les organisations fonctionnent : les agents IA."

### Slide 2 — L'IA Aujourd'hui (2 min)

> "Pour contextualiser. En 2023, les LLMs sont arrives — ChatGPT a democratise l'IA. En 2024-2025, l'IA s'est integree dans nos outils : Copilot, les assistants, le RAG. On est en 2026, et maintenant on entre dans une nouvelle phase : les agents autonomes. L'IA ne se contente plus de repondre — elle agit."

### Slide 3 — Chatbot vs Agent (2 min)

> "La difference fondamentale : un chatbot, vous lui posez une question, il repond. C'est passif. Un agent, vous lui donnez un objectif, et il se debrouille : il planifie, il utilise des outils, il execute, il verifie son travail. Un chatbot c'est un conseiller. Un agent c'est un collaborateur."

### Slide 4 — Comment Fonctionne un Agent (2 min)

> "Un agent fonctionne en boucle : il percoit son environnement, il reflechit, il agit, il verifie. Et il a des outils concrets : lire des fichiers, appeler des APIs, ecrire du code, interagir avec Jira, GitHub. Mais — et c'est important — il est contraint. Budget limite, permissions definies, perimetre controle. Et surtout : review humaine obligatoire. L'agent propose, l'humain dispose."

### Slide 5 — Les Cas Qui Changent la Donne (2 min)

> "Concretement, ou est-ce que ca s'applique ? En developpement : correction de bugs automatique, code review, tests. En management : des rapports generes automatiquement a partir de vos donnees de sprint. En support : triage et resolution de tickets. En operations : monitoring et remediation proactive. Dans tous les cas, l'agent prend en charge le repetitif pour que les equipes se concentrent sur le complexe."

### Slide 6 — L'Agent dans Votre Quotidien (1 min)

> "Et l'avantage, c'est que ca s'integre dans ce que vous utilisez deja. Jira, GitHub, Slack. Pas un outil de plus a adopter. L'agent vit dans votre workflow existant. L'humain reste dans la boucle a chaque etape."

### Slide 7 — La Demo (C'est la !) (10-15 min)

> "D'ailleurs, on a prepare un petit simulateur pour mesurer l'impact concret pour vos equipes. Essayons ensemble."

**Remplir les champs :**
- Taches automatisables / mois : **30**
- Temps moyen par tache : **1.5**
- Cout horaire : **70**

**Cliquer "Calculer l'impact"** → Rien ne se passe.

> "Ah... visiblement il y a un souci. Le bouton ne repond pas. C'est un bug."
>
> (pause)
>
> "En fait, c'est parfait. C'est exactement le cas d'usage dont on parlait il y a 2 minutes. On a un bug dans une application. On va utiliser un agent IA pour le corriger — en direct."

**Ouvrir Jira (onglet 2) :**

> "Je vais sur Jira. J'ai un ticket qui decrit ce bug."

**Passer le ticket en "Dev"** (glisser ou changer le statut).

> "Je passe le ticket en Dev. Ca declenche automatiquement l'agent."

**Montrer le Terminal 2 (Orion) :**

> "Regardez le terminal. L'agent est en train de travailler. Il clone le repository, il lit le code source, il identifie le probleme, il corrige, il lance les tests pour verifier que ca marche, il commit et il push."

Attendre ~2-3 min. Commenter les logs au fur et a mesure :
- "La il lit le fichier..."
- "Il a trouve le bug..."
- "Il edite le code..."
- "Il lance les tests..."
- "Les tests passent, il push..."

**Quand c'est fini, dans Terminal 3 :**

```bash
git fetch && git merge origin/fix/OR-2
```

> "Le fix est pret. Je recupere les modifications."

**Revenir sur la presentation (onglet 1). Cliquer "Calculer l'impact" :**

Les resultats s'affichent :
- **3 135 euros** d'economies par mois
- **45h** liberees par mois
- **100%** de ROI
- **15 euros** de cout agent par mois

> "Et voila. Le bug est corrige. En 2 minutes. Et ces chiffres sont reels : 30 taches a 1h30 chacune, a 70 euros de l'heure, ca fait plus de 3000 euros d'economies mensuelles. Pour 15 euros de cout agent."

**Montrer GitHub (onglet 3) :**

> "Sur GitHub, une pull request draft a ete creee automatiquement. L'equipe peut la review avant de merger. L'agent propose, l'humain valide."

**Montrer Jira (onglet 2) :**

> "Et sur Jira, le ticket a ete automatiquement passe en 'Revue en cours', avec un commentaire qui lie la PR. La boucle est bouclee."

### Slide 8 — Ce Que Ca Change (2 min)

> "Ce qu'on vient de voir, c'est un exemple. Mais le principe s'applique partout. L'IA agents n'est pas une menace — c'est un levier. Les taches repetitives sont deleguees, pas les decisions. L'humain garde le controle. Et on peut commencer progressivement : un cas d'usage, on mesure, on elargit."
>
> "La question n'est plus si, mais quand."

---

## Reset entre deux demos

```bash
# 1. Reset le code (remettre le bug)
cd /Users/hichambenhima/projects/client-work/total/orion-demo-app
git checkout main && git reset --hard origin/main

# 2. Fermer la PR
gh pr close $(gh pr list --repo Hiich/orion-demo-app --state open --json number -q '.[0].number') --repo Hiich/orion-demo-app --delete-branch

# 3. Nettoyer le cache Orion
rm -rf /Users/hichambenhima/projects/client-work/total/ai-agents/orion/data/repos /tmp/worktrees
rm -f /Users/hichambenhima/projects/client-work/total/ai-agents/orion/data/orion.db*

# 4. Redemarrer Orion (Ctrl+C dans terminal 2 puis)
pnpm dev

# 5. Remettre le ticket Jira en "A faire"
```

## En cas de probleme

**L'automation Jira ne trigger pas :**
Utilise le trigger manuel en fallback :
```bash
curl -X POST http://localhost:8080/triggers/bug-fix \
  -H "Content-Type: application/json" \
  -d '{
    "ticketKey": "OR-2",
    "summary": "Bug: le simulateur de ROI ne calcule pas",
    "description": "Le bouton Calculer du simulateur de ROI ne fonctionne pas. La fonction calculateROI dans src/utils/roi.ts retourne null immediatement sans faire le calcul. Les tests dans tests/roi.test.ts echouent. Lancer npm test pour verifier."
  }'
```

**L'agent echoue (branche existante) :**
```bash
gh pr close $(gh pr list --repo Hiich/orion-demo-app --state open --json number -q '.[0].number') --repo Hiich/orion-demo-app --delete-branch
rm -rf /Users/hichambenhima/projects/client-work/total/ai-agents/orion/data/repos
```
Puis relance.

**ngrok URL a change :**
Mets a jour la Jira Automation rule avec la nouvelle URL :
Project Settings → Automation → Edit rule → Update URL.
