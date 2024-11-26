
import { ItemCount, ShoppingIcon, CartIconContainer } from './cart-icon.styles.jsx'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import { useContext } from 'react'

const CartIcon = () => {

    const { itemCount, toggleIsCartOpen } = useContext(CartDropdownContext);


    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount>{itemCount}</ItemCount>


        </CartIconContainer>
    )
}

export default CartIcon;