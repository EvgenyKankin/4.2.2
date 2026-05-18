import { FeaturesCard } from '../FeaturesCard/FeaturesCard';
import LoaderList from '../LoaderList/LoaderList';
import classes from './ProductsList.module.css'
import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};




function ProductsList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProducts () {
            try {
                const response = await fetch ('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')

                if (!response.ok) {
                    throw new Error('Ошибка загрузки товаров');
                }

                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error) {
                setError('Не удалось загрузить товары');
            } finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    },[]);

    if (isLoading) {
    return <LoaderList />
    }

    if (error) {
    return <p>{error}</p>;
    }

    return (
        <div className = {classes.cardContainer}>
            {products.map((product) => (
                <FeaturesCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
      ))}
    </div>
    )
}

export default ProductsList;