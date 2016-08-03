"use strict";
import React from 'react';
import {render} from 'react-dom';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title">{this.props.text}</h1>
        <p className="description">
          I'm a game developer from Venezuela.
          I enjoy programming, solving challenging problems and creating cool interactive experiences.
        </p>
      </div>

    );
  }
}
