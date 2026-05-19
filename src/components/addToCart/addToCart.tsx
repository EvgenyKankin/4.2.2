import { createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import { type Product } from '../FeaturesCard/FeaturesCard.tsx';

export type CartItem = Product & {quantity : number};

type CartContextType = {
    cart : CartItem[];
    addToCart : (product : Product, quantity : number) => void;
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
        });}
    
    return (
        <CartContext.Provider value = {{cart, addToCart}}>
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