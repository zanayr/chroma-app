import React from 'react';

import styles from './Drop.module.css';

const drop = (props) => {
    return (
        <span
            className={styles.Drop}
            style={{
                backgroundColor: props.color,
                borderRadius: props.radius,
                height: props.radius * 2,
                left: props.position.x - props.radius,
                top: props.position.y - props.radius,
                width: props.radius * 2,
            }}></span>
    );
};

export default drop;