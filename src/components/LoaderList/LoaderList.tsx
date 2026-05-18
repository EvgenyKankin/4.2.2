import LoaderCard from '../LoaderCard/LoaderCard';
import classes from './LoaderList.module.css';

function LoaderList() {
    return (
        <div className={classes.loaderWrapper}>
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
            <LoaderCard />
        </div>
    )
}

export default LoaderList;