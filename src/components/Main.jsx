import React, { useEffect, useState } from 'react';
import Painter from './windows/Painter';
import Scenery from './windows/Scenery';
import '../styles/style.scss';
import logo from '../img/title.png';
import startApp from '../scripts/Start';

function Main() {
  const [isSceneMakerVisible, setSceneMakerVisible] = useState(false);

  useEffect(() => {
    startApp();
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

  const handleStartClick = () => {
    setSceneMakerVisible(true);
  };

  return (
    <div className='main-window'>
      <div className='title-screen' style={{ display: isSceneMakerVisible ? 'none' : 'flex' }}>
        <img src={logo} id="title" />
        <button id="start-btn" onClick={handleStartClick}>Start</button>
      </div>

      <div className='scene-maker-window' style={{ display: isSceneMakerVisible ? 'flex' : 'none' }}>
        <Scenery className="left-window" />
        <Painter className="right-window" />
      </div>
    </div>
  );
}

export default Main;