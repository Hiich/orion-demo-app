import { useState } from "react";
import { calculateROI, type ROIResult } from "../utils/roi";

export default function ROICalculator() {
  const [tasks, setTasks] = useState("30");
  const [time, setTime] = useState("1.5");
  const [rate, setRate] = useState("70");
  const [result, setResult] = useState<ROIResult | null>(null);

  const handleCalculate = () => {
    const r = calculateROI(Number(tasks), Number(time), Number(rate));
    setResult(r);
  };

  return (
    <div className="calculator">
      <div className="calc-fields">
        <div className="calc-field">
          <label>Tâches automatisables / mois</label>
          <input
            type="number"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
        </div>
        <div className="calc-field">
          <label>Temps moyen par tâche (h)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="calc-field">
          <label>Coût horaire équipe (euros)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </div>

      <button className="calc-btn" onClick={handleCalculate}>
        Calculer l'impact
      </button>

      {result && (
        <div className="calc-results">
          <div className="calc-result-card">
            <div className="result-value">{result.monthlySavings.toLocaleString("fr-FR")} &euro;</div>
            <div className="result-label">Économies / mois</div>
          </div>
          <div className="calc-result-card">
            <div className="result-value">{result.hoursFreed}h</div>
            <div className="result-label">Temps libéré / mois</div>
          </div>
          <div className="calc-result-card">
            <div className="result-value">{result.roiPercent}%</div>
            <div className="result-label">ROI</div>
          </div>
          <div className="calc-result-card">
            <div className="result-value">{result.agentCost} &euro;</div>
            <div className="result-label">Coût agent / mois</div>
          </div>
        </div>
      )}
    </div>
  );
}
