import classes from './WrapperCard.module.css';
import type { ReactNode } from 'react';

type FeaturesCardProps = {
  children: ReactNode;
};


function WrapperCard({children}:FeaturesCardProps) {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}

export default WrapperCard;