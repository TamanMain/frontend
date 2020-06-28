import React from "react";
import ProductList from "../../libs/product-list";
import Card from "../../components/card/card";
import "./search-page.css";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-result">
        <p className="p-3">Hasil Pencarian</p>
        <div className="search-result-list">
          {ProductList.map((product) => {
            return <Card product={product} key={product._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchPage;
