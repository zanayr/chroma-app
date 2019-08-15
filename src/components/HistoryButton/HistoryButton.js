import React, {PureComponent} from 'react';

import styles from './HistoryButton.module.css';

class HistoryButton extends PureComponent {
    render () {
        const isCurrent = this.props.color === this.props.data;
        let icon = null;
        return (
            <div
                className={styles.HistoryButton}
                onClick={isCurrent ? () => this.props.onDelete(this.props.data) : () => this.props.onClick(this.props.data)}
                style={{
                    backgroundColor: this.props.data,
                    border: isCurrent ? '1px solid ' + this.props.foreground : 'none'
                }}>
                <div>{icon}</div>
            </div>
        );
    }
};

export default HistoryButton;