import React, {PureComponent} from 'react';

import styles from './ActionButton.module.css';

class ActionButton extends PureComponent {
    render () {
        let style = [styles.ActionButton];
        let alt = null;
        if (this.props.state)
            alt = this.props.altStyle;
        if (this.props.end)
            style.push(styles.End);
        return (
            <div
                className={style.join(' ')}
                onClick={this.props.onClick}
                style={{
                    borderColor: this.props.foreground,
                    color: this.props.foreground
                }}>
                <div>
                    <h6 className={alt}>{this.props.children}</h6>
                </div>
            </div>
        );
    }
};

export default ActionButton;