import React from 'react';

import styles from './Field.module.css';

const field = (props) => {
    return (
        <div className={styles.Field}>
            <div>
                <label>model</label>
                <input
                    onChange={(e) => props.onChange(e.target.value)}
                    spellCheck={false}
                    style={{
                        borderColor: props.color,
                        color: props.color
                    }}
                    value={props.value}/>
            </div>
        </div>
    );
}

export default field;