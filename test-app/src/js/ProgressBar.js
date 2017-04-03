/**
 * Created by Виктория on 30.03.2017.
 */
import React, { Component } from 'react';
import './../css/ProgressBar.css'

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '20%'
        };
    }
    render() {
        return (
            <div className="main">
                <div className="meter">
                    <span style={{"width" : this.state.value}}></span>
                    <p>{this.state.value}</p>
                </div>
            </div>);
    }
}

export default ProgressBar;