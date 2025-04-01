import React from 'react';
import Painter from './windows/Painter';
import Scenery from './windows/Scenery';
import '../styles/style.scss';
import { useEffect, useState } from 'react';
import logo from '../img/title.png';


function Main() {

  useEffect(() => {
    
    const sound = new Audio('/sounds/matcha.mp3');

    const handleUserInteraction = () => {
      sound.play().catch((error) => console.error("Audio play error:", error));
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className='main-window'>
      {/*<div className='title-screen'>
        <img src={logo} id="title"/>
        <button id="start-btn">Start</button>
      </div>
      
      **/}
      <Scenery className="left-window" />
      <Painter className="right-window" />

      {/*<div className='scene-maker-window' style={{display:"none"}}>
        
      </div>*/}
    </div>
  )
}

export default Main
