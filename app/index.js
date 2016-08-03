"use strict";
import React from 'react';
import {render} from 'react-dom';

import Title from './components/Title'
import GamesBoard from './components/GamesBoard'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Title text="Tony Ramírez"/>
        <GamesBoard />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
