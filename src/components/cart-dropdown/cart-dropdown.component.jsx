import {CartDropdownStyles, EmptyMessageStyles, CartItemsStyles} from  './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, clearItemFromCart } = useContext(CartDropdownContext); 
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
         
    }

    // Función para eliminar un item del carrito
    const handleClearItem = (cartItem) => {
        clearItemFromCart(cartItem); 
    };

    return (
        <CartDropdownStyles>
            <CartItemsStyles>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} onClearItem={handleClearItem} /> 
                    )) 
                ) : (
                    <EmptyMessageStyles>Your cart is empty</EmptyMessageStyles>
                )}
            </CartItemsStyles>
            <Button onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </CartDropdownStyles>
    );
}

export default CartDropdown;