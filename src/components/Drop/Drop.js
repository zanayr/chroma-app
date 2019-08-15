import React from 'react';

import styles from './Drop.module.css';

const drop = (props) => {
    return (<div
            className={styles.Drop}
            style={{
                backgroundColor: props.color,
                borderRadius: props.state === 'entering' ? 50 : props.max / 2,
                left: props.state === 'entering' ? props.x : props.x - props.max / 2,
                top: props.state === 'entering' ? props.y : props.y - props.max / 2,
                width: props.state === 'entering' ? 100 : props.max,
                height: props.state === 'entering' ? 100 : props.max
            }}></div>);
};

export default drop;