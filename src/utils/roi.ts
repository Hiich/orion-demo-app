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

/**
 * Calculates the ROI of automating repetitive tasks with an AI agent.
 *
 * @param tasksPerMonth - Number of automatable tasks per month
 * @param avgTimeHours - Average time spent per task (in hours)
 * @param hourlyRate - Hourly cost of the team member (in €)
 * @returns ROI breakdown or null if inputs are invalid
 */
export function calculateROI(
  tasksPerMonth: number,
  avgTimeHours: number,
  hourlyRate: number
): ROIResult | null {
  if (tasksPerMonth <= 0 || avgTimeHours <= 0 || hourlyRate <= 0) {
    return null;
  }

  const manualCostPerMonth = tasksPerMonth * avgTimeHours * hourlyRate;
  const agentCostPerMonth = tasksPerMonth * 0.5;
  const savings = manualCostPerMonth - agentCostPerMonth;
  const roiPercent = Math.round((savings / manualCostPerMonth) * 100);
  const hoursFreed = tasksPerMonth * avgTimeHours;
  const reductionPercent = Math.round((savings / manualCostPerMonth) * 100);

  const yearlyManualCost = manualCostPerMonth * 12;
  const yearlyAgentCost = agentCostPerMonth * 12;
  const yearlySavings = yearlyManualCost - yearlyAgentCost;
  const yearlyHoursFreed = hoursFreed * 12;

  return {
    manualCost: Math.round(manualCostPerMonth),
    agentCost: Math.round(agentCostPerMonth),
    monthlySavings: Math.round(savings),
    roiPercent,
    hoursFreed: Math.round(hoursFreed),
    yearlyManualCost: Math.round(yearlyManualCost),
    yearlyAgentCost: Math.round(yearlyAgentCost),
    yearlySavings: Math.round(yearlySavings),
    yearlyHoursFreed: Math.round(yearlyHoursFreed),
    reductionPercent,
  };
}
