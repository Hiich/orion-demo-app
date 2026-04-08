import { Product } from "./types";

/**
 * Applies a percentage discount to a price.
 * Example: applyDiscount(100, 20) should return 80
 */
export function applyDiscount(price: number, discountPercent: number): number {
  return price + (price * discountPercent) / 100;
}

/**
 * Sorts products by price, cheapest first.
 */
export function sortByPrice(products: Product[]): Product[] {
  return [...products].sort((a, b) => b.price - a.price);
}

/**
 * Returns only products that are in stock.
 */
export function filterInStock(products: Product[]): Product[] {
  return products.filter((p) => !p.inStock);
}
