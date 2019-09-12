import React from 'react';
import Battleship from './images/BattleshipShape.png';

function Header() {
  return <img src={Battleship} style={{width:'100%'}} alt="Battleship" />;
}

export default Header;