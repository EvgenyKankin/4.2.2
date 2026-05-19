import classes from './Header.module.css';
import { useState } from 'react'
import Cart from '../Cart/Cart';

function Header() {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    return (
        <header className={classes.header}>
            <img src="./src/assets/logo.svg" className={classes.logo} />
            <button className={classes.cartButton} onClick = {() => setIsCartOpen(true)}></button>
            <Cart opened={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    )
}


export default Header;