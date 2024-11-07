import { createContext, useState } from "react"


export const CartDropdownContext = createContext({
    cartItems: [],
    isCartOpened: false,


}

)

export const CartDropdownProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpened, setIsCartOpened] = useState(false)

    const toggleIsCartOpen = () => setIsCartOpened(!isCartOpened);
    const addItemToCart = (productToAdd) => {
        setCartItems([...cartItems, productToAdd]);
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(cartItems.filter(item => item.id !== productToRemove.id));
    }



    return (

        <CartDropdownContext.Provider
            value={{
                cartItems, setCartItems, isCartOpened, setIsCartOpened, toggleIsCartOpen,
                addItemToCart, removeItemFromCart
            }}>
            {children}
        </CartDropdownContext.Provider>
    )

}

