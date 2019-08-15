// import React, {PureComponent} from 'react';

// import styles from './HistoryButton.module.css';
import React, {PureComponent} from 'react';

import styles from './HistoryButton.module.css';

class HistoryButton extends PureComponent {
    render () {
        const isCurrent = this.props.current === this.props.data;
        return (
            <div
                className={styles.HistoryButton}
                onClick={() => this.props.onClick(this.props.data)}
                style={{
                    backgroundColor: this.props.data,
                    border: isCurrent ? '1px solid ' + this.props.color : 'none',
                    cursor: isCurrent ? 'default' : 'pointer',
                }}>
                <div>
                </div>
            </div>
        );
    }
};

export default HistoryButton;