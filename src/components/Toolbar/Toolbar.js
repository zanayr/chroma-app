import React from 'react';
import ActionButton from '../ActionButton/ActionButton';

import styles from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <div className={styles.Toolbar}>
            <div>
                <ActionButton
                    foreground={props.foreground}
                    disabled={!props.state.undo}
                    onClick={props.actions.undo}>
                    c
                </ActionButton>
                <ActionButton
                    foreground={props.foreground}
                    disabled={!props.state.clear}
                    onClick={props.actions.clear}>
                    d
                </ActionButton>
                <ActionButton
                    altStyle={styles.Rotate}
                    disabled={false}
                    foreground={props.foreground}
                    onClick={props.actions.random}
                    state={props.state.random}>
                    b
                </ActionButton>
            </div>
        </div>
    );
};

export default toolbar;