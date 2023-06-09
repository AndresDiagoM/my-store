export interface Category {
  id: string;
  name: string;
}
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  description ?: string; // ? es opcional
  category ?: Category;
}