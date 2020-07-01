import React from "react";
import "./page-not-found.css";

const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <img src="/images/common/product_not_found.png" alt="" />
      <div className="page-not-found-title">Produk Tidak Ditemukan</div>
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
};

export default PageNotFound;
