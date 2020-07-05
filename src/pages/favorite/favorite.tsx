import React, { useState, useEffect } from "react";
import Axios from "axios";
import DefaultNavbar from "../../components/navbar/default-navbar";
import ProductList from "../../components/product-list/product-list";
import Product from "../../objects/Product";
import "./favorite.css";

const Favorite: React.FC = () => {
  const [favProducts, setFavProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (url: string) => {
      const { data } = await Axios.get(url);
      setFavProducts(data.products);
    };
    fetchProducts("http://192.168.0.101:5000/favorite");
  }, []);

  return (
    <React.Fragment>
      <ProductList title="Produk Disukai" products={favProducts} />
      <DefaultNavbar />
    </React.Fragment>
  );
};

export default Favorite;
