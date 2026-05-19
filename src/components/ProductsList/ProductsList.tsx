import { FeaturesCard } from '../FeaturesCard/FeaturesCard';
import LoaderList from '../LoaderList/LoaderList';
import classes from './ProductsList.module.css'
import { useProducts } from '../ProductsContext/ProductsContext'

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
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
      ))}
    </div>
    )
}

export default ProductsList;