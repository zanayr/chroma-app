import React from 'react';

import styles from './Header.module.css';

const header = (props) => {
    return (
        <header className={styles.Header}>
            <div>
                <div className={styles.Logo}>
                    <div>
                        <h1 style={{color: props.foreground}}>chroma.</h1>
                    </div>
                </div>
                <div className={styles.Info}>
                    <div>
                        <h6
                            className={styles.Disabled}
                            style={{color: props.foreground}}>i</h6>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default header;