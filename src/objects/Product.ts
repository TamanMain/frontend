interface Product {
  _id: string;
  seller: string;
  sellerId: string;
  name: string;
  categories: string[];
  availability: boolean;
  price: number;
  thumbnail: string;
  images: string[];
  isDiscount: boolean;
  actualPrice: number;
  discount: number;
  stocks: number;
  quantity: number;
  unit: string;
  description: string;
  statistics: {
    created_at?: Date;
    expired_at?: Date;
    views: number;
    favorites?: number;
  };
}

export default Product;
