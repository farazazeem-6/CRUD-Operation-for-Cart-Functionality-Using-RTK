import React, { useEffect } from "react";
import "../products/Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "./productSlice";
import { addAsyncItems } from "../cart/cartSlice";


function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  },[]);
  return (
    <div>
      <div className="productContainer">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
            className="cardImage"
              src={product.images}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h1 className="cardTitle">{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description.slice(0, 20)}</p>
            <p>
              <button className="cartBtn" onClick={() => dispatch(addAsyncItems(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
