import React, { Component } from 'react';
import './App.css';

import Photo from './components/Photo';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="Container App row">
        <div className="col-lg-3">
          <Photo />
        </div>
        <div className="col-lg-9">
          <Menu />
        </div>
      </div>
    );
  }
}

export default App;
