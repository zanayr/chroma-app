import React from 'react';
import styles from './Color.module.css';

const color = (props) => {
    return (<div
            className={styles.Color}
            style={{backgroundColor: props.color}}></div>);
};

export default color;