import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, toggleIsCartOpen, clearItemFromCart } = useContext(CartDropdownContext); 
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        toggleIsCartOpen(); 
    }

    // Función para eliminar un item del carrito
    const handleClearItem = (cartItem) => {
        clearItemFromCart(cartItem); 
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} onClearItem={handleClearItem} /> 
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </div>
    );
}

export default CartDropdown;