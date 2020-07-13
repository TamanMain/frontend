import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SkeletonCircle, Skeleton } from "../skeleton/skeleton";
import ICategory from "./ICategory";
import ImageSquare from "../image/image-square";

interface Props {
  category: ICategory;
}

const GroupCategoriesItem: React.FC<Props> = ({ category }) => {
  const [loading, setLoading] = useState(true);

  const imageLoader = new Image();
  imageLoader.src = category.icon;
  imageLoader.onload = () => {
    setLoading(false);
  };

  return loading ? (
    <div className="group-categories-item">
      <div className="group-categories-item-image">
        <SkeletonCircle />
      </div>
      <div className="group-categories-item-text">
        <Skeleton />
      </div>
    </div>
  ) : (
    <Link
      to={"/search?category=" + category.name}
      className="group-categories-item"
    >
      <div className="group-categories-item-image">
        <ImageSquare imageUrl={category.icon} />
      </div>
      <div className="group-categories-item-text">{category.displayName}</div>
    </Link>
  );
};

export default GroupCategoriesItem;
