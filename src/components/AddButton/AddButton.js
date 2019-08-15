import React, {PureComponent} from 'react';

import styles from './AddButton.module.css';
import dingbats from '../../dingbats.module.css';

class AddButton extends PureComponent {
    onClick = () => {
        if (this.props.isRemove)
            return this.props.onRemove();
        return this.props.onAdd();
    };
    render () {
        const style = [dingbats.Dingbat, styles.Icon];
        if (this.props.isRemove)
            style.push(styles.RemoveState);
        return (
            <div
                className={[styles.AddButton, this.props.className].join(' ')}
                onClick={() => this.onClick()}
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