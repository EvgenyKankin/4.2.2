import classes from './Container.module.css';
import type { ReactNode } from 'react';

type FeaturesCardProps = {
  children: ReactNode;
};

function Container({children}:FeaturesCardProps) {
    return (
        <div className={classes.container}>
            <h2 className={classes.titleText}>Catalog</h2>
            {children}
        </div>
    )
}

export default Container;