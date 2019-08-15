// import React, {PureComponent} from 'react';

// import styles from './HistoryButton.module.css';
import React, {PureComponent} from 'react';

import styles from './HistoryButton.module.css';

class HistoryButton extends PureComponent {
    render () {
        const isActive = this.props.active === this.props.data;
        return (
            <div
                className={styles.HistoryButton}
                onClick={() => this.props.onClick(this.props.data)}
                style={{
                    backgroundColor: this.props.data,
                    border: isActive ? '1px solid ' + this.props.color : 'none',
                    cursor: isActive ? 'default' : 'pointer',
                }}>
                <div>
                </div>
            </div>
        );
    }
};

export default HistoryButton;