import { useState } from "react";
import { calculateROI, type ROIResult } from "../utils/roi";

export default function ROICalculator() {
  const [tasks, setTasks] = useState("30");
  const [time, setTime] = useState("1.5");
  const [rate, setRate] = useState("70");
  const [result, setResult] = useState<ROIResult | null>(null);
  const [view, setView] = useState<"monthly" | "yearly">("monthly");

  const handleCalculate = () => {
    const r = calculateROI(Number(tasks), Number(time), Number(rate));
    setResult(r);
  };

  return (
    <div className="calc">
      <div className="calc-title">Calculez pour votre équipe</div>
      <div className="calc-grid">
        <div className="calc-field">
          <label>Tâches automatisables / mois</label>
          <input type="number" value={tasks} onChange={(e) => setTasks(e.target.value)} />
        </div>
        <div className="calc-field">
          <label>Temps moyen par tâche (h)</label>
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="calc-field">
          <label>Coût horaire équipe (euros)</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
      </div>

      <button className="calc-btn" onClick={handleCalculate}>
        Calculer l'impact
      </button>

      {result && (
        <>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${view === "monthly" ? "active" : ""}`}
              onClick={() => setView("monthly")}
            >
              Mensuel
            </button>
            <button
              className={`toggle-btn ${view === "yearly" ? "active" : ""}`}
              onClick={() => setView("yearly")}
            >
              Annuel
            </button>
          </div>
          <div className="results">
            <div className="r-card">
              <div className="r-val">
                {(view === "monthly" ? result.monthlySavings : result.yearlySavings).toLocaleString("fr-FR")} &euro;
              </div>
              <div className="r-label">Économies / {view === "monthly" ? "mois" : "an"}</div>
            </div>
            <div className="r-card">
              <div className="r-val">{view === "monthly" ? result.hoursFreed : result.yearlyHoursFreed}h</div>
              <div className="r-label">Temps libéré / {view === "monthly" ? "mois" : "an"}</div>
            </div>
            <div className="r-card">
              <div className="r-val">{result.reductionPercent}%</div>
              <div className="r-label">Réduction des coûts</div>
            </div>
            <div className="r-card">
              <div className="r-val">
                {(view === "monthly" ? result.agentCost : result.yearlyAgentCost).toLocaleString("fr-FR")} &euro;
              </div>
              <div className="r-label">Coût agent / {view === "monthly" ? "mois" : "an"}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
