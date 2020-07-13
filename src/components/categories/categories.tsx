import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "../container/container";
import CategoriesItem from "./categories-item";
import ICategory from "./ICategory";
import config from "../../config";
import "./categories.css";

const GroupCategories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await Axios.get(config.API_URI + "/categories")
      .then(({ data }) => {
        setCategories(data.data.items);
      })
      .catch((err) => {
        // console.log(err);
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
              link={"/search?category=" + category.name}
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
