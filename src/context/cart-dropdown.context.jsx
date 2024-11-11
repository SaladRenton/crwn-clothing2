import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropdownContext = createContext({
  cartItems: [],
  isCartOpened: false,
  addItemToCart: () => {},
  setIsCartOpened: () => {},
  itemCount: 0,
});

export const CartDropdownProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const toggleIsCartOpen = () => setIsCartOpened(!isCartOpened);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
  };

  useEffect(() => {
    // Calcula itemCount cuando cartItems cambie
    setItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  return (
    <CartDropdownContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpened,
        setIsCartOpened,
        toggleIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        itemCount,
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};
