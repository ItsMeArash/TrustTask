export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPrecentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export interface ProductProps {
  productData: Product;
}