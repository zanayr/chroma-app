import React, {Component} from 'react';

import Color from '../components/Color/Color';
import Field from '../components/Field/Field';
import List from '../components/List/List';

import chroma from '../chroma-1.1.0';

import styles from './Main.module.css';

const models = ['hex', 'hsl', 'hsv', 'rgb', 'x11'];
class Main extends Component {
    state = {
        data: {},
        last: [],
        model: '',
        primary: '#ffffff',
        secondary: '#f0f0f0',
        text: '#242424',
        value: '',
    };
    componentDidMount () {

    }
    setModel = (value) => {
        const regex = [
            /^#|0x/i,
            /^hsl/i,
            /^hsv/i,
            /^rgb/i,
            /^[A-Z]+$/i
        ];
        regex.forEach((rx, i) => {
            if (rx.test(value)) {
                this.setState(prev => ({
                    ...prev,
                    model: models[i]
                }));
            }
        });
    }
    populate = (value) => {
        const obj = chroma(value);
        const data = {
            hex: obj.to('hex'),
            hsl: obj.to('hsl'),
            hsv: obj.to('hsv'),
            rgb: obj.to('rgb'),
            x11: obj.to('x11')
        };
        this.setState(prev => ({
            ...prev,
            data: data
        }));
    };
    depopulate = () => {
        this.setState(prev => ({
            ...prev,
            data: {}
        }));
    };
    handle_onChange = (event) => {
        const value = event.target.value;
        let color = '';
        if (chroma.validate(value)) {
            this.setModel(value);
            this.populate(value);
            color = chroma(value).to('hex');
        } else {
            this.depopulate();
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
                style={{backgroundColor: this.state.data.hex}}>
                <div style={{color: this.state.text}}>
                    <div className={styles.TopHalf}>
                        <div>
                            <Field
                                color={this.state.text}
                                onChange={this.handle_onChange}
                                onFinish={this.handle_onExec}
                                value={this.state.value}/>
                        </div>
                    </div>
                    <div className={styles.BottomHalf}>
                        <div>
                            <List
                                data={this.state.data}
                                model={this.state.model}/>
                        </div>
                    </div>
                    {/* <Color
                        color={this.state.primary}/> */}
                </div>
            </main>
        );
    }
};

export default Main;