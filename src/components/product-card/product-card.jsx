import './product-card.styles.scss'
import Button from '../button/button.component'
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
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;