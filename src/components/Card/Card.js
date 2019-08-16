import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    const selection = props.foreground === '#f8f8f8' ? styles.DarkSelection : styles.LightSelection;
    return (
        <div
            className={styles.Card}
            style={{borderColor: props.foreground}}>
            <div
                className={props.onClick ? styles.Clickable : ''}
                onClick={props.onClick ? () => props.onClick(props.data) : null}>
                <h2 className={styles.Data + ' ' + selection}>{props.data}</h2>
                <p className={styles.Title + ' ' + selection}>{props.title}</p>
            </div>
        </div>
    );
};

export default Card;