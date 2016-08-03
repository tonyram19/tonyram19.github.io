"use strict";
import React from 'react';
import {render} from 'react-dom';

import GameCard from './GameCard'

export default class GamesBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <GameCard gameTitle="Isowood" gameLink="http://www.google.com" gameImageLink="/../../public/img/isowood.png"/>
        <GameCard gameTitle="mvsc" gameLink="www.google.com" gameImageLink="../../public/img/mvsc.png"/>
        <GameCard gameTitle="The Wonderful Shooter" gameLink="www.google.com" gameImageLink="../../public/img/shooter.jpg"/>
      </div>
    );
  }
}
