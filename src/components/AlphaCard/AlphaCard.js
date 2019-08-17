import React from 'react';

import styles from './AlphaCard.module.css';

const alphaCard = (props) => {
    return (
        <div className={styles.AlphaCard}>
            <div>
                <span
                    className={styles.Opacity90}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity80}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity70}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity60}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity50}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity40}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity30}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity20}
                    style={{backgroundColor: props.foreground}}></span>
                <span
                    className={styles.Opacity10}
                    style={{backgroundColor: props.foreground}}></span>
            </div>
        </div>
    );
};

export default alphaCard;