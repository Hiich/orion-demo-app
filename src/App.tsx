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
      {/* Slide 1 — Titre */}
      <div className={`slide ${current === 0 ? "active" : ""}`}>
        <h1>
          Agents IA : La Nouvelle Ere
          <br />
          de l'Automatisation Intelligente
        </h1>
        <p className="subtitle">
          Comment l'IA autonome transforme les organisations
        </p>
      </div>

      {/* Slide 2 — L'IA Aujourd'hui */}
      <div className={`slide ${current === 1 ? "active" : ""}`}>
        <h2>L'IA Aujourd'hui</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2023</span>
            <span className="timeline-text">
              Les LLMs arrivent. Tout le monde decouvre ChatGPT.
              <br />
              <strong>L'IA comprend et genere du langage.</strong>
            </span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2024-2025</span>
            <span className="timeline-text">
              L'IA s'integre dans les outils : Copilot, assistants, RAG.
              <br />
              <strong>L'IA assiste les humains dans leur travail.</strong>
            </span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <span className="timeline-text">
              Les <strong>agents autonomes</strong> emergent. L'IA ne repond
              plus — elle agit.
              <br />
              <strong>
                On passe de l'IA qui assiste a l'IA qui execute.
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Slide 3 — Chatbot vs Agent */}
      <div className={`slide ${current === 2 ? "active" : ""}`}>
        <h2>Chatbot vs Agent</h2>
        <div className="comparison">
          <div className="comparison-col">
            <h3>Chatbot</h3>
            <span className="tag passive">Passif</span>
            <p>
              Vous posez une question. Il repond. Il ne fait rien d'autre.
              Il attend la prochaine question.
            </p>
            <div className="analogy">Un conseiller.</div>
          </div>
          <div className="comparison-col agent">
            <h3>Agent IA</h3>
            <span className="tag active">Autonome</span>
            <p>
              Vous lui donnez un objectif. Il planifie, utilise des outils,
              execute, verifie, et livre un resultat.
            </p>
            <div className="analogy">Un collaborateur.</div>
          </div>
        </div>
      </div>

      {/* Slide 4 — Comment fonctionne un agent */}
      <div className={`slide ${current === 3 ? "active" : ""}`}>
        <h2>Comment Fonctionne un Agent</h2>
        <div className="agent-loop">
          <div className="loop-step">
            <div className="icon">👁</div>
            <div className="label">Percevoir</div>
          </div>
          <div className="loop-arrow">→</div>
          <div className="loop-step">
            <div className="icon">🧠</div>
            <div className="label">Reflechir</div>
          </div>
          <div className="loop-arrow">→</div>
          <div className="loop-step">
            <div className="icon">⚡</div>
            <div className="label">Agir</div>
          </div>
          <div className="loop-arrow">→</div>
          <div className="loop-step">
            <div className="icon">✓</div>
            <div className="label">Verifier</div>
          </div>
        </div>
        <p>
          L'agent a des <strong>outils</strong> : lire des fichiers, appeler
          des APIs, ecrire du code, interagir avec Jira et GitHub.
        </p>
        <div className="agent-constraints">
          <div className="constraint">Budget limite</div>
          <div className="constraint">Permissions definies</div>
          <div className="constraint">Perimetre controle</div>
          <div className="constraint">Review humaine obligatoire</div>
        </div>
      </div>

      {/* Slide 5 — Cas d'usage */}
      <div className={`slide ${current === 4 ? "active" : ""}`}>
        <h2>Les Cas Qui Changent la Donne</h2>
        <div className="usecases">
          <div className="usecase">
            <h3>💻 Developpement</h3>
            <p>
              Correction de bugs automatique, code review, generation de
              tests. Le dev se concentre sur l'architecture.
            </p>
          </div>
          <div className="usecase">
            <h3>📊 Management</h3>
            <p>
              Rapports de sprint auto-generes, dashboards temps reel.
              Plus de reporting manuel le lundi matin.
            </p>
          </div>
          <div className="usecase">
            <h3>🎧 Support</h3>
            <p>
              Triage et resolution automatique de tickets.
              Les equipes traitent les cas complexes, l'agent gere le reste.
            </p>
          </div>
          <div className="usecase">
            <h3>⚙ Operations</h3>
            <p>
              Monitoring, alerting, remediation. L'agent detecte et corrige
              avant que l'equipe ne soit alertee.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 6 — Intégration workflow */}
      <div className={`slide ${current === 5 ? "active" : ""}`}>
        <h2>L'Agent dans Votre Quotidien</h2>
        <div className="workflow">
          <div className="workflow-node">
            <div className="icon">📋</div>
            <div className="label">Jira</div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-node">
            <div className="icon">🤖</div>
            <div className="label">Agent</div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-node">
            <div className="icon">🔀</div>
            <div className="label">GitHub</div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-node">
            <div className="icon">👤</div>
            <div className="label">Review</div>
          </div>
        </div>
        <p className="workflow-note">
          Pas un outil de plus. Il vit dans vos outils existants.
          <br />
          <strong>
            L'humain reste dans la boucle : il valide, il decide.
          </strong>
        </p>
      </div>

      {/* Slide 7 — Démo Live : Simulateur */}
      <div className={`slide ${current === 6 ? "active" : ""}`}>
        <h2>Mesurez l'impact pour votre equipe</h2>
        <ROICalculator />
      </div>

      {/* Slide 8 — Ce que ça change */}
      <div className={`slide ${current === 7 ? "active" : ""}`}>
        <h2>Ce Que Ca Change</h2>
        <div className="closing-points">
          <div className="closing-point">
            <strong>L'IA agents n'est pas une menace</strong> — c'est un levier.
            Les equipes se concentrent sur ce qui compte.
          </div>
          <div className="closing-point">
            Les taches repetitives sont deleguees, <strong>pas les decisions</strong>.
            L'humain garde le controle.
          </div>
          <div className="closing-point">
            L'integration est <strong>progressive</strong> — on commence par un cas
            d'usage, on mesure, on elargit.
          </div>
        </div>
        <div className="closing-quote">
          "La question n'est plus si, mais quand."
        </div>
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
      <div className="slide-counter">
        {current + 1} / {TOTAL_SLIDES}
      </div>
    </div>
  );
}
