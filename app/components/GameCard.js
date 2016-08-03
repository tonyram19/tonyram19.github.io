"use strict";
import React from 'react';
import {render} from 'react-dom';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="gameCard">
        <a href={this.props.gameLink} target="_blank">
          <img className="gameImage" src={this.props.gameImageLink}/>
        </a>
        <a className="gameLink" href={this.props.gameLink} target="_blank">
          {this.props.gameTitle}
        </a>
      </div>
    );
  }
}
