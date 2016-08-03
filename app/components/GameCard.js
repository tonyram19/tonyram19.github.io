"use strict";
import React from 'react';
import {render} from 'react-dom';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3>{this.props.gameTitle}</h3>
        <a href={this.props.gameLink} target="_blank">Play</a>
        <img src={this.props.gameImageLink}/>
      </div>
    );
  }
}
