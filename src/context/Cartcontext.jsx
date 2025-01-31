import { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (item, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id
          ? { ...product, stock: product.stock - quantity }
          : product
      )
    );

    setCart((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id);

      if (existingItem) {
        if (existingItem.quantity + quantity > item.stock) {
          alert("Cantidad supera el stock disponible");
          return prevCart; 
        }
        return prevCart.map((product) =>
         product.id === item.id
         ? { ...product, quantity: product.quantity + quantity }
        : product
    );
      } else {

        return [...prevCart, { ...item, quantity}];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, products, setProducts, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};