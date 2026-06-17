import { useCart } from '../../context/CartContext/CartContext';
import classes from './Cart.module.css';
import cartEmptyImg from '../../assets/cartEmpty.svg';

type CartProps = {
  opened: boolean;
  onClose: () => void;
};

function Cart({ opened, onClose }: CartProps) {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  if (!opened) return null;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div
        className={classes.cartModal}
        onClick={(event) => event.stopPropagation()}
      >
        {cart.length === 0 ? (
          <div className={classes.empty}>
            <img src={cartEmptyImg} className={classes.emptyImg}/>
            <p className={classes.emptyText}>Ваша корзина пустая</p>
          </div>
        ) : (
          <>
            {cart.map((item) => {
              const [title, details] = item.name.split(' - ');
              const [, unit] = details.split(' ');

              return (
                <div className={classes.cartItem} key={item.id}>
                  <img
                    className={classes.image}
                    src={item.image}
                    alt={title}
                  />

                  <div className={classes.info}>
                    <div className={classes.titleRow}>
                      <span className={classes.title}>{title}</span>
                      <span className={classes.unit}>1 {unit}</span>
                    </div>

                    <div className={classes.price}>$ {item.price}</div>
                  </div>

                  <div className={classes.counter}>
                    <button className={classes.minusButton} aria-label={`decrease ${title}`} onClick={() => decreaseQuantity(item.id)}></button>
                    <span className={classes.quantity} data-testid={`cart-quantity-${item.id}`}>
                      {item.quantity}
                    </span>
                    <button className={classes.plusButton} aria-label={`increase ${title}`} onClick={() => increaseQuantity(item.id)}></button>
                  </div>
                </div>
              );
            })}

            <div className={classes.total}>
              <span>Total</span>
              <span data-testid="cart-total">$ {totalPrice}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;