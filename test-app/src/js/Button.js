/**
 * Created by Виктория on 30.03.2017.
 */
import React, { Component } from 'react';
import './../css/Button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Button'
        };
    }
    render() {
        return (
            <div className="main">
                <button className="button">
                    {this.state.value}
                </button>
            </div>);
    }
}

export default Button;
