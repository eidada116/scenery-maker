import React from 'react';
import Painter from './windows/Painter';
import Scenery from './windows/Scenery';
import '../styles/style.scss';

function Main() {
  return (
    <div className='main-window'>
      <Scenery className="left-window" />
      <Painter className="right-window" />
    </div>
  )
}

export default Main
