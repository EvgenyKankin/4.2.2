import { ProductCard } from '../ProductCard/ProductCard';
import classes from './ProductsList.module.css'
import { useProducts } from '../../context/ProductsContext/ProductsContext'
import LoaderCard from '../LoaderCard/LoaderCard';

function ProductsList() {
    const {products, isLoading, error} = useProducts();

    if (isLoading) {
        return (
            <div className = {classes.cardContainer}>
                {Array.from({ length: 8 }).map((_) => (
                    <LoaderCard />
                ))}
            </div>
        )
    }

    if (error) {
    return <p>{error}</p>;
    }

    return (
        <div className = {classes.cardContainer}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
      ))}
    </div>
    )
}

export default ProductsList;