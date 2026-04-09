import { useState, useEffect } from "react";
import ROICalculator from "./components/ROICalculator";
import "./App.css";

const N = 8;

export default function App() {
  const [s, setS] = useState(0);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setS(c => Math.min(c + 1, N - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setS(c => Math.max(c - 1, 0)); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <div className="presentation">
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* 1 — Titre */}
      <div className={`slide ${s === 0 ? "active" : ""}`} key={`s0-${s === 0}`}>
        <span className="a tag">Intelligence Artificielle</span>
        <h1 className="a">
          Agents IA : la <span className="gradient-text">nouvelle ère</span> de l'automatisation
        </h1>
        <p className="a sub">Comment l'IA autonome transforme les organisations</p>
      </div>

      {/* 2 — L'IA Aujourd'hui */}
      <div className={`slide ${s === 1 ? "active" : ""}`} key={`s1-${s === 1}`}>
        <h2 className="a">L'IA <span className="hl">aujourd'hui</span></h2>
        <div className="a timeline">
          <div className="tl-line" />
          <div className="tl-item">
            <span className="tl-year">2023</span>
            <div className="tl-dot" />
            <div className="tl-body">
              <p>Les LLMs arrivent. Tout le monde découvre ChatGPT.</p>
              <p><strong>L'IA comprend et génère du langage.</strong></p>
            </div>
          </div>
          <div className="tl-item">
            <span className="tl-year">2024—25</span>
            <div className="tl-dot" />
            <div className="tl-body">
              <p>L'IA s'intègre dans les outils : Copilot, assistants, RAG.</p>
              <p><strong>L'IA assiste les humains dans leur travail.</strong></p>
            </div>
          </div>
          <div className="tl-item">
            <span className="tl-year">2026</span>
            <div className="tl-dot" />
            <div className="tl-body">
              <p>Les <strong>agents autonomes</strong> émergent.</p>
              <div className="tl-big">L'IA ne répond plus — elle agit.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 — Chatbot vs Agent */}
      <div className={`slide ${s === 2 ? "active" : ""}`} key={`s2-${s === 2}`}>
        <h2 className="a">Chatbot <span className="hl">vs</span> Agent</h2>
        <div className="a vs">
          <div className="vs-card">
            <h3>Chatbot</h3>
            <span className="vs-tag red">Passif</span>
            <p>Vous posez une question. Il répond. Il ne fait rien d'autre. Il attend la prochaine question.</p>
            <div className="quote">&laquo; Un conseiller. &raquo;</div>
          </div>
          <div className="vs-divider">
            <div className="vs-badge">VS</div>
          </div>
          <div className="vs-card lit">
            <h3>Agent IA</h3>
            <span className="vs-tag green">Autonome</span>
            <p>Vous lui donnez un objectif. Il planifie, utilise des outils, exécute, vérifie, et livre un résultat.</p>
            <div className="quote">&laquo; Un collaborateur. &raquo;</div>
          </div>
        </div>
      </div>

      {/* 4 — Comment fonctionne un agent */}
      <div className={`slide ${s === 3 ? "active" : ""}`} key={`s3-${s === 3}`}>
        <h2 className="a">Comment fonctionne <span className="hl">un agent</span></h2>
        <div className="a loop">
          <div className="loop-card">
            <div className="loop-num">01</div>
            <div className="loop-label">Percevoir</div>
          </div>
          <div className="loop-sep">/</div>
          <div className="loop-card">
            <div className="loop-num">02</div>
            <div className="loop-label">Réfléchir</div>
          </div>
          <div className="loop-sep">/</div>
          <div className="loop-card">
            <div className="loop-num">03</div>
            <div className="loop-label">Agir</div>
          </div>
          <div className="loop-sep">/</div>
          <div className="loop-card">
            <div className="loop-num">04</div>
            <div className="loop-label">Vérifier</div>
          </div>
        </div>
        <p className="a desc">
          L'agent dispose d'<strong>outils concrets</strong> : lire des fichiers, appeler des APIs, écrire du code, interagir avec Jira et GitHub. Mais il est <strong>toujours contraint</strong>.
        </p>
        <div className="a chips">
          <span className="chip">Budget limité</span>
          <span className="chip">Permissions définies</span>
          <span className="chip">Périmètre contrôlé</span>
          <span className="chip">Review humaine obligatoire</span>
        </div>
      </div>

      {/* 5 — Cas d'usage */}
      <div className={`slide ${s === 4 ? "active" : ""}`} key={`s4-${s === 4}`}>
        <h2 className="a">Les cas qui changent <span className="hl">la donne</span></h2>
        <div className="a cases">
          <div className="case">
            <div className="case-cat">Développement</div>
            <h3>Correction automatique</h3>
            <p>Correction de bugs, code review, génération de tests. Le développeur se concentre sur l'architecture et le produit.</p>
          </div>
          <div className="case">
            <div className="case-cat">Management</div>
            <h3>Reporting intelligent</h3>
            <p>Rapports de sprint auto-générés, dashboards temps réel. Plus de reporting manuel le lundi matin.</p>
          </div>
          <div className="case">
            <div className="case-cat">Support</div>
            <h3>Résolution proactive</h3>
            <p>Triage et résolution automatique de tickets. Les équipes traitent les cas complexes, l'agent gère le reste.</p>
          </div>
          <div className="case">
            <div className="case-cat">Opérations</div>
            <h3>Remédiation autonome</h3>
            <p>Monitoring, alerting, correction. L'agent détecte et corrige avant que l'équipe ne soit alertée.</p>
          </div>
        </div>
      </div>

      {/* 6 — Workflow */}
      <div className={`slide ${s === 5 ? "active" : ""}`} key={`s5-${s === 5}`}>
        <h2 className="a">L'agent dans <span className="hl">votre quotidien</span></h2>
        <div className="a flow">
          <div className="flow-node">
            <div className="fn-label">Trigger</div>
            <div className="fn-name">Jira</div>
          </div>
          <div className="flow-arrow" />
          <div className="flow-node">
            <div className="fn-label">Exécution</div>
            <div className="fn-name">Agent</div>
          </div>
          <div className="flow-arrow" />
          <div className="flow-node">
            <div className="fn-label">Livraison</div>
            <div className="fn-name">GitHub</div>
          </div>
          <div className="flow-arrow" />
          <div className="flow-node">
            <div className="fn-label">Validation</div>
            <div className="fn-name">Humain</div>
          </div>
        </div>
        <div className="a flow-bottom">
          <p>Pas un outil de plus. Il vit dans vos outils existants.</p>
          <p><strong>L'humain reste dans la boucle : il valide, il décide.</strong></p>
        </div>
      </div>

      {/* 7 — Impact + Calculateur */}
      <div className={`slide ${s === 6 ? "active" : ""}`} key={`s6-${s === 6}`}>
        <h2 className="a">Mesurez <span className="hl">l'impact</span> pour votre équipe</h2>
        <div className="a roi-layout">
          <div className="roi-stats">
            <div className="roi-stat">
              <div className="stat-icon">T</div>
              <div className="stat-body">
                <div className="stat-label">Temps moyen de résolution</div>
                <div className="stat-row">
                  <span className="stat-before">2h</span>
                  <span className="stat-arrow">&#8594;</span>
                  <span className="stat-after">3 min</span>
                </div>
              </div>
            </div>
            <div className="roi-stat">
              <div className="stat-icon">C</div>
              <div className="stat-body">
                <div className="stat-label">Coût moyen par tâche</div>
                <div className="stat-row">
                  <span className="stat-before">160 &euro;</span>
                  <span className="stat-arrow">&#8594;</span>
                  <span className="stat-after">0,50 &euro;</span>
                </div>
              </div>
            </div>
            <div className="roi-stat">
              <div className="stat-icon">R</div>
              <div className="stat-body">
                <div className="stat-label">Retour sur investissement</div>
                <div className="stat-row">
                  <span className="stat-after">&gt; 95%</span>
                </div>
              </div>
            </div>
          </div>
          <ROICalculator />
        </div>
      </div>

      {/* 8 — Closing */}
      <div className={`slide ${s === 7 ? "active" : ""}`} key={`s7-${s === 7}`}>
        <h2 className="a">Ce que ça <span className="hl">change</span></h2>
        <div className="a closing">
          <div className="cl-item">
            <strong>L'IA agents n'est pas une menace</strong> — c'est un levier. Les équipes se concentrent sur ce qui compte : l'architecture, le produit, l'innovation.
          </div>
          <div className="cl-item">
            Les tâches répétitives sont déléguées, <strong>pas les décisions</strong>. L'humain garde le contrôle à chaque étape.
          </div>
          <div className="cl-item">
            L'intégration est <strong>progressive</strong> — on commence par un cas d'usage, on mesure l'impact, on élargit.
          </div>
        </div>
        <p className="a cl-quote">&laquo; La question n'est plus si, mais quand. &raquo;</p>
      </div>

      {/* Nav */}
      <div className="dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`dot ${s === i ? "on" : ""}`} onClick={() => setS(i)} />
        ))}
      </div>
      <div className="counter">{s + 1} / {N}</div>
    </div>
  );
}
