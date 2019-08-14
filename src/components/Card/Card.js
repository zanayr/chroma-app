import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    return (
    <div
        className={styles.Card}
        style={{
            left: props.left,
            top: props.top
        }}>
        <div>
            <h2 className={styles.Data}>{props.data}</h2>
            <h6 className={styles.Title}>{props.title}</h6>
        </div>
    </div>
    );
};

export default Card;