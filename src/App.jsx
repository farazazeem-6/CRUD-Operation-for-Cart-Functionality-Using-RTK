import React from "react";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      {/* <Cart/> */}
      <Products />
    </div>
  );
}

export default App;
