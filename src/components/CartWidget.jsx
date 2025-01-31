import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import cartIcon from "/images/carrito-de-compras.png";
import { useNavigate } from 'react-router-dom';

function CartWidget() {
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/cart')} style={{ background: "none", border: "none", cursor: "pointer" }}>
      <img src={cartIcon} alt="Carrito" width="30" /> {totalItems > 0 && <span>({totalItems})</span>}
      </button>
    </div>
  );
}
export default CartWidget;