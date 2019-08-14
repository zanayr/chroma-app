import React from 'react';

import styles from './Field.module.css';

const field = (props) => {
    return (
        <div className={styles.Field}>
            <div>
                <label>model</label>
                <input
                    onChange={(event) => props.onChange(event)}
                    spellCheck={false}
                    style={{
                        borderColor: props.color,
                        color: props.color
                    }}/>
            </div>
        </div>
    );
}

export default field;