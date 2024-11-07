import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import { useContext } from 'react'

const CartIcon = () => {
    const { toggleIsCartOpen } = useContext(CartDropdownContext)
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;