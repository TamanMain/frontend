import React, { useState } from "react";
import Button from "../button/button";
import "./product-button.css";

const ProductButton: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="col-100 center">
      {count === 0 ? (
        <Button name="Beli" action={() => setCount(count + 1)} />
      ) : (
        <React.Fragment>
          <Button name="-" action={() => setCount(count - 1)} />
          <div className="col-100 center product-button-counter">
            <span>{count}</span>
          </div>
          <Button name="+" action={() => setCount(count + 1)} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductButton;
