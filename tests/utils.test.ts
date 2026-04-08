import { describe, it, expect } from "vitest";
import { applyDiscount, sortByPrice, filterInStock } from "../src/utils";
import { Product } from "../src/types";

describe("applyDiscount", () => {
  it("should reduce the price by the discount percentage", () => {
    expect(applyDiscount(100, 20)).toBe(80);
  });

  it("should return the original price when discount is 0", () => {
    expect(applyDiscount(50, 0)).toBe(50);
  });

  it("should return 0 when discount is 100%", () => {
    expect(applyDiscount(200, 100)).toBe(0);
  });
});

const products: Product[] = [
  { id: "1", name: "Laptop", price: 999, inStock: true },
  { id: "2", name: "Mouse", price: 29, inStock: true },
  { id: "3", name: "Keyboard", price: 79, inStock: false },
  { id: "4", name: "Monitor", price: 349, inStock: true },
  { id: "5", name: "Webcam", price: 59, inStock: false },
];

describe("sortByPrice", () => {
  it("should sort products from cheapest to most expensive", () => {
    const sorted = sortByPrice(products);
    expect(sorted[0].name).toBe("Mouse");       // 29€
    expect(sorted[1].name).toBe("Webcam");       // 59€
    expect(sorted[2].name).toBe("Keyboard");     // 79€
    expect(sorted[3].name).toBe("Monitor");      // 349€
    expect(sorted[4].name).toBe("Laptop");       // 999€
  });
});

describe("filterInStock", () => {
  it("should return only products that are in stock", () => {
    const inStock = filterInStock(products);
    expect(inStock).toHaveLength(3);
    expect(inStock.every((p) => p.inStock)).toBe(true);
  });

  it("should not include out-of-stock products", () => {
    const inStock = filterInStock(products);
    expect(inStock.find((p) => p.name === "Keyboard")).toBeUndefined();
    expect(inStock.find((p) => p.name === "Webcam")).toBeUndefined();
  });
});
