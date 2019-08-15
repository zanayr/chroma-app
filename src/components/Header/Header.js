import React from 'react';

import styles from './Header.module.css';
import dingbats from '../../dingbats.module.css';

const header = (props) => {
    return (
        <header className={styles.Header}>
            <div>
                <div className={styles.Logo}>
                    <div>
                        <h1 style={{color: props.color}}>chroma.</h1>
                    </div>
                </div>
                <div className={styles.HomeButton}>
                    <div>
                        <span
                            className={[dingbats.Dingbat, styles.Icon, styles.Disabled].join(' ')}
                            style={{color: props.color}}>i</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default header;