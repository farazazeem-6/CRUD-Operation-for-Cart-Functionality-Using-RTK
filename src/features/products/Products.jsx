import React from "react";
import "../products/Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "./productSlice";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      <button onClick={() => dispatch(fetchAsyncProducts())}>
        Fetch Products
      </button>
      <div className="productContainer">
        {products.map((product, index) => (
          <div className="card">
            <img
              src={product.images}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description.slice(0, 20)}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
