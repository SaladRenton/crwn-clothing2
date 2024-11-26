import {ProductCartContainer, Footer, Name,Price } from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx'
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDropdownContext); 

  // En lugar de llamar a addItemToCart directamente, 
  // se crea una función que se ejecutará al hacer click:
  const handleAddToCart = () => { 
    addItemToCart(product); 
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;