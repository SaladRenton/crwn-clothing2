import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

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



const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPENED: 'SET_IS_CART_OPENED'

}


const INITIAL_STATE = {
  isCartOpened: false,
  cartItems: [],
  itemCount: 0,
  cartTotal: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPENED:
      return {
        ...state,
        isCartOpened: payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

}




// Crea el contexto
export const CartDropdownContext = createContext({
  cartItems: [],
  isCartOpened: false,
  setIsCartOpen: () => { },
  addItemToCart: () => { },
  decreaseCartItemQuantity: () => { },
  setIsCartOpened: () => { },
  itemCount: 0,
  clearItemFromCart: () => { },
  cartTotal: 0,
});

// Componente de proveedor del contexto
export const CartDropdownProvider = ({ children }) => {


  const [{ cartItems, itemCount, cartTotal, isCartOpened }, dispatch] = useReducer(cartReducer, INITIAL_STATE);



  const updateCartItemDropdownReducer = (newCartItems) => {

    const newItemCount = newCartItems.reduce((acc, item) => acc + item.quantity, 0);

    const newCartTotal = newCartItems.reduce((total, cartItem) =>
      total + (cartItem.quantity * cartItem.price), 0)

    const payload = {
      cartItems: newCartItems,
      itemCount: newItemCount,
      cartTotal: newCartTotal,      

    }

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload)
    );

  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemDropdownReducer(newCartItems);
  };

  const decreaseItemQuantity = (cartItemToRemove) => {
    const newCartItems = decreaseCartItemQuantity(cartItems, cartItemToRemove)
    updateCartItemDropdownReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCartItemDropdownReducer(newCartItems);
  };

  const setIsCartOpened = (bool) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPENED, bool)
    );
  };



  const value = {
    isCartOpened,
    setIsCartOpened,
    addItemToCart,
    decreaseItemQuantity,
    clearItemFromCart,
    itemCount,
    cartItems,
    cartTotal
  }

  return (
    <CartDropdownContext.Provider
      value={value}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};
