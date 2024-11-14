import { createContext, useState, useEffect } from 'react';

// Funciones para manipular el carrito
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

const decreaseCartItemQuantity = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// Crea el contexto
export const CartDropdownContext = createContext({
  cartItems: [],
  isCartOpened: false,
  addItemToCart: () => {},
  decreaseCartItemQuantity: () => {},
  setIsCartOpened: () => {},
  itemCount: 0,
  clearItemFromCart: () => {},
  cartTotal: 0,
});

// Componente de proveedor del contexto
export const CartDropdownProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);


  const toggleIsCartOpen = () => setIsCartOpened(!isCartOpened);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemQuantity = (cartItemToRemove) => {
    setCartItems(decreaseCartItemQuantity(cartItems, cartItemToRemove));
  };

  useEffect(() => {
    setItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };


  useEffect(()=>{
    const newCartTotal = cartItems.reduce((total, cartItem) => 
      total + (cartItem.quantity * cartItem.price), 0);
    setCartTotal(newCartTotal);
  },[cartItems])

  return (
    <CartDropdownContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpened,
        setIsCartOpened,
        toggleIsCartOpen,
        addItemToCart,
        decreaseItemQuantity,
        itemCount,
        clearItemFromCart,
        cartTotal
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};
