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
      <div className="fields">
        <label>
          Taches automatisables / mois
          <input
            type="number"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />
        </label>
        <label>
          Temps moyen par tache (h)
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          Cout horaire equipe (euros)
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleCalculate}>Calculer l'impact</button>

      {result && (
        <div className="results">
          <div className="result-card">
            <div className="value">{result.monthlySavings.toLocaleString("fr-FR")} euros</div>
            <div className="label">Economies / mois</div>
          </div>
          <div className="result-card">
            <div className="value">{result.hoursFreed}h</div>
            <div className="label">Temps libere / mois</div>
          </div>
          <div className="result-card">
            <div className="value">{result.roiPercent}%</div>
            <div className="label">ROI</div>
          </div>
          <div className="result-card">
            <div className="value">{result.agentCost} euros</div>
            <div className="label">Cout agent / mois</div>
          </div>
        </div>
      )}
    </div>
  );
}
