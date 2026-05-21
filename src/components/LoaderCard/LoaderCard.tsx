import classes from './LoaderCard.module.css'
import loaderImg from '../../assets/loaderImg.svg'

function LoaderCard() {
    return (
        <div className={classes.loaderCard}>
            <img className={classes.loaderImg} src={loaderImg} />
        </div>
    )
}
export default LoaderCard;