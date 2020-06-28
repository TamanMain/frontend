import React from "react";
import "./product-not-found.css";

class ProductNotFound extends React.Component {
  render() {
    return (
      <div className="product-not-found">
        <img src="/images/common/product_not_found.png" alt="" />
        <h3>Produk Tidak Ditemukan</h3>
        <p>
          Tidak menemukan produk apapun di database.
          <br />
          Silahkan masukkan kata kunci pencarian lain.
        </p>
        <button type="button" onClick={() => (window.location.href = "/")}>
          Kembali
        </button>
      </div>
    );
  }
}

export default ProductNotFound;
