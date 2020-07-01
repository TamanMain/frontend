interface Product {
  _id: number;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  isDiscount?: boolean;
  discountPercent?: number;
  discountPrice?: number;
  images: string[];
  description?: string;
}

export default Product;
