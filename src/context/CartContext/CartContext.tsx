import { createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import { type Product } from '../../components/ProductCard/ProductCard.tsx';

export type CartItem = Product & {quantity : number};

type CartContextType = {
    cart : CartItem[];
    addToCart : (product : Product, quantity : number) => void;
    increaseQuantity : (id : number) => void;
    decreaseQuantity : (id : number) => void;
    totalItems : number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children } : { children : ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(()=> {
        const savedCart = localStorage.getItem('cart')
        
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]); 


    function addToCart(product:Product, quantity:number) {
    
        setCart((prevCart)=> {
            const existingProduct = prevCart.find((item) => item.id === product.id);
        
        
            if (existingProduct) {
                return prevCart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
            }
        
            return [...prevCart, {...product, quantity},];
        });
    }
    
    function increaseQuantity(id:number) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? {...item, quantity: item.quantity + 1,}: item));
    }

    function decreaseQuantity(id:number) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? {...item, quantity: item.quantity - 1,}: item).filter((item) => item.quantity > 0));
    }

    const totalItems = cart.length;

    return (
        <CartContext.Provider value = {{cart, addToCart, increaseQuantity, decreaseQuantity, totalItems}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart () {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart должен использоваться внутри CartProvider')
    }

    return context
}