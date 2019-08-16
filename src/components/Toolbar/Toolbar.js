import React from 'react';
import ActionButton from '../ActionButton/ActionButton';

import styles from './Toolbar.module.css';

const toolbar = (props) => {
    return (
        <div className={styles.Toolbar}>
            <div>
                <ActionButton
                    foreground={props.foreground}
                    onClick={actions.random}>b</ActionButton>
                <ActionButton
                    foreground={props.foreground}
                    onClick={actions.undo}>c</ActionButton>
                <ActionButton
                    foreground={props.foreground}
                    end
                    onClick={actions.redo}>a</ActionButton>
            </div>
        </div>
    );
};

export default toolbar;