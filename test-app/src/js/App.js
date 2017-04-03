import React, { Component } from 'react';
import './../css/App.css'
import Article from './Article.js';
import StarRating from './StarRating.js';
import ProgressBar from './ProgressBar.js';
import Button from './Button.js';
import BrowserIcons from './BrowserIcons.js';
import Text from './Text.js';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Article/>
          <StarRating/>
          <ProgressBar/>
          <Button/>
          <BrowserIcons/>
          <Text/>
        </div>
    );
  }
}

export default App;


