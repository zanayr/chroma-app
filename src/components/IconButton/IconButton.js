import React, {PureComponent} from 'react';

import styles from './IconButton.module.css';
import dingbats from '../../dingbats.module.css';

class IconButton extends PureComponent {
    render () {
        let style = [dingbats.Dingbat, styles.Icon];
        if (this.props.isAnimating)
            style.push(this.props.animation);
        return (
            <div
                className={[styles.IconButton, this.props.className].join(' ')}
                onClick={(e) => this.props.onClick(e)}
                style={{
                    borderColor: this.props.color,
                    color: this.props.color}}>
                <div>
                    <span className={style.join(' ')}>{this.props.children}</span>
                </div>
            </div>
        );
    }
};

export default IconButton;