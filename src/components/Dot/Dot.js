import React, {PureComponent} from 'react';

import styles from './Dot.module.css';

class Dot extends PureComponent {
    render () {
        return (
            <span
                className={styles.Dot}
                onClick={this.props.onClick}
                style={{
                    backgroundColor: this.props.color,
                    border: this.props.background === this.props.color ? '1px solid ' + this.props.foreground : 'none'
                }}>
            </span>
        );
    }
};

export default Dot;