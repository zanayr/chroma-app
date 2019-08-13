import React from 'react';
import styles from './Field.module.css';

const field = (props) => {
    return (
        <div className={styles.Field}>
            <div>
                <label>Color String</label>
                <input
                    placeholder={'Color Model'}/>
            </div>
        </div>
    );
}

export default field;