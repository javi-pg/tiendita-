import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio unitario: ${product.price}</p>
              <p>Subtotal: ${product.price * product.quantity}</p>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;