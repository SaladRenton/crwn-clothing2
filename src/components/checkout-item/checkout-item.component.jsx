import './checkout-item.styles.scss';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
    const { clearItemFromCart, setCartItems,
        addItemToCart, decreaseItemQuantity } = useContext(CartDropdownContext); // Obtén setCartItems
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem, setCartItems); // Pasa setCartItems

    const addItemHandler = () => addItemToCart(cartItem);
    const decreaseItemHandler = () => decreaseItemQuantity(cartItem);


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>

                <div className='arrow' onClick={decreaseItemHandler}>
                    &#10094;
                </div>

                <span className='value'>
                    {quantity}
                </span>                

                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>

            </span>
            <span className='price'> {price} </span>
            <div
                className='remove-button'
                onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;