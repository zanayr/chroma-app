import React, {Component} from 'react';

import Field from '../components/Field/Field';
import Color from '../components/Color/Color';

import chroma from '../chroma-1.1.0';

import styles from './Main.module.css';

class Main extends Component {
    state = {
        value: '',
        data: {
            hex: '#ffffff',
            hexa: '#ffffffff',
            hsl: 'hsl(0, 0%, 100%)',
            hsla: 'hsla(0, 0%, 100%, 1)',
            hsv: 'hsv(0, 0%, 100%)',
            hsva: 'hsva(0, 0%, 100%, 1)',
            rgb: 'rgb(255, 255, 255)',
            rgba: 'rgba(255, 255, 255, 1)',
            x11: 'white'
        },
        colors: {
            primary: '#ffffff',
            secondary: '#f0f0f0',
            ui: '#242424',
        },
        last: '#ffffff',
        ui: {
            color: '#242424'
        }
    };
    componentDidMount () {

    }
    checkValue = (value) => {

    }
    populateData = (value) => {

    }
    handle_onChange = (event) => {
        const value = event.target.value;
        let color = '';
        if (chroma.validate(value)) {
            color = chroma(value).to('hex');
        } else {
            color = this.state.last
        }
        this.setState(prev => ({
            ...prev,
            value: value,
            colors: {
                ...prev.colors,
                primary: color
            }
        }));
    }
    handle_onExec () {
        
    }
    render () {
        return (
            <main
                className={styles.Main}
                style={{backgroundColor: this.state.colors.primary}}>
                <div style={this.state.ui}>
                    <div className={styles.TopHalf}>
                        <div>
                            <Field
                                color={this.state.ui.color}
                                onChange={this.handle_onChange}
                                onFinish={this.handle_onExec}
                                value={this.state.value}/>
                        </div>
                    </div>
                    <Color
                        color={this.state.colors.primary}/>
                </div>
            </main>
        );
    }
};

export default Main;