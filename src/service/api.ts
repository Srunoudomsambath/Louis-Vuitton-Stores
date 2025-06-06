// src/services/productService.ts
import type { Product } from "../types/product";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return await res.json();
}
