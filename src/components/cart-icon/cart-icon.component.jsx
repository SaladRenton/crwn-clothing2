
import { ItemCount, ShoppingIcon, CartIconContainer } from './cart-icon.styles.jsx'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import { useContext } from 'react'

const CartIcon = () => {

    const { itemCount, isCartOpened, setIsCartOpened } = useContext(CartDropdownContext);

    const toggleIsCartOpen = () => {
        if (isCartOpened) {
            setIsCartOpened(false)
        } else { setIsCartOpened(true) }

    }


    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount>{itemCount}</ItemCount>


        </CartIconContainer>
    )
}

export default CartIcon;