import React, { useState, useEffect } from "react";
import ProductList from "../../components/product-list/product-list";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./search-page.css";

const SearchPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  const search = useLocation().search;

  useEffect(() => {
    const fetchProducts = async (url: string) => {
      const { data } = await axios.get(url);
      setProducts(data.data.items);
    };
    fetchProducts(process.env.REACT_APP_API_URI + "/search" + search);
  }, [search]);

  return (
    <div>
      <ProductList title="Hasil Pencarian" products={products} />
    </div>
  );
};

export default SearchPage;
