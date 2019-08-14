import React, {PureComponent} from 'react';

import styles from './AddButton.module.css';

class AddButton extends PureComponent {
    render () {
        return (
            <div
                className={styles.AddButton}
                onClick={(e) => this.props.onClick(e)}
                style={{borderColor: this.props.color, color: this.props.color}}>
                <div>
                    <span>+</span>
                </div>
            </div>
        );
    }
};

export default AddButton;