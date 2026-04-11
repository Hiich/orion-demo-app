export interface ROIResult {
  manualCost: number;
  agentCost: number;
  monthlySavings: number;
  roiPercent: number;
  hoursFreed: number;
  yearlyManualCost: number;
  yearlyAgentCost: number;
  yearlySavings: number;
  yearlyHoursFreed: number;
  reductionPercent: number;
}

export function calculateROI(
  tasksPerMonth: number,
  avgTimeHours: number,
  hourlyRate: number
): ROIResult | null {
  // Validation des entrées
  if (tasksPerMonth <= 0 || avgTimeHours <= 0 || hourlyRate <= 0) {
    return null;
  }

  // Coût fixe par tâche avec l'agent
  const agentCostPerTask = 0.50;

  // Calculs mensuels
  const manualCost = tasksPerMonth * avgTimeHours * hourlyRate;
  const agentCost = tasksPerMonth * agentCostPerTask;
  const monthlySavings = manualCost - agentCost;
  const hoursFreed = tasksPerMonth * avgTimeHours;

  // Calculs annuels
  const yearlyManualCost = manualCost * 12;
  const yearlyAgentCost = agentCost * 12;
  const yearlySavings = monthlySavings * 12;
  const yearlyHoursFreed = hoursFreed * 12;

  // Calculs des pourcentages
  const roiPercent = manualCost > 0 ? (monthlySavings / manualCost) * 100 : 0;
  const reductionPercent = manualCost > 0 ? (monthlySavings / manualCost) * 100 : 0;

  return {
    manualCost,
    agentCost,
    monthlySavings,
    roiPercent,
    hoursFreed,
    yearlyManualCost,
    yearlyAgentCost,
    yearlySavings,
    yearlyHoursFreed,
    reductionPercent
  };
}
