import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    console.log(props.color);
    const selection = props.color === '#f8f8f8' ? styles.DarkSelection : styles.LightSelection;
    console.log(selection);
    return (
    <div
        className={styles.Card}
        style={{borderColor: props.color}}>
        <div>
            <h2 className={styles.Data + ' ' + selection}>{props.data}</h2>
            <h6 className={styles.Title + ' ' + selection}>{props.title}</h6>
        </div>
    </div>
    );
};

export default Card;