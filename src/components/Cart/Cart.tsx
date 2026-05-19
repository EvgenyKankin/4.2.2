import { useCart } from '../addToCart/addToCart'

type CartProps = {
    onClose : () => void;
    opened : boolean;
}

function Cart({opened, onClose}: CartProps) {

    const {cart} = useCart();

    if (!opened) return null;
    
    return (
        <div>
            <button onClick = {onClose}>Close</button>
            <h2>Cart</h2>

            {cart.length === 0 ? (<p>Корзина пустая</p>) : (
                cart.map((item)=> (<div key={item.id}>
                                    <img src={item.image} width={50} />
                                    <p>{item.name}</p>
                                    <p>Количество: {item.quantity}</p>
                                    <p>Цена: {item.price * item.quantity}</p>
                                    </div>)))
            }

        </div>
    )
}

export default Cart;