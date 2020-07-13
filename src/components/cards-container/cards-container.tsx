import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "../container/container";
import SmallCard from "../card/small-card";
import Product from "./../../objects/Product";
import config from "../../config";
import "./cards-container.css";

const CardsContainer: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async (url: string) => {
      await Axios.get(url)
        .then(({ data }) => {
          setProducts(data.data.items);
        })
        .catch((err) => {
          // console.log(err);
        });
    };
    fetchProducts(config.API_URI + "/products");
  }, []);

  return (
    <Container>
      <div className="cards-container">
        <div className="cards-container-header">
          <div className="card-container-details">
            <p className="cards-container-title">Baru Dipanen</p>
            <p className="cards-container-subtitle">
              Buah dan Sayuran yang baru dipanen
            </p>
          </div>
          <a href="/search?q=baru+dipanen" className="cards-container-link">
            <span>Lihat Semua</span>
          </a>
        </div>
        <img
          src={"/images/header.jpg"}
          className="cards-container-image"
          alt=""
        />
        <div className="cards-container-list">
          {products
            ? products.map((product) => {
                return <SmallCard product={product} key={product._id} />;
              })
            : null}
        </div>
      </div>
    </Container>
  );
};

export default CardsContainer;
