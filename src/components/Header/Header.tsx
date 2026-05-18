import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img src="./src/assets/logo.svg" className={classes.logo} />
            <button className={classes.cartButton}></button>
        </header>
    )
}

export default Header;