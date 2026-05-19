import addToCart from '../addToCart/addToCart';
import classes from './FeaturesCard.module.css';
import {useState} from 'react';

type Product = {
  id : number
  name: string;
  price: number;
  image: string;
  category: string;
};

type ProductCardProps = {
  product : Product;
}

export function FeaturesCard({product, }:ProductCardProps) {
  
  const [title, details] = (product.name || '').split (' - ');
  const [quant, unit] = (details || '').split (' ');

  const [count, setCount] = useState<number>(1);


  return (
    <div className={classes.productCard}>
      <img className={classes.productImg} src={product.image} alt={title} />
      
      <div className={classes.cardTitle}>
        <div className ={classes.titleText}>
          <p className={classes.title}>{title}</p>
          <p className={classes.quant}>{quant}</p>
          <p className={classes.unit}>{unit}</p>
        </div>

        <div className={classes.counterContainer}>
          <button className ={classes.plusButton} onClick={()=>setCount(count+1)}></button>
          <div className={classes.counter}>{count}</div>
          <button className ={classes.minusButton} onClick={()=>setCount(count-1)}></button>
        </div>
      </div>
      
      <div className={classes.priceSection}>
        <p className={classes.price}>$ {product.price}</p>
        <button className={classes.addToCartButton} onClick={()=>addToCart(product, count)}></button>
      </div>
    </div>
  );
}