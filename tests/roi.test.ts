import { describe, it, expect } from "vitest";
import { calculateROI } from "../src/utils/roi";

describe("calculateROI", () => {
  it("should calculate monthly savings correctly", () => {
    // 30 tasks/month, 1.5h each, 70€/h
    // Manual: 30 * 1.5 * 70 = 3150€
    // Agent: 30 * 0.50 = 15€
    // Savings: 3135€
    const result = calculateROI(30, 1.5, 70);
    expect(result).not.toBeNull();
    expect(result!.monthlySavings).toBe(3135);
    expect(result!.manualCost).toBe(3150);
    expect(result!.agentCost).toBe(15);
  });

  it("should calculate ROI percentage", () => {
    const result = calculateROI(20, 2, 80);
    expect(result).not.toBeNull();
    expect(result!.roiPercent).toBeGreaterThan(95);
  });

  it("should calculate hours freed per month", () => {
    const result = calculateROI(30, 1.5, 70);
    expect(result).not.toBeNull();
    expect(result!.hoursFreed).toBe(45);
  });

  it("should return null for invalid inputs", () => {
    expect(calculateROI(0, 1, 50)).toBeNull();
    expect(calculateROI(-1, 1, 50)).toBeNull();
  });
});
