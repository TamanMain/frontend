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

  return categories.length > 0 ? (
    <Container>
      <div className="group-categories">
        {categories.map((category: ICategory) => {
          return <CategoriesItem category={category} key={category.name} />;
        })}
      </div>
    </Container>
  ) : null;
};

export default GroupCategories;
