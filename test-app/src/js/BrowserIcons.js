/**
 * Created by Виктория on 30.03.2017.
 */
import React, { Component } from 'react';
import './../css/BrowserIcons.css';
import logoChrome from './../img/chrome.png';
import logoFireFox from './../img/firefox.png';
import logoOpera from './../img/opera.png';
import logoSafari from './../img/safari.png';
import logoIE from './../img/ie.png';

class BrowserIcons extends Component {
   render() {
        return (
            <div className="main">
                <div className="wrapper">
                    <img id="chrome" src={logoChrome} alt="Chrome"/>
                    <img id="firefox" src={logoFireFox} alt="FireFox"/>
                    <img id="opera" src={logoOpera} alt="Opera"/>
                    <img id="safari" src={logoSafari} alt="Safari"/>
                    <img id="ie" src={logoIE} alt="Internet Explorer"/>
                </div>
            </div>);
    }
}

export default BrowserIcons;