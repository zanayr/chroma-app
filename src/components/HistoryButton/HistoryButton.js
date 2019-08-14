import React, {PureComponent} from 'react';

import styles from './HistoryButton.module.css';

class HistoryButton extends PureComponent {
    render () {
        return (
            <div
                className={styles.HistoryButton}
                onClick={() => this.props.onClick(this.props.data)}
                style={{
                    backgroundColor: this.props.data.value,
                    border: this.props.active === this.props.data.value ? '1px solid ' + this.props.color : 'none',
                    cursor: this.props.active === this.props.data.value ? 'default' : 'pointer'
                }}>
                <div>
                </div>
            </div>
        );
    }
};

export default HistoryButton;