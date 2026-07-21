import { useEffect } from "react";
import "../cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncItems, fetchAsyncItems } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, [dispatch]);

  if (error) {
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div className="cardContainer">
      <div>
        {items.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Cart is empty</p>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="img-fluid" src={item.thumbnail} alt="" />
              <div className="description">
                <p>{item.title}</p>
                <span>{item.brand}</span>
                <strong>${item.price}</strong>
              </div>
              <div className="close">
                <button onClick={() => dispatch(deleteAsyncItems(item.id))}>
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <h1>
          Total:${Math.floor(items.reduce((acc, item) => item.price + acc, 0))}
        </h1>
      )}
    </div>
  );
}

export default Cart;
