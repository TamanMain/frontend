import React from "react";
import ProductList from "../../components/product-list/product-list";
import ProductsData from "./../../libs/products-data";
import "./search-page.css";

const SearchPage: React.FC = () => {
  return (
    <div>
      <ProductList title="Hasil Pencarian" products={ProductsData} />
    </div>
  );
};

export default SearchPage;
