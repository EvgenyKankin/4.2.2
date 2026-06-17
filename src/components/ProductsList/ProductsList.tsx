import { useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import LoaderCard from '../LoaderCard/LoaderCard';
import classes from './ProductsList.module.css';

import { fetchProducts } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../features/hooks';

function ProductsList() {
  const dispatch = useAppDispatch();

  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classes.cardContainer}>
        {Array.from({ length: 8 }).map((_, index) => (
          <LoaderCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={classes.cardContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;