import { useState, useEffect } from "react";
import ROICalculator from "./components/ROICalculator";
import "./App.css";

const N = 9;

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

      {/* ═══ SLIDE 0 : INTRO CINÉMATIQUE ═══ */}
      <div className={`slide ${s === 0 ? "active" : ""}`}>
        <div className="intro-scene">
          <div className="intro-glow orange" />
          <div className="intro-glow blue" />
          <div className="mega-slash s1" />
          <div className="mega-slash s2" />
          <div className="mega-slash s3" />
          <div className="intro-flash" />
          <div className="amb a1" /><div className="amb a2" />
          <div className="amb a3" /><div className="amb a4" />
          <div className="intro-center">
            <div className="intro-title">
              Agents <span className="accent">IA</span>
            </div>
            <div className="intro-divider" />
            <div className="intro-tagline">L'automatisation intelligente</div>
            <div className="intro-subtitle">Comment l'IA autonome transforme les organisations</div>
          </div>
          <div className="intro-bottom-bar" />
          <div className="noise" />
        </div>
      </div>

      {/* ═══ SLIDE 1 : L'IA AUJOURD'HUI ═══ */}
      <div className={`slide ${s === 1 ? "active" : ""}`} style={{ background: "var(--gray-50)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">01</div>
            <div className="section-label">Contexte</div>
            <h2 className="section-title">L'IA aujourd'hui :<br />de l'assistant &agrave; l'agent</h2>
          </div>
          <div className="section-intro fade-in stagger-1">
            L'intelligence artificielle a franchi trois grandes &eacute;tapes en trois ans. Nous entrons dans la troisi&egrave;me.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: 70, top: 24, bottom: 24, width: 2, background: "linear-gradient(to bottom, var(--orange), var(--blue))", opacity: 0.2 }} />
            {[
              { year: "2023", text: "Les LLMs arrivent. Tout le monde d\u00e9couvre ChatGPT.", bold: "L'IA comprend et g\u00e9n\u00e8re du langage." },
              { year: "2024\u201425", text: "L'IA s'int\u00e8gre dans les outils : Copilot, assistants, RAG.", bold: "L'IA assiste les humains dans leur travail." },
              { year: "2026", text: "Les agents autonomes \u00e9mergent. L'IA ne r\u00e9pond plus \u2014 elle agit.", bold: "On passe de l'IA qui assiste \u00e0 l'IA qui ex\u00e9cute.", highlight: true },
            ].map((item, i) => (
              <div key={i} className={`fade-in stagger-${i + 2}`} style={{ display: "flex", alignItems: "flex-start", gap: 28, padding: "20px 0" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--orange)", minWidth: 80, textAlign: "right", paddingTop: 4 }}>{item.year}</span>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: item.highlight ? "var(--orange)" : "var(--blue)", flexShrink: 0, marginTop: 4, border: "3px solid var(--gray-50)", boxShadow: `0 0 0 2px ${item.highlight ? "var(--orange)" : "var(--blue)"}` }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "1.05rem", color: "var(--gray-600)", lineHeight: 1.65 }}>{item.text}</p>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--black)", lineHeight: 1.65 }}>{item.bold}</p>
                  {item.highlight && (
                    <span style={{ display: "inline-block", marginTop: 8, padding: "6px 16px", background: "rgba(255,93,36,0.08)", borderRadius: 8, fontSize: "0.9rem", fontWeight: 700, color: "var(--orange)" }}>
                      L'IA ne r&eacute;pond plus &mdash; elle agit.
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SLIDE 2 : CHATBOT VS AGENT ═══ */}
      <div className={`slide ${s === 2 ? "active" : ""}`} style={{ background: "var(--white)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">02</div>
            <div className="section-label">La diff&eacute;rence</div>
            <h2 className="section-title">Chatbot vs Agent</h2>
          </div>
          <div className="vs-grid fade-in stagger-1">
            <div className="vs-card">
              <h3>Chatbot</h3>
              <span className="vs-tag passive">Passif</span>
              <p>Vous posez une question. Il r&eacute;pond. Il ne fait rien d'autre. Il attend la prochaine question.</p>
              <div className="quote">&laquo; Un conseiller. &raquo;</div>
            </div>
            <div className="vs-divider"><div className="vs-badge">VS</div></div>
            <div className="vs-card agent-side">
              <h3>Agent IA</h3>
              <span className="vs-tag active">Autonome</span>
              <p>Vous lui donnez un objectif. Il planifie, utilise des outils, ex&eacute;cute, v&eacute;rifie, et livre un r&eacute;sultat.</p>
              <div className="quote">&laquo; Un collaborateur. &raquo;</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SLIDE 3 : COMMENT FONCTIONNE UN AGENT ═══ */}
      <div className={`slide ${s === 3 ? "active" : ""}`} style={{ background: "var(--gray-50)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">03</div>
            <div className="section-label">Fonctionnement</div>
            <h2 className="section-title">Comment fonctionne un agent</h2>
          </div>
          <div className="loop-grid fade-in stagger-1">
            {["Percevoir", "R\u00e9fl\u00e9chir", "Agir", "V\u00e9rifier"].map((label, i) => (
              <div className="loop-card" key={i}>
                <div className="loop-num">0{i + 1}</div>
                <div className="loop-label">{label}</div>
              </div>
            ))}
          </div>
          <p className="desc-text fade-in stagger-2">
            L'agent dispose d'<strong>outils concrets</strong> : lire des fichiers, appeler des APIs, &eacute;crire du code, interagir avec Jira et GitHub. Mais il est <strong>toujours contraint</strong>.
          </p>
          <div className="chips fade-in stagger-3">
            {["Budget limit\u00e9", "Permissions d\u00e9finies", "P\u00e9rim\u00e8tre contr\u00f4l\u00e9", "Review humaine obligatoire"].map((c, i) => (
              <span className="chip" key={i}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SLIDE 4 : CAS D'USAGE ═══ */}
      <div className={`slide ${s === 4 ? "active" : ""}`} style={{ background: "var(--white)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">04</div>
            <div className="section-label">Cas d'usage</div>
            <h2 className="section-title">Les cas qui changent la donne</h2>
          </div>
          <div className="cases-grid fade-in stagger-1">
            {[
              { icon: "/1", title: "Correction automatique", desc: "Correction de bugs, code review, g\u00e9n\u00e9ration de tests. Le d\u00e9veloppeur se concentre sur l'architecture et le produit." },
              { icon: "/2", title: "Reporting intelligent", desc: "Rapports de sprint auto-g\u00e9n\u00e9r\u00e9s, dashboards temps r\u00e9el. Plus de reporting manuel le lundi matin." },
              { icon: "/3", title: "R\u00e9solution proactive", desc: "Triage et r\u00e9solution automatique de tickets. Les \u00e9quipes traitent les cas complexes, l'agent g\u00e8re le reste." },
              { icon: "/4", title: "Rem\u00e9diation autonome", desc: "Monitoring, alerting, correction. L'agent d\u00e9tecte et corrige avant que l'\u00e9quipe ne soit alert\u00e9e." },
            ].map((c, i) => (
              <div className="case-card" key={i}>
                <div className="case-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SLIDE 5 : WORKFLOW ═══ */}
      <div className={`slide ${s === 5 ? "active" : ""}`} style={{ background: "var(--gray-50)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">05</div>
            <div className="section-label">Int&eacute;gration</div>
            <h2 className="section-title">L'agent dans votre quotidien</h2>
          </div>
          <div className="flow-chain fade-in stagger-1">
            {[
              { sub: "Trigger", name: "Jira" },
              { sub: "Ex\u00e9cution", name: "Agent" },
              { sub: "Livraison", name: "GitHub" },
              { sub: "Validation", name: "Humain" },
            ].map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <div className="flow-arrow" />}
                <div className="flow-node">
                  <div className="fn-sub">{n.sub}</div>
                  <div className="fn-name">{n.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flow-bottom fade-in stagger-2">
            <p>Pas un outil de plus. Il vit dans vos outils existants.</p>
            <p><strong>L'humain reste dans la boucle : il valide, il d&eacute;cide.</strong></p>
          </div>
          <div className="principle-bar fade-in stagger-3">
            <div className="slash">/</div>
            <div>L'IA propose. L'humain valide. Aucun code n'est merg&eacute; sans revue humaine.</div>
          </div>
        </div>
      </div>

      {/* ═══ SLIDE 6 : IMPACT + CALCULATEUR ═══ */}
      <div className={`slide ${s === 6 ? "active" : ""}`} style={{ background: "var(--white)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">06</div>
            <div className="section-label">Impact</div>
            <h2 className="section-title">Mesurez l'impact pour votre &eacute;quipe</h2>
          </div>
          <div className="roi-layout fade-in stagger-1">
            <div className="roi-stats">
              <div className="roi-stat">
                <div className="stat-icon">T</div>
                <div className="stat-body">
                  <div className="stat-label">Temps moyen de r&eacute;solution</div>
                  <div className="stat-row">
                    <span className="stat-before">2h</span>
                    <span className="stat-arrow">&rarr;</span>
                    <span className="stat-after">3 min</span>
                  </div>
                </div>
              </div>
              <div className="roi-stat">
                <div className="stat-icon">C</div>
                <div className="stat-body">
                  <div className="stat-label">Co&ucirc;t moyen par t&acirc;che</div>
                  <div className="stat-row">
                    <span className="stat-before">160 &euro;</span>
                    <span className="stat-arrow">&rarr;</span>
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
      </div>

      {/* ═══ SLIDE 7 : CE QUE ÇA CHANGE ═══ */}
      <div className={`slide ${s === 7 ? "active" : ""}`} style={{ background: "var(--gray-50)" }}>
        <div className="slide-content">
          <div className="fade-in">
            <div className="section-num">07</div>
            <div className="section-label">Vision</div>
            <h2 className="section-title">Ce que &ccedil;a change</h2>
          </div>
          <div className="closing-items fade-in stagger-1">
            <div className="cl-item">
              <strong>L'IA agents n'est pas une menace</strong> &mdash; c'est un levier. Les &eacute;quipes se concentrent sur ce qui compte : l'architecture, le produit, l'innovation.
            </div>
            <div className="cl-item">
              Les t&acirc;ches r&eacute;p&eacute;titives sont d&eacute;l&eacute;gu&eacute;es, <strong>pas les d&eacute;cisions</strong>. L'humain garde le contr&ocirc;le &agrave; chaque &eacute;tape.
            </div>
            <div className="cl-item">
              L'int&eacute;gration est <strong>progressive</strong> &mdash; on commence par un cas d'usage, on mesure l'impact, on &eacute;largit.
            </div>
          </div>
          <p className="cl-quote fade-in stagger-2">&laquo; La question n'est plus si, mais quand. &raquo;</p>
        </div>
      </div>

      {/* ═══ SLIDE 8 : MERCI ═══ */}
      <div className={`slide ${s === 8 ? "active" : ""}`} style={{ background: "var(--black)" }}>
        <div className="slide-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "100%", padding: 0 }}>
          <div className="fade-in" style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em" }}>
            Merci.
          </div>
          <div className="fade-in stagger-1" style={{ marginTop: 20, width: 80, height: 3, background: "linear-gradient(90deg, var(--orange), var(--blue))", borderRadius: 2 }} />
          <div className="fade-in stagger-2" style={{ marginTop: 28, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--gray-400)", letterSpacing: "0.1em" }}>
            Questions ?
          </div>
        </div>
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
