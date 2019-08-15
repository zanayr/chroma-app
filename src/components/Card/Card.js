import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    const selection = props.color === '#f8f8f8' ? styles.DarkSelection : styles.LightSelection;
    return (
        <div
            className={styles.Card}
            style={{borderColor: props.color}}>
            <div
                className={props.onClick ? styles.Clickable : ''}
                onClick={props.onClick ? () => props.onClick(props.data) : null}>
                <h2 className={styles.Data + ' ' + selection}>{props.data}</h2>
                <h6 className={styles.Title + ' ' + selection}>{props.title}</h6>
            </div>
        </div>
    );
};

export default Card;