import {CartItemStyles, ItemDetails, NameStyles, PriceStyles} from './cart-item.styles.jsx'

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem


    return (
        <CartItemStyles>

            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <NameStyles>{name}</NameStyles>

                <PriceStyles>{quantity} x ${price}</PriceStyles>
            </ItemDetails>
        </CartItemStyles>

    )
}

export default CartItem;