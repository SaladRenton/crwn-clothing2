import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles.jsx';
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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>

                <Arrow onClick={decreaseItemHandler}>
                    &#10094;
                </Arrow>

                <Value>
                    {quantity}
                </Value>

                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>

            </Quantity>
            <BaseSpan> ${price} </BaseSpan>
            <RemoveButton
                onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;