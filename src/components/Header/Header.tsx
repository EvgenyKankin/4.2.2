import classes from './Header.module.css';
import { useState } from 'react'
import Cart from '../Cart/Cart';
import { useCart } from '../../context/CartContext/CartContext';

function Header() {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const { totalItems } = useCart();

    return (
        <header className={classes.header}>
            <img src="./src/assets/logo.svg" className={classes.logo} />
            <button className={(totalItems > 0) ? (classes.cartButtonLong) 
                                                : (classes.cartButton)} 
                    onClick = {() => setIsCartOpen(true)}
                    aria-label='cart'>
                {totalItems > 0 && (<span className={classes.badge}>{totalItems}</span>)}
            </button>
            <Cart opened={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    )
}

export default Header;