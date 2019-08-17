import React from 'react';

import Aux from '../../hoc/Aux/Aux';

import styles from './Display.module.css';

const display = (props) => {
    return (
        <Aux>
            <div
                className={styles.Display}
                style={{color: props.foreground}}>
                <div>
                    <h2>discover color.</h2>
                    <p>Convert a color model below or find a new one.</p>
                </div>
            </div>
        </Aux>
    );
}

export default display;