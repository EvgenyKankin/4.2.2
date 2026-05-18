import classes from './LoaderCard.module.css'

function LoaderCard() {
    return (
        <div className={classes.loaderCard}>
            <img className={classes.loaderImg} src='./src/assets/loaderImg.svg' />
        </div>
    )
}
export default LoaderCard;