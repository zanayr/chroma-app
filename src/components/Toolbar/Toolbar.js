import React from 'react';
import ActionButton from '../ActionButton/ActionButton';

import styles from './Toolbar.module.css';

const toolbar = (props) => {
    const dictionary = {b: 'random', c: 'clear', d: 'undo', e: 'redo'};
    const tools = props.data.map(t => {
        return (
            <ActionButton
                foreground={props.foreground}
                onClick={props.actions[dictionary[t]]}
                state={t === 'b' ? props.state : null}>
                {t}
            </ActionButton>
        );
    })
    return (
        <div className={styles.Toolbar}>
            <div>
                {tools}
            </div>
        </div>
    );
};

export default toolbar;