import React, {PureComponent} from 'react';

import styles from './AddButton.module.css';
import dingbats from '../../dingbats.module.css';

class AddButton extends PureComponent {
    render () {
        const style = [dingbats.Dingbat, styles.Icon];
        if (this.props.state)
            style.push(styles.Remove);
        return (
            <div
                className={[styles.AddButton, this.props.className].join(' ')}
                onClick={this.props.onClick}
                style={{
                    borderColor: this.props.foreground,
                    color: this.props.foreground}}>
                <div>
                    <span className={style.join(' ')}>a</span>
                </div>
            </div>
        );
    }
};

export default AddButton;