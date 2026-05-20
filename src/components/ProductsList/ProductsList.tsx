import { FeaturesCard } from '../ProductCard/ProductCard';
import LoaderList from '../LoaderList/LoaderList';
import classes from './ProductsList.module.css'
import { useProducts } from '../../context/ProductsContext/ProductsContext'

function ProductsList() {
    const {products, isLoading, error} = useProducts();

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
                    product={product}
                />
      ))}
    </div>
    )
}

export default ProductsList;