import classes from './FeaturesCard.module.css';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export function FeaturesCard({image, name, price}:ProductCardProps) {
  
  const [title, details] = (name || '').split (' - ');
  const [quant, unit] = (details || '').split (' ');


  return (
    <div className={classes.productCard}>
      <img className={classes.productImg} src={image} />
      
      <div className={classes.cardTitle}>
        <div className ={classes.titleText}>
          <p>{title}</p>
          <p>{quant}</p>
          <p>{unit}</p>
        </div>

        <div className={classes.counterContainer}>
          <button className ={classes.plusButton}></button>
          <div className={classes.counter}><p>1</p></div>
          <button className ={classes.minusButton}></button>
        </div>
      </div>
      
      <div className={classes.priceSection}>
        <p>$ {price}</p>
        <button className={classes.addToCartButton}></button>
      </div>
    </div>
  );
}