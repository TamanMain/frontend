import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "../container/container";
import CategoriesItem from "./categories-item";
import ICategory from "./ICategory";
import "./categories.css";

const GroupCategories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await Axios.get(process.env.REACT_APP_API_URI + "/categories")
      .then(({ data }) => {
        setCategories(data.data.items);
      })
      .catch(() => {
        console.log("Product not found");
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories ? (
    <Container>
      <div className="group-categories">
        {categories.map((category: ICategory) => {
          return (
            <CategoriesItem
              link={"/search?p=" + category.name}
              name={category.displayName}
              icon={category.icon}
              key={category.name}
            />
          );
        })}
      </div>
    </Container>
  ) : null;
};

export default GroupCategories;
