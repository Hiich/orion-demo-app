import { useState, useEffect } from "react";
import ROICalculator from "./components/ROICalculator";
import "./App.css";

const TOTAL_SLIDES = 8;

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, TOTAL_SLIDES - 1));
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="presentation">

      {/* ---- Slide 1 : Titre ---- */}
      <div className={`slide title-slide ${current === 0 ? "active" : ""}`}>
        <span className="label-tag">Intelligence Artificielle</span>
        <h1>Agents IA : la nouvelle ère de l'automatisation intelligente</h1>
        <p className="subtitle">Comment l'IA autonome transforme les organisations</p>
      </div>

      {/* ---- Slide 2 : L'IA Aujourd'hui ---- */}
      <div className={`slide ${current === 1 ? "active" : ""}`}>
        <h2>L'IA <span className="accent">aujourd'hui</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2023</span>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p>Les LLMs arrivent. Tout le monde découvre ChatGPT.</p>
              <p><strong>L'IA comprend et génère du langage.</strong></p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2024 — 25</span>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p>L'IA s'intègre dans les outils : Copilot, assistants, RAG.</p>
              <p><strong>L'IA assiste les humains dans leur travail.</strong></p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p>Les <strong>agents autonomes</strong> émergent. L'IA ne répond plus — elle agit.</p>
              <p><strong>On passe de l'IA qui assiste à l'IA qui exécute.</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Slide 3 : Chatbot vs Agent ---- */}
      <div className={`slide ${current === 2 ? "active" : ""}`}>
        <h2>Chatbot <span className="accent">vs</span> Agent</h2>
        <div className="comparison">
          <div className="comparison-col">
            <h3>Chatbot</h3>
            <span className="col-tag passive">Passif</span>
            <p>Vous posez une question. Il répond. Il ne fait rien d'autre. Il attend la prochaine question.</p>
            <div className="analogy">&laquo; Un conseiller. &raquo;</div>
          </div>
          <div className="comparison-col highlight">
            <h3>Agent IA</h3>
            <span className="col-tag active">Autonome</span>
            <p>Vous lui donnez un objectif. Il planifie, utilise des outils, exécute, vérifie, et livre un résultat.</p>
            <div className="analogy">&laquo; Un collaborateur. &raquo;</div>
          </div>
        </div>
      </div>

      {/* ---- Slide 4 : Comment fonctionne un agent ---- */}
      <div className={`slide ${current === 3 ? "active" : ""}`}>
        <h2>Comment fonctionne <span className="accent">un agent</span></h2>
        <div className="loop-container">
          <div className="loop-step">
            <div className="step-number">Étape 1</div>
            <div className="step-label">Percevoir</div>
          </div>
          <div className="loop-arrow">›</div>
          <div className="loop-step">
            <div className="step-number">Étape 2</div>
            <div className="step-label">Réfléchir</div>
          </div>
          <div className="loop-arrow">›</div>
          <div className="loop-step">
            <div className="step-number">Étape 3</div>
            <div className="step-label">Agir</div>
          </div>
          <div className="loop-arrow">›</div>
          <div className="loop-step">
            <div className="step-number">Étape 4</div>
            <div className="step-label">Vérifier</div>
          </div>
        </div>
        <p className="slide-description">
          L'agent dispose d'<strong>outils concrets</strong> : lire des fichiers, appeler des APIs, écrire du code, interagir avec Jira et GitHub. Mais il est <strong>toujours contraint</strong>.
        </p>
        <div className="constraints">
          <span className="constraint-chip">Budget limité</span>
          <span className="constraint-chip">Permissions définies</span>
          <span className="constraint-chip">Périmètre contrôlé</span>
          <span className="constraint-chip">Review humaine obligatoire</span>
        </div>
      </div>

      {/* ---- Slide 5 : Cas d'usage ---- */}
      <div className={`slide ${current === 4 ? "active" : ""}`}>
        <h2>Les cas qui changent <span className="accent">la donne</span></h2>
        <div className="usecases-grid">
          <div className="usecase-card">
            <div className="card-category">Développement</div>
            <h3>Correction automatique</h3>
            <p>Correction de bugs, code review, génération de tests. Le développeur se concentre sur l'architecture et le produit.</p>
          </div>
          <div className="usecase-card">
            <div className="card-category">Management</div>
            <h3>Reporting intelligent</h3>
            <p>Rapports de sprint auto-générés, dashboards temps réel. Plus de reporting manuel le lundi matin.</p>
          </div>
          <div className="usecase-card">
            <div className="card-category">Support</div>
            <h3>Résolution proactive</h3>
            <p>Triage et résolution automatique de tickets. Les équipes traitent les cas complexes, l'agent gère le reste.</p>
          </div>
          <div className="usecase-card">
            <div className="card-category">Opérations</div>
            <h3>Remédiation autonome</h3>
            <p>Monitoring, alerting, correction. L'agent détecte et corrige avant que l'équipe ne soit alertée.</p>
          </div>
        </div>
      </div>

      {/* ---- Slide 6 : Intégration workflow ---- */}
      <div className={`slide ${current === 5 ? "active" : ""}`}>
        <h2>L'agent dans <span className="accent">votre quotidien</span></h2>
        <div className="workflow-chain">
          <div className="workflow-node">
            <div className="node-label">Trigger</div>
            <div className="node-name">Jira</div>
          </div>
          <div className="workflow-arrow">›</div>
          <div className="workflow-node">
            <div className="node-label">Exécution</div>
            <div className="node-name">Agent</div>
          </div>
          <div className="workflow-arrow">›</div>
          <div className="workflow-node">
            <div className="node-label">Livraison</div>
            <div className="node-name">GitHub</div>
          </div>
          <div className="workflow-arrow">›</div>
          <div className="workflow-node">
            <div className="node-label">Validation</div>
            <div className="node-name">Humain</div>
          </div>
        </div>
        <div className="workflow-bottom">
          <p>Pas un outil de plus. Il vit dans vos outils existants.</p>
          <p><strong>L'humain reste dans la boucle : il valide, il décide.</strong></p>
        </div>
      </div>

      {/* ---- Slide 7 : Démo Live ---- */}
      <div className={`slide ${current === 6 ? "active" : ""}`}>
        <h2>Mesurez <span className="accent">l'impact</span> pour votre équipe</h2>
        <div className="calculator-wrapper">
          <ROICalculator />
        </div>
      </div>

      {/* ---- Slide 8 : Ce que ça change ---- */}
      <div className={`slide ${current === 7 ? "active" : ""}`}>
        <h2>Ce que ça <span className="accent">change</span></h2>
        <div className="closing-list">
          <div className="closing-item">
            <strong>L'IA agents n'est pas une menace</strong> — c'est un levier. Les équipes se concentrent sur ce qui compte : l'architecture, le produit, l'innovation.
          </div>
          <div className="closing-item">
            Les tâches répétitives sont déléguées, <strong>pas les décisions</strong>. L'humain garde le contrôle à chaque étape.
          </div>
          <div className="closing-item">
            L'intégration est <strong>progressive</strong> — on commence par un cas d'usage, on mesure l'impact, on élargit.
          </div>
        </div>
        <p className="closing-quote">&laquo; La question n'est plus si, mais quand. &raquo;</p>
      </div>

      {/* Navigation */}
      <div className="nav-dots">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <div className="slide-counter">{current + 1} / {TOTAL_SLIDES}</div>
    </div>
  );
}
