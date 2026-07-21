import  { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../features/cart/Cart";
import { fetchAsyncItems } from "../features/cart/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncItems());
  }, [dispatch]);
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h2>CART ITEMS</h2>
        </div>
        <div className="cartIcon">
          <IconButton
            aria-label="cart"
            onClick={() => setShowCart(!showCart)}
          >
            <StyledBadge
              badgeContent={items ? items.length : "0"}
              color="secondary"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      {showCart ? <Cart /> : ""}
    </div>
  );
}

export default Header;
