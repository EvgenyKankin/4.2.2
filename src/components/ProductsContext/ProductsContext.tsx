import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};

type ProductsContextType = {
    products: Product[];
    isLoading: boolean;
    error: string;
}

const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsProvider({ children } : {children:ReactNode}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect (()=> {
        async function fetchProducts() {
            try {
                const response = await fetch ('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'  
                );
                
                if(!response.ok) {
                    throw new Error('Ошибка загрузки товаров')
                }

                const data:Product[] = await response.json();
                setProducts(data);
            } catch {
                setError('Не удалось загрузить товары');
            } finally {
                setIsLoading(false);
            }
        }
    fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value = {{products, isLoading, error}}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductsContext);
    
    if (!context) {
        throw new Error ('useProducts должен использоваться внутри ProductsProvider')
    }

    return context;
}